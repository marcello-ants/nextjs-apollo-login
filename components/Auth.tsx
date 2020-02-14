import React from "react"

interface Props {
  children: any
}

const AuthContext = React.createContext({})

export function useAuthState(){
  const state = React.useContext(AuthContext)
  return state
}

function AuthProvider({children}: Props) {
  const [isLogged, setIsLogged] = React.useState()

  React.useEffect(() => {
    if (localStorage.getItem("token")) setIsLogged(true)
    else setIsLogged(false)
  }, [])
  
  return (
    <AuthContext.Provider value={isLogged}>
      {isLogged ? (
        children
      ) : (
        <div>you must be logged in to see this content</div>
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider



