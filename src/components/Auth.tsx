import React from "react"

interface Props {
  children: any
}

const AuthContext = React.createContext({})

export default function AuthProvider({children}: Props) {
  const [isLogged, setIsLogged] = React.useState()

  React.useEffect(() => {
    if (localStorage.getItem("token")) setIsLogged(true)
    else setIsLogged(false)
  }, [])

  return (
    <AuthContext.Provider value={isLogged}>
      {isLogged === undefined ? (
        <div></div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  const state = React.useContext(AuthContext);
  return state
}
