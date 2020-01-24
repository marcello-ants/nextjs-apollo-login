import React, {useState} from "react"
import Login from "./Login"

const UnauthenticatedApp = () => {
  const [token, setToken] = useState("")
  const localData = localStorage.getItem("token")

  const callbackFunction = (childData: any) => {
    setToken(childData.loginWithPassword.token)
    localStorage.setItem("token", token)
    console.log(localData)
  }

  return (
    <div>
      <Login parentCallback={callbackFunction}/>
    </div>
  )
}

export default UnauthenticatedApp