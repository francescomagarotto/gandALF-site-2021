import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const Accomodation = props => {
  return (
    <Layout>
      <Helmet title={"Accommodation - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Accommodation</h1>
        <section>
          <h2>Hotels</h2>
          <ul style={{columns: 1}}>
            <li aria-level="1">
              Hotel Giotto ***
              <br />
              Address: Piazzale Pontecorvo, 33 - 35121 Padova
              <br />
              Phone: Tel. +39 049 8761845; Fax +39 049 662677
              <br />
              E-mail: info@hotelgiotto.com
              <br />
              Web:{" "}
              <a href="http://www.hotelgiotto.com/">
                http://www.hotelgiotto.com/
              </a>
            </li>
            <li aria-level="1">
              Hotel Majestic Toscanelli **** <br />
              Address: Via dell'Arco, 2 - 35122 Padova
              <br />
              Phone: Tel. +39 049 663244; Fax +39 049 8760025
              <br />
              E-mail: majestic@toscanelli.com
              <br />
              Web:{" "}
              <a href="http://www.toscanelli.com/">
                http://www.toscanelli.com/
              </a>
            </li>
            <li aria-level="1">
              Hotel Al Giardinetto ***
              <br />
              Address: Corso del Popolo, 2 - 35131 Padova
              <br />
              Phone: Tel. +39 049 8750822; Fax +39 049 661576
              <br />
              E-mail: info@hotelcorsopadova.it
              <br />
              Web:{" "}
              <a href="http://www.hotelcorsopadova.it/">
                http://www.hotelcorsopadova.it/
              </a>
            </li>
            <li aria-level="1">
              Hotel Igea ***
              <br />
              Address: Via Ospedale, 87 - 35128 Padova
              <br />
              Phone: Tel. + 39 049 8750577; Fax +39 049 660865
              <br />
              E-Mail: info@hoteligea.it
              <br />
              Web:{" "}
              <a href="http://www.hoteligea.it/">http://www.hoteligea.it/</a>
            </li>
            <li aria-level="1">
              Hotel Belludi 37 ** <br />
              Address: Via Belludi, 37 - 35123 Padova
              <br />
              Phone: Tel. +39 049 665633; Fax +39 049 658685
              <br />
              E-mail: info@belludi37.it
              <br />
              Web:{" "}
              <a href="http://www.belludi37.it/">http://www.belludi37.it/</a>
            </li>
            <li aria-level="1">
              Hotel Casa del Pellegrino ** <br />
              Address: Via M. Cesarotti, 21 - 35123 Padova
              <br />
              Phone: Tel. +39 049 8239711; Fax +39 049 8239780
              <br />
              E-Mail: info@casadelpellegrino.com
              <br />
              Web:{" "}
              <a href="http://www.casadelpellegrino.com/">
                http://www.casadelpellegrino.com/
              </a>
            </li>
            <li aria-level="1">
              Hotel Mignon **
              <br />
              Address: Via Belludi, 22 - 35123 Padova
              <br />
              Phone: Tel. +39 049 661722; Fax +39 049 661211
              <br />
              E-Mail: info@hotelmignonpadova.com
              <br />
              Web:{" "}
              <a href="http://www.hotelmignonpadova.com/">
                http://www.hotelmignonpadova.com/
              </a>
            </li>
            <li aria-level="1">
              Hotel Eden **
              <br />
              Address: Via C. Battisti, 255 - 35121 Padova
              <br />
              Phone: Tel. +39 049 650484; Fax +39 049 8364097
              <br />
              E-Mail: info@hoteledenpadova.it
              <br />
              Web:{" "}
              <a href="http://www.hoteledenpadova.it/">
                http://www.hoteledenpadova.it/
              </a>
            </li>
            <li aria-level="1">
              B&amp;B Al Santo
              <br />
              Address: Via Sanmicheli, 13 - 35123 Padova
              <br />
              Phone: Tel. and Fax +39 049 8750267
              <br />
              E-mail: info@bbalsanto.it
              <br />
              Web:{" "}
              <a href="http://www.pittarello.org/bbalsanto/">
                http://www.pittarello.org/bbalsanto/
              </a>
            </li>
          </ul>
          </section>
          <section>
          <h2>University Accomodations</h2>
          <ul style={{columns: 1}}>
            <li aria-level="1">
              Foresteria La Nave - Fondazione Gini <br />
              Address: Via Portello, 15 - 35129 Padova
              <br />
              Phone: Tel. +39 049 8275047; Fax +39 049 776406
              <br />
              E-mail:{" "}
              <a href="mailto:gini@unipd.it">
                gini@unipd.it
                <br />
              </a>
              Web: <a href="https://www.unipd.it/fondazionegini/foresteria">https://www.unipd.it/fondazionegini/foresteria</a>
            </li>
            <li aria-level="1">
              Job Campus
              <br />
              Address: Via Belzoni, 146 - 35121 Padova
              <br />
              Phone: Tel. +39 049 8066190
              <br />
              E-mail:{" "}
              <a href="mailto:segreteria@jobcampus.it">
                segreteria@jobcampus.it
                <br />
              </a>
              Web: <a href="https://www.jobcampus.it">https://www.jobcampus.it</a>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}

export default Accomodation
