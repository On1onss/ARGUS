import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Pagination as ChakraPagination,
    Stack,
    Text
} from "@chakra-ui/react"
import * as React from "react"
import {useState} from "react";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";


export interface PaginationProps extends ChakraPagination.RootProps {
    items: { id: string, host: string, description: string, available: boolean, last_visit: string }[];
    pageSize: number | 5
}



export const CustomPagination = React.forwardRef<HTMLDivElement, PaginationProps>(


    function Pagination(props, ref) {
        const [page, setPage] = useState(1)
        const { items, pageSize } = props
        const startRange = (page - 1) * pageSize
        const endRange = startRange + pageSize
        const count = items.length
        const visibleItems = items.slice(startRange, endRange)

        setInterval(() => {

            }, 10000)


        return (
            <Stack gap="4" ref={ref} >
                <Stack m={4} >
                    {visibleItems.map((item) => (
                        <Stack direction="row" key={item.id}>
                            <Box shadow="md"
                                 w="100%"
                                 p="3"
                                 _hover={{ bg: "purple.700" }}
                                 borderRadius="md"
                                 key={item.id}
                            >
                                <Stack direction="row">
                                    {item.description === "ping" ? (
                                        <Button shadow="md"
                                                position="relative"
                                                key={item.host}
                                        >
                                            <a href={"http://localhost:5173/health_check/"+item.host}>{item.host}</a>
                                        </Button>
                                    )  : (
                                        <Button shadow="md"
                                                position="relative"
                                                key={item.host}
                                        >
                                            <a href={"http://localhost:5173/charts/"+item.host}>{item.host}</a>
                                        </Button>
                                    )}
                                    <Box p="2"
                                         _hover={{ bg: "purple.600" }}
                                         borderRadius="20px"
                                         key={item.id}
                                    >
                                    <Text>{item.description}</Text>
                                    </Box>
                                    <Button shadow="md" colorPalette="red" onClick={() => {
                                        fetch(`http://localhost:8000/api/v1/hosts/${item.host}`, {
                                            method: "DELETE",
                                        })
                                    }}>
                                        Delete
                                    </Button>

                                </Stack>
                            </Box>
                        </Stack>

                    ))}
                </Stack>
                <ChakraPagination.Root
                    count={count}
                    pageSize={pageSize}
                    page={page}
                    onPageChange={(e) => setPage(e.page)}
                >
                    <ButtonGroup variant="ghost" size="sm" position="relative; top: -10px; left: 10px;">
                        <ChakraPagination.PrevTrigger asChild>
                            <IconButton >
                                <HiChevronLeft />
                            </IconButton>
                        </ChakraPagination.PrevTrigger>

                        <ChakraPagination.Context>
                            {({ pages }) =>
                                pages.map((page, index) =>
                                    page.type === "page" ? (
                                        <IconButton>
                                            {page.value}
                                        </IconButton>
                                    ) : (
                                        <ChakraPagination.Ellipsis key={index} index={index} ><Text>...</Text></ChakraPagination.Ellipsis>
                                    ),
                                )
                            }
                        </ChakraPagination.Context>

                        <ChakraPagination.NextTrigger asChild>
                            <IconButton>
                                <HiChevronRight />
                            </IconButton>
                        </ChakraPagination.NextTrigger>
                    </ButtonGroup>
                </ChakraPagination.Root>
            </Stack>
        )
    },
)
