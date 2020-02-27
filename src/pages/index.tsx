import React from "react"
import withApollo from "../lib/with-apollo"
import { useAuth0 } from "../lib/auth0-spa"
import NavigationBar from "../components/NavigationBar"
// import AuthProvider, {useAuthState} from "../components/Auth"
// import UnauthenticatedApp from "../components/UnauthenticatedApp"
// import AuthenticatedApp from "../components/AuthenticatedApp"

const Index = () => {
  const { user } = useAuth0()

  return (
    <>
      <div>
        {user && user.nickname}
        <NavigationBar />
      </div>
    </>
  )
}

export default withApollo(Index)