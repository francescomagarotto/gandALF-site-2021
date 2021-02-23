import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const Committees = props => {
  return (
    <Layout>
      <Helmet title={"Committees - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Committees</h1>
        <p>
          For general contact and inquiries on GANDALF 2021 send an email to:{" "}
          <a href="mailto:gandalf2021@easychair.org">
            gandalf2021@easychair.org
          </a>
        </p>
        <section>
          <h4>Program Chairs</h4>
          <ul>
            <li>Davide Bresolin, University of Padova (Italy)</li>
            <li>Pierre Ganty, IMDEA Software Institute, Madrid (Spain)</li>
          </ul>
        </section>
        <section>
          <h4>Program Committee</h4>
          <p>To be announced</p>
        </section>
      </main>
    </Layout>
  )
}

export default Committees
