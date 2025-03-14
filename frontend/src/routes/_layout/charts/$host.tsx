import {createFileRoute} from "@tanstack/react-router"
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {Button, Card, Heading, Input, Stack, Text} from "@chakra-ui/react";
import {useEffect, useState, } from "react";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import {FaUserAstronaut} from "react-icons/fa";
import {InputGroup} from "../../../components/ui/input-group.tsx";

ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);


export const Route = createFileRoute("/_layout/charts/$host")({
    component: Charts,
})


function Charts() {

    const config = {

        data: {
            labels: Array(),
            datasets: [{
                label: "Memory",
                backgroundColor: 'rgba(147,51,234, 1)',
                borderColor: 'rgba(147, 51, 234,1)',
                data: Array(),
                fill: false,
            }],
        },
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    };


    const [chartOptions, setChartOptions] = useState(config.data)
    const { host } = Route.useParams()
    const url = `http://localhost:8000/api/v1/charts/${host}/chart-data`
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    // Update Chart Data
    const updateChart = () => {
        setChartOptions((currentOptions) => ({
            ...currentOptions,
            data: chartOptions,
        }));
    };

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchData = async () => {

            await fetchEventSource(`${url}`, {
                // @ts-ignore
                onopen(event) {
                    event.json().then((data) => {
                        if (!!data.error) {
                            setError(`${data.error}`)
                            return
                        } else {
                            setError("")
                        }
                        if (chartOptions.labels.length === 20) {
                            chartOptions.labels.shift();
                            chartOptions.datasets[0].data.shift();
                        }
                        chartOptions.labels.push(data.time);
                        chartOptions.datasets[0].data.push(data.value);
                        chartOptions.datasets[0].label = data.host
                    });

                    updateChart()

                },
                onclose() {
                    controller.abort()
                },
                signal,
            });

        };

        fetchData();
        return () => controller.abort()

    }, []);

    const [count, setCount] = useState(0)

    return (
        <Stack direction="row">
            <Card.Root width="70%">
                <Card.Header pb="0">
                    <Heading as="h4" fontWeight="medium" size="md" id="host">
                        {chartOptions.datasets[0].label}
                    </Heading>
                </Card.Header>
                <Card.Body height="10%">
                    {!error && <Line id="Chart" options={config.options} data={chartOptions} height="inherit" />}
                    {error && <Text>{error}</Text>}
                </Card.Body>
            </Card.Root>
            <Card.Root width="30%">
                <Card.Body>
                    <InputGroup w="100%" startElement={<FaUserAstronaut />}>
                        <Input
                            id="host"
                            placeholder="Enter your host name "
                            type="text"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </InputGroup>

                    <Button m={5} onClick={() => setCount(count + 1)}>
                        Value: {count}
                    </Button>
                    <Text>{text}</Text>
                </Card.Body>
            </Card.Root>
        </Stack>
    )
}

