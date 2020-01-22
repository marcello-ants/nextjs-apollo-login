import React from "react"
import { Formik } from "formik"
import { useLoginMutation, LoginDocument, useLogoutMutation } from "../src/generated/graphql"
import withApollo from "../lib/with-apollo"

const Login = () => {
  const [logout] = useLogoutMutation()
  const [loginMutation, {data, loading}] = useLoginMutation(LoginDocument)

  async function submitForm(input: any) {
    try {
      await loginMutation(input)
      if (!loading) console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: ""}}
      onSubmit={async (values, { setSubmitting }) => {
        const input: Partial<any> = {
          variables: {
            email: values.email, 
            password: values.password
          }
        }
        submitForm(input)
        setSubmitting(false)
      }}
      render={({
        values,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              e-mail
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="password" style={{ display: "block" }}>
              password
            </label>
            <input
              id="password"
              placeholder="enter your password"
              type="text"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
            <button onClick={() => logout()}>
              logout
            </button>
          </form>
        )
      }}
    />
  )
}

export default withApollo(Login)

// HOC
// high order function