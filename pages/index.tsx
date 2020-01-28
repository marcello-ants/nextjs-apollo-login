import withApollo from "../lib/with-apollo"
import UnauthenticatedApp from "../components/UnauthenticatedApp"
import AuthenticatedApp from "../components/AuthenticatedApp"
import {useState} from "react"

const Index = () => {
  const [token, setToken] = useState(undefined)

  const getLocalData = (data: any) => {
    setToken(data.token)    
  }

  return (
    <div>
      {!token 
        ? <UnauthenticatedApp sendLocalData={getLocalData} /> 
        : <AuthenticatedApp />
      }
    </div>
  )
}

export default withApollo(Index)
