import React from "react"
import withApollo from "../lib/with-apollo"
import Link from "next/link"
import { useGetSurveysQuery} from "../src/graphql/index"
import {useAuthState} from "../components/Auth"
import AppProvider from "../context/index"

const SurveyList = () => {
  const isLogged = useAuthState()

  const { data, loading, error } = useGetSurveysQuery({ fetchPolicy: "network-only" })

  return isLogged ? (
    <>
      {error ? <div>error on technologies list</div> : (
        <>
          {loading ? (
              <div>loading</div>
            ) :(
              <>
                {console.log(data)}
                <div>you're logged in</div>
                <Link href="/">
                  <a>home</a>
                </Link>
              </>  
          )}
        </>
      )}
    </>
  ) : null
}

const Surveys = () => {
  return (
    <AppProvider>
      <SurveyList/>
    </AppProvider>
  )
}

export default withApollo(Surveys)