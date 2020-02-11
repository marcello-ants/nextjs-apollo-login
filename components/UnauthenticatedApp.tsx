import React from "react"
import Login from "./Login"

interface Props {
  sendLocalData: (data: object) => void
}

const UnauthenticatedApp = ({sendLocalData}: Props) => {
  const getLoginInfo = (data: object) => {
    sendLocalData(data)
  }

  return (
    <>
      <p>you're not logged in</p> 
      <Login sendLoginInfo={getLoginInfo}/>
    </>
  )
}

export default UnauthenticatedApp