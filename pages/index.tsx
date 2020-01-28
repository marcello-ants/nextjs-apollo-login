import withApollo from "../lib/with-apollo"
import UnauthenticatedApp from "../components/UnauthenticatedApp"
import AuthenticatedApp from "../components/AuthenticatedApp"
// import {useState} from "react"

const Index = () => {
  let localData:any = { token: undefined}

  if (typeof window !== 'undefined') {
    localData.token = localStorage.getItem("token") 
  } 

  // const [token, setToken] = useState(undefined)

  const getLocalData = (data: any) => {
    localStorage.setItem("token", data.loginWithPassword.token)
    localData.token = localStorage.getItem("token")
  }

  return (
    <div>
      {!localData.token 
        ? <UnauthenticatedApp sendLocalData={getLocalData} /> 
        : <AuthenticatedApp />
      }
    </div>
  )
}

export default withApollo(Index)
