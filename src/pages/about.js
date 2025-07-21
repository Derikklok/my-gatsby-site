import { Link } from 'gatsby'
import React from 'react'

const about = () => {
  return (
    <div>
         <h1>About Me</h1>
         <Link to='/'>Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </div>
  )
}
export const Head = () => <title>Gatsby | About</title>
export default about