import React from "react"

interface Props {
  children: any
}

const AuthContext = React.createContext({})

export function useAuthState(){
  const state = React.useContext(AuthContext)
  console.log("state", state)
  return {...state}
}

function AuthProvider({children}: Props) {
  // const [state, setState] = React.useState({
  //   status: "pending",
  //   error: null,
  //   user: null
  // })

  // React.useEffect(() => {
  //   if (localStorage.getItem("token")) setState({status: "success", error: null, user: "jorge"})
  //   else setState(false)
  // })  

  // const [isLogged, setIsLogged] = React.useState()
  const [state, setState] = React.useState({
    isLogged: false
  })

  React.useEffect(() => {
    if (localStorage.getItem("token")) setState({isLogged: true})
    else setState({isLogged: false})
  }, [])
  
  return (
    <AuthContext.Provider value={state}>
      {state.isLogged ? (
        children
      ) : (
        <div></div>
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider



