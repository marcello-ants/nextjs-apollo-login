import withApollo from '../lib/with-apollo'
import Link from 'next/link'
// import { useViewerQuery } from '../lib/viewer.graphql'

const Index = () => {
  // const { data } = useViewerQuery()

  // if (data) {
    // const { viewer } = data
    return (
      <div>
        <Link href="/about">
          <a>static</a>
        </Link>{' '}
      </div>
    )
  // }

  return <div>...</div>
}

export default withApollo(Index)
