import React from "react"
import withApollo from "../lib/with-apollo"
import AuthProvider, {useAuthState} from "../components/Auth"
import UnauthenticatedApp from "../components/UnauthenticatedApp"
import AuthenticatedApp from "../components/AuthenticatedApp"

interface LocalDataTypes {
  token: string | null
}

const App = () => {
  let localData:LocalDataTypes = { token: ""}
  if (typeof window !== 'undefined') {
    localData.token = localStorage.getItem("token") 
  } 

   const setToken = (data: any) => {
    localStorage.setItem("token", data.loginWithPassword.token)
    localData.token = localStorage.getItem("token")
  }

  const user = useAuthState()

  const [isLogged, setIsLogged] = React.useState()

  React.useEffect(() => {
    if (user) setIsLogged(true)
    else setIsLogged(false)
  }, [])
  
  return isLogged ? <AuthenticatedApp /> : <UnauthenticatedApp sendLocalData={setToken} />
} 

const Index = () => {
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
}

export default withApollo(Index)