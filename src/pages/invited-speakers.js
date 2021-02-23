import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const InvitedSpeakers = props => {
  return (
    <Layout>
      <Helmet title={"Invited speakers - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Invited speakers</h1>
        <p>
         To be announced 
        </p>
      </main>
    </Layout>
  )
}

export default InvitedSpeakers
