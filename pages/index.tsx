import withApollo from '../lib/with-apollo'
import Link from 'next/link'

const Index = () => {
  return (
    
      <Link href="/login">
        <a>login</a>
      </Link>
    
    
  )
}

export default withApollo(Index)
