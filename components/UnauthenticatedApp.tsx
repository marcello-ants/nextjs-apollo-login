import React from "react"
import Login from "./Login"
import Link from "next/link"

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
      <Link href="surveys">surveys</Link>
      <Login sendLoginInfo={getLoginInfo}/>
    </>
  )
}

export default UnauthenticatedApp