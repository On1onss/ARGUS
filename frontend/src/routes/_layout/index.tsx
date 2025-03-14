import {Box, Button, Card, Container, Input, Text} from "@chakra-ui/react"
import {createFileRoute} from "@tanstack/react-router"

import useAuth from "../../hooks/useAuth"
import {InputGroup} from "../../components/ui/input-group.tsx";
import {FaUserAstronaut} from "react-icons/fa";
import {useState} from "react";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {
  const { user: currentUser } = useAuth()
  const [host, setHost] = useState("localhost")

  return (
    <>
      <Container maxW="full">
        <Card.Root>
        <Box pt={1} m={4}>
          <Text fontSize="2xl" truncate maxW="sm">
            Hi, {currentUser?.username} 👋🏼
          </Text>
          <Text>Welcome back, nice to see you again! {host}</Text>
        </Box>
        <InputGroup m={4} w="95%" startElement={<FaUserAstronaut />}>
          <Input
              id="host"
              placeholder="Enter your host name"
              type="text"
              onChange={(e) => setHost(e.target.value)}
          />
        </InputGroup>
        <Box pt={1} m={4} colorPalette=''>
        <Button>
          <a href={"http://localhost:5173/charts/"+host}>Go chart</a>
        </Button>
        </Box>
        </Card.Root>

      </Container>
    </>
  )
}
