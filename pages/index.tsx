import withApollo from "../lib/with-apollo"
import UnauthenticatedApp from "../components/UnauthenticatedApp"
// import AuthenticatedApp from "../components/AuthenticatedApp"
// import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <UnauthenticatedApp />
      {/* <AuthenticatedApp /> */}
      {/* <Link href="/login">
        <a>login</a>
      </Link> */}
    </div>
  )
}

export default withApollo(Index)
