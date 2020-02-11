import React from "react"
import withApollo from "../lib/with-apollo"
import Link from "next/link"
import { useGetSurveysQuery} from "../src/graphql/index"

const Surveys = () => {
  const { data, loading, error } = useGetSurveysQuery({ fetchPolicy: "network-only" })

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
          <Link href="/">home</Link>
        </>  
      )}
    </div>
  )
}

export default withApollo(Surveys)