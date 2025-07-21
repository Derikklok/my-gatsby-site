
import React from 'react'
import { Link } from 'gatsby'

const index = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial. as in web</p>
      <Link to='/about'>About author</Link>
    </main>
  )
}

export const Head = () => <title>Gatsby | Home</title>
export default index