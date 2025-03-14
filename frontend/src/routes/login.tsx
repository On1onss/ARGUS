import {Card, Container, Image, Input} from "@chakra-ui/react"
import {
  // Link as RouterLink,
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import { type SubmitHandler, useForm } from "react-hook-form"
import { FiLock } from "react-icons/fi"
import { FaUserAstronaut } from "react-icons/fa"

import type { BodyTokenApiV1AuthTokenPost as AccessToken } from "../client"
import { Button } from "../components/ui/button"
import { Field } from "../components/ui/field"
import { InputGroup } from "../components/ui/input-group"
import { PasswordInput } from "../components/ui/password-input"
import useAuth, { isLoggedIn } from "../hooks/useAuth"

import Logo from "../assets/logo.svg"
import {namePattern, passwordRules} from "../utils"

export const Route = createFileRoute("/login")({
  component: Login,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      })
    }
  },
})

function Login() {
  const { loginMutation, error, resetError } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccessToken>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    if (isSubmitting) return

    resetError()

    try {
      await loginMutation.mutateAsync(data)
    } catch {
      // error is handled by useAuth hook
    }
  }
  return (
    <>
      <Container
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        h="100vh"
        maxW="sm"
        alignItems="stretch"
        justifyContent="center"
        gap={4}
        centerContent
      >
        <Card.Root size="lg">
          <Card.Body>
        <Image
          src={Logo}
          alt="ARGUS logo"
          height="auto"
          maxW="2xs"
          alignSelf="center"
          mb={4}
        />


        <Field
          invalid={!!errors.username}
          errorText={errors.username?.message || !!error}
        >
          <InputGroup w="100%" startElement={<FaUserAstronaut />} mb={4}>
            <Input
              id="username"
              {...register("username", {
                required: "Username is required",
                pattern: namePattern,
              })}
              placeholder="Username"
              type="text"
              maxLength={20}
            />
          </InputGroup>

        </Field>
        <PasswordInput
          type="password"
          startElement={<FiLock />}
          {...register("password", passwordRules())}
          placeholder="Password"
          errors={errors}
        />

        {/*<RouterLink to="/recover-password" className="main-link">*/}
        {/*  Forgot Password?*/}
        {/*</RouterLink>*/}
        <Button variant="solid" type="submit" loading={isSubmitting} size="md" mt={5}>
          Log In
        </Button>
          </Card.Body>
        </Card.Root>

        {/*<Text>*/}
        {/*  Don't have an account?{" "}*/}
        {/*  <RouterLink to="/signup" className="main-link">*/}
        {/*    Sign Up*/}
        {/*  </RouterLink>*/}
        {/*</Text>*/}
      </Container>
    </>
  )
}
