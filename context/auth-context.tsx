/** @jsx jsx */
// import {jsx} from '@emotion/core'

import React from 'react'
const AuthContext = React.createContext({})

function AuthProvider(props: any) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
  const {
    data = {user: null, listItems: []},
    error,
    isRejected,
    isPending,
    isSettled,
  } = props

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled])

  if (!firstAttemptFinished) {
    if (isPending) {
      return <div>loading</div>
    }
    if (isRejected) {
      return (
        <div>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }
  }

  // const login = form => authClient.login(form).then(reload)
  // const register = form => authClient.register(form).then(reload)
  // const logout = () => authClient.logout().then(reload)

  return (
    <AuthContext.Provider value={{data}} {...props} />
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuth}