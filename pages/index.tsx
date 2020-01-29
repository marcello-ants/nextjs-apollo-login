import withApollo from "../lib/with-apollo"
import UnauthenticatedApp from "../components/UnauthenticatedApp"
import AuthenticatedApp from "../components/AuthenticatedApp"

interface LocalDataTypes {
  token: string | null
}

const Index = () => {
  let localData:LocalDataTypes = { token: ""}

  if (typeof window !== 'undefined') {
    localData.token = localStorage.getItem("token") 
  } 

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
