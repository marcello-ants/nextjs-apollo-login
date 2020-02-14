import React from "react"
// import {useAuth} from './auth-context'

const UserContext = React.createContext({})

function UserProvider(props: any) {

  const [state, setState] = React.useState({
    isLogged: false
  })

  React.useEffect(() => {
    if (localStorage.getItem("token")) setState({isLogged: true})
    else setState({isLogged: false})
  }, [])

  return <UserContext.Provider value={state} {...props} />
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

export {UserProvider, useUser}