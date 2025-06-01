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
import {Card, CardBody, CardHeader, Heading, Text} from "@chakra-ui/react";
import {useEffect, useState, } from "react";
import { fetchEventSource } from '@microsoft/fetch-event-source';

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


export const Route = createFileRoute("/_layout/health_check/$host")({
    component: Charts,
})


function Charts() {

    const config = {

        data: {
            labels: Array(),
            datasets: [{
                label: "Response",
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
                        text: 'ms'
                    }
                }
            }
        }
    };


    const [chartOptions, setChartOptions] = useState(config.data)
    const { host } = Route.useParams()
    const url = `http://localhost:8000/api/v1/health_check/${host}`

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


    return (
            <Card.Root>
                <CardHeader pb="0">
                    <Heading as="h4" fontWeight="medium" size="md" id="host">
                        {host}
                    </Heading>
                </CardHeader>
                <CardBody>
                    {!error && <Line id="Chart" options={config.options} data={chartOptions} height="inherit" />}
                    {error && <Text>{error}</Text>}
                </CardBody>
            </Card.Root>
    )
}

