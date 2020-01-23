import React from "react"
import { Formik } from "formik"
import { useLoginMutation, LoginDocument, useLogoutMutation } from "../src/generated/graphql"
import withApollo from "../lib/with-apollo"

const Login = () => {
  const [input, setInput] = React.useState(LoginDocument)
  const [logout] = useLogoutMutation()
  
  const [loginMutation] = useLoginMutation({
    variables: input,
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error)
  });
  
  return (
    <Formik
      initialValues={{ email: "", password: ""}}
      onSubmit={async (values, { setSubmitting }) => {
        setInput({...input, email: values.email, password: values.password })
        await loginMutation(input)
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