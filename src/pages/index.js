
import React from 'react'
import Layout from '../components/layout'


const index = () => {
  return (
    <Layout pageTitle="Home page" >
      <p>Im passing this from the Home page</p>
    </Layout>
  )
}

export const Head = () => <title>Gatsby | Home</title>
export default index