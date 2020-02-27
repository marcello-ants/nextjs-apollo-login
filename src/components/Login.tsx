import React from "react"
import { Formik } from "formik"
import { useLoginMutation, LoginDocument } from "../graphql/index"

interface LoginProps {
  sendLoginInfo: (data: object) => void
}

const Login = ({sendLoginInfo}: LoginProps) => {
  const [input, setInput] = React.useState(LoginDocument)

  const sendData = (data: object) => {
    sendLoginInfo(data)
  }
  
  const [loginMutation] = useLoginMutation({
    variables: input,
    onCompleted: (data) => sendData(data),
    onError: (error) => console.log(error)
  })
  
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
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
          </form>
        )
      }}
    />
  )
}

export default Login