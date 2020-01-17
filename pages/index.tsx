import withApollo from '../lib/with-apollo'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/react-hooks'
import {apolloClient} from "../lib/with-apollo"

const Index = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Link href="/login">
        <a>login</a>
      </Link>
    </ApolloProvider>
    
  )
}

export default withApollo(Index)
