
import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const index = () => {
  return (
    <Layout pageTitle="Home page" >
      <p>Im passing this from the Home page</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
      alt='Car image'
      src='../images/car.png'
      />
    </Layout>
  )
}

export const Head = () => <title>Gatsby | Home</title>
export default index