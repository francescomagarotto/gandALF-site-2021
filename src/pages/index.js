import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const IndexPage = props => {
  return (
    <Layout>
      <Helmet title={"Home - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Home</h1>
        <h2>
          Welcome to GandALF 2021 website helded this year by the University of
          Padova
        </h2>
        <div className="card mb-1 mt-1">
          <h5 class="card-header">COVID-19 Information</h5>
          <div className="card-body">
            The COVID-19 pandemic has created uncertainty and difficulties for
            people throughout the world. We aknowledge the concerns about health
            and safety, the potential travel restrictions and limitations in the
            ability of people to gather, and the financial difficulties. The
            organizers of GANDALF 2021 will closely monitor the evolution of the
            pandemic and will take all the necessary actions to guarantee a
            successful event. We are currently working with the hope that by
            September 2021 we will be able to gather in-person for the GANDALF
            Symposium. We understand that even in such a case not all
            participants may be able to physically attend. For this reason, we
            are planning a hybrid conference (physical and virtual
            participation). In the case that an in-person event will not be
            possible, GANDALF 2021 will be a fully virtual conference.{" "}
            <b>
              Updates on the organization mode will be published and advertised
              in due time.
            </b>
          </div>
        </div>
        <p>
          The Twelfth International Symposium on Games, Automata, Logics, and
          Formal Verification will be held in Padua (Italy) on September 20-22,
          2021. The aim of GandALF 2021 symposium is to bring together
          researchers from academia and industry which are actively working in
          the fields of Games, Automata, Logics, and Formal Verification. The
          idea is to cover an ample spectrum of themes, ranging from theory to
          applications, and stimulate cross-fertilization.
        </p>
        <p>
          This year, GANDALF will be organised together with the 3rd Workshop on
          Artificial Intelligence and fOrmal VERification, Logic, Automata, and
          sYnthesis (<a href="https://overlay.uniud.it/">OVERLAY 2021</a>). The
          OVERLAY workshop focuses on the relationships between Artificial
          Intelligence and Formal Methods, and discusses on the opportunities
          and challenges at the border of the two areas. Both events will be
          hosted by the University of Padua, and will share some invited
          speakers. We encourage participation in both events.
        </p>
      </main>
    </Layout>
  )
}

export default IndexPage
