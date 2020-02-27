import React from "react"
import { useLogoutMutation } from "../graphql/index"

const Login = () => {
  const [logout] = useLogoutMutation()
  
  return (
    <button onClick={() => {
      localStorage.setItem("token", "")
      logout()
    }}>
      logout
    </button>
  )
}

export default Login