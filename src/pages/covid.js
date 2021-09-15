import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const Covid = props => {
  return (
    <Layout>
      <Helmet title={"COVID 19 - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">COVID 19</h1>
        <section>
          <h2>Travelling to Italy</h2>
          <p>
            The "
            <a href="https://infocovid.viaggiaresicuri.it/returningtoitaly.html">
              Covid Questionnaire
            </a>
            ", a platform provided by the Italian authorities, allows you to
            check whether and under what conditions you can enter Italy.
          </p>
          <p>As a general rule, the following entry requirements apply:</p>
          <ol style={{columns: 1}}>
            <li aria-level="1">
              All travellers must complete the digital Passenger Registration
              Form (<a href="https://app.euplf.eu/">https://app.euplf.eu/</a>)
              prior to departure.
            </li>
            <li aria-level="1">
              Travellers must be able to present one of the following medical
              certificates upon arrival in Italy:
            </li>
          </ol>
          <ul style={{columns: 1}}>
            <li aria-level="1">
              a negative COVID-19 antigen or molecular test, issued within 48
              hours before arrival.
            </li>
            <li aria-level="1">a COVID-19 recovery certificate</li>
            <li aria-level="1">
              a COVID-19 vaccination certificate stating that the person has
              been fully vaccinated at least 14 days prior to arrival.
            </li>
          </ul>
          <p>all documents must be in English, French, Italian or Spanish</p>
          <p>
            Travelers arriving from certain countries may be subject to a
            COVID-19 test upon arrival or to other restrictions.
          </p>
        </section>
        <section>
          <h3>Travelling inside Italy</h3>
          <p>
            As of September 1, 2021, Italian Authorities have established the
            mandatory requirement of a EU Digital Covid Certificate
            (&ldquo;Green Pass&rdquo;), for any person aged 12 and above wishing
            to board airplanes, ships and ferries for inter-regional
            transportation, high speed trains, buses for inter-regional
            transportation and chartered buses with driver.
          </p>
          <p>
            The certificate must show proof of either having received one dose
            of vaccine; or of a negative result of a molecular or antigenic test
            carried out in the previous 48 hours; or of having recovered from
            Covid-19 in the previous 6 months. Please note that a certificate
            proving that you have received the first dose of a two-dose vaccine
            (meaning that you are waiting for the second dose) will not be
            enough to enter Italy from abroad. Such a certificate is valid only
            once in Italy.
          </p>
        </section>
        <section>
          <h2>At the conference venue</h2>
          <ul style={{columns: 1}}>
            <li aria-level="1">
              it is recommended to respect a social distancing of at least 1
              meter
            </li>
            <li aria-level="1">
              mask must always be worn when inside a building
            </li>
            <li aria-level="1">
              all participants are required to possess and show upon request a
              valid EU Digital COVID Certificate (&ldquo;Green Pass&rdquo;) or a
              Certification of exemption for vaccination against Covid19
            </li>
          </ul>
          <p>
            You can check the validity of your EU Digital COVID Certificate with
            the VerificaC19 app that you can download from the Appstore (
            <a href="https://apps.apple.com/app/verificac19/id1565800117">
              https://apps.apple.com/app/verificac19/id1565800117
            </a>
            ) or Playstore (
            <a href="https://play.google.com/store/apps/details?id=it.ministerodellasalute.verificaC19">
              https://play.google.com/store/apps/details?id=it.ministerodellasalute.verificaC19
            </a>
            ) .
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default Covid
