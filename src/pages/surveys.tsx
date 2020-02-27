import React from "react"
import withApollo from "../lib/with-apollo"
import AuthProvider, {useAuthState} from "../components/Auth"
import Link from "next/link"
import { useGetSurveysQuery} from "../graphql/index"

const SurveyList = () => {
  const { data, loading, error } = useGetSurveysQuery({ fetchPolicy: "network-only" })
  const isLogged = useAuthState()

  return isLogged ? (
    <>
      {error ? <div>error on technologies list</div> : (
        <>
          {loading ? (
              <div>loading</div>
            ) :(
              <>
                {console.log(data)}
                <div>survey list</div>
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
    <AuthProvider>
      <SurveyList/>
    </AuthProvider>
  )
}

export default withApollo(Surveys)