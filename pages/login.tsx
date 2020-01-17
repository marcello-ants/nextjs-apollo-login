import React from "react"
import { Formik } from "formik"
import { useLoginMutation } from "../src/generated/graphql"

export default () => {
  const [login] = useLoginMutation()

  return (
    <Formik
      initialValues={{ email: "", password: ""}}
      onSubmit={async (values, { setSubmitting }) => {
        const input: Partial<any> = {
          email: values.email, 
          password: values.password
        }
        
        await login(input)
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
          </form>
        )
      }}
    />
  )
}
