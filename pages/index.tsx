import React from "react"
import withApollo from "../lib/with-apollo"
import UnauthenticatedApp from "../components/UnauthenticatedApp"
import AuthenticatedApp from "../components/AuthenticatedApp"
import AuthProvider, {useAuthState} from "../components/Auth"

interface LocalDataTypes {
  token: string | null
}

const Index = () => {
  let localData:LocalDataTypes = { token: ""}
  const [isLoggedIn, setLoggedIn] = React.useState()

  if (typeof window !== 'undefined') {
    localData.token = localStorage.getItem("token") 
  } 

   const setToken = (data: any) => {
    localStorage.setItem("token", data.loginWithPassword.token)
    localData.token = localStorage.getItem("token")
    setLoggedIn(true)
  }
  
  React.useEffect(() =>{
    if (localStorage.getItem("token")) setLoggedIn(true)
    else setLoggedIn(false)
  }, [])

  if (isLoggedIn == undefined) return <div></div>

  const user = useAuthState()

  console.log("user", user)

  return (
    <AuthProvider>
      {!isLoggedIn 
        ? <UnauthenticatedApp sendLocalData={setToken} /> 
        : <AuthenticatedApp />
      }      
    </AuthProvider>
  )
}

export default withApollo(Index)
