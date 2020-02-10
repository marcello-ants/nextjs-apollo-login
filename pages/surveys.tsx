import React from "react"
import withApollo from "../lib/with-apollo"
import Link from 'next/link'

const Surveys = () => {
  return (
    <div>
      <Link href="/">home</Link>
    </div>
  )
}

export default withApollo(Surveys)