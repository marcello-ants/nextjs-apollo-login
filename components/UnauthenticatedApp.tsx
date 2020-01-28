import React from "react"
import Login from "./Login"

interface Props {
  sendLocalData: (data: any) => void
}

const UnauthenticatedApp = ({sendLocalData}: Props) => {
  let localData:any = { token: undefined}

  if (typeof window !== 'undefined') {
    localData.token = localStorage.getItem("token") 
  } 

  const getLoginInfo = (data: any) => {
    localStorage.setItem("token", data.loginWithPassword.token)
    localData.token = localStorage.getItem("token")
    sendLocalData(localData)
  }

  return (
    <>
      <p>you're not logged in</p>
      <Login sendLoginInfo={getLoginInfo}/>
    </>
  )
}

export default UnauthenticatedApp