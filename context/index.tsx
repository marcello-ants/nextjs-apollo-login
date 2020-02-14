import React from "react"
import AuthProvider from "../components/Auth"
import {UserProvider} from "./user-context"

interface Props {
  children: any
}

function AppProviders({children}: Props) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}

export default AppProviders