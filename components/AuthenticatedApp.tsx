import React from "react"
import Link from 'next/link'
import Logout from "./Logout"
import { useGetTechnologiesQuery} from "../src/graphql/index"

const AuthenticatedApp = () => {
  const { data, loading, error } = useGetTechnologiesQuery({ fetchPolicy: "network-only" })
  
  if (error) {
    return <div>error on technologies list</div>
  }

  console.log(data)

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) :(
        <>
          <div>you're logged in</div>
          <Link href="/surveys" passHref></Link>
          <Logout />
        </>  
      )}
    </div>
  )
}

export default AuthenticatedApp