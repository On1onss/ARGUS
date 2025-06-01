import {
    Box,
    Button,
    Card, createListCollection,
    Input, Portal,
    Select,
    Text,
    Stack,

} from "@chakra-ui/react"
import {
    FormControl,
} from "@chakra-ui/form-control"
import {Formik} from "formik";
import {createFileRoute} from "@tanstack/react-router"
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth"
import {HiColorSwatch} from "react-icons/hi";
import {EmptyState} from "../../components/Common/EmptyState.tsx"
import {CustomPagination} from "../../components/Common/Pagination.tsx"
import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form"
import {z} from "zod"

const formSchema = z.object({
    framework: z.string({message: "Framework is required"}).array(),
})

type FormValues = z.infer<typeof formSchema>

export const Route = createFileRoute("/_layout/")({
    component: Dashboard,
})


function Dashboard() {
    const {user: currentUser} = useAuth()
    // @ts-ignore
    const [host, setHost] = useState("localhost")
    const [hosts, setHosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [description, setDescription] = useState<string | null>(null)

    const {
        handleSubmit,
        formState: {errors},
        control,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit = handleSubmit(() => {
        fetch("http://localhost:8000/api/v1/hosts/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({host: `${host}`, description: `${description}`, last_visit: "now"}),
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Fetch error:', error))
    })

    useEffect(() => {
        const interval = setInterval(() => {

            const fetchHosts = async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/v1/hosts/', {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })

                    if (!response.ok) throw new Error('Ошибка загрузки хостов')
                    const data = await response.json()
                    setHosts(data)
                } catch (err) {
                    // @ts-ignore
                    setError(err.message)
                } finally {
                    setLoading(false)
                }
            }

            fetchHosts()
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const frameworks = createListCollection({
        items: [
            {label: "Ping", value: "ping"},
            {label: "Agent", value: "agent"},
        ],
    })

    // @ts-ignore
    return (
        <Card.Root>
            <Box pt={1} m={4}>
                <Text fontSize="2xl" maxW="sm">
                    Hi, {currentUser?.username} 👋🏼
                </Text>
                <Text>Welcome back, nice to see you again!</Text>

            </Box>
            <Box pt={1} m={4}>
                <Formik
                    initialValues={{
                        host: "",
                        description: "",
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {(<form onSubmit={onSubmit}>
                            <Stack gap="4" align="flex-start">
                                <FormControl>
                                    <Input
                                        id="host"
                                        placeholder="Enter your host name"
                                        type="text"
                                        onChange={(e) => setHost(e.target.value)}
                                    />
                                </FormControl>
                                <Controller
                                    control={control}
                                    name="framework"
                                    render={({field}) => (
                                        <Select.Root
                                            name={field.name}
                                            value={field.value}
                                            onValueChange={({value}) => field.onChange(value) && setDescription(value)}
                                            onInteractOutside={() => field.onBlur()}
                                            collection={frameworks}
                                        >
                                            <Select.HiddenSelect/>
                                            <Select.Control>
                                                <Select.Trigger>
                                                    <Select.ValueText placeholder="Select type"/>
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator/>
                                                </Select.IndicatorGroup>
                                            </Select.Control>
                                            <Portal>
                                                <Select.Positioner>
                                                    <Select.Content>
                                                        {frameworks.items.map((framework) => (
                                                            <Select.Item item={framework} key={framework.value}>
                                                                {framework.label}
                                                                <Select.ItemIndicator/>
                                                            </Select.Item>
                                                        ))}
                                                    </Select.Content>
                                                </Select.Positioner>
                                            </Portal>
                                        </Select.Root>
                                    )}
                                />

                                <Button size="sm" type="submit">
                                    Add
                                </Button>
                            </Stack>
                        </form>
                    )}
                </Formik>
            </Box>


            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text color="red.500">{error}</Text>
            ) : hosts.hosts.length === 0 ? (
                <EmptyState
                    title="Start adding hosts"
                    description="Add a new hosts"
                    icon={<HiColorSwatch/>}
                />
            ) : (
                <CustomPagination
                    items={hosts.hosts}
                    pageSize={5}

                    count={hosts.hosts.length}
                />
            )}
        </Card.Root>

    )
}
