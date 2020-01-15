import withApollo from '../lib/with-apollo'
import Link from 'next/link'
import { useLoginMutation, useLogoutMutation } from "../src/generated/graphql"


const Index = () => {
  const [login] = useLoginMutation()
  const [logout] = useLogoutMutation()

  return (
    <div>
      <Link href="/about">
        <a>static</a>
      </Link>
    </div>
  )
}

export default withApollo(Index)
