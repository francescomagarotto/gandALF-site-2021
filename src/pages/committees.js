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
          <ul>
            <li>Mohamed Faouzi Atig, Uppsala University (Sweden)</li>
            <li>Christel Baier, TU Dresden (Germany)</li>
            <li>Saddek Bensalem, VERIMAG (France)</li>
            <li>Nathalie Bertrand, INRIA (France)</li>
            <li>Pedro Cabalar, University of Corunna (Spain)</li>
            <li>Thomas Colcombet, CNRS (France)</li>
            <li>Wojciech Czerwiński, University of Warsaw (Poland)</li>
            <li>Orna Kupferman, Hebrew University (Israel)</li>
            <li>Sławomir Lasota, University of Warsaw (Poland)</li>
            <li>Konstantinos Mamouras, Rice University (USA)</li>
            <li>Roland Meyer, TU Braunschweig (Germany)</li>
            <li>Marco Montali, Free University of Bozen-Bolzano (Italy)</li>
            <li>Paritosh Pandya, TIFR (India)</li>
            <li>Doron Peled, Bar Ilan University (Israel)</li>
            <li>Guillermo Perez, University of Antwerp (Belgium)</li>
            <li>R. Ramanujam, Institute of Mathematical Sciences (India)</li>
            <li>Francesco Ranzato, University of Padua (Italy)</li>
            <li>Pierre-Alain Reynier, Aix-Marseille Université (France)</li>
            <li>
              Mark Reynolds, The University of Western Australia (Australia)
            </li>
            <li>Ashutosh Trivedi, University of Colorado Boulder (USA)</li>
          </ul>
        </section>
        <section>
          <h4>Steering Committee</h4>
          <ul>
            <li>Luca Aceto, Reykjavik University (Iceland)</li>
            <li>Javier Esparza, University of Munich (Germany)</li>
            <li>Salvatore La Torre, University of Salerno (Italy)</li>
            <li>Angelo Montanari, University of Udine (Italy)</li>
            <li>Mimmo Parente, University of Salerno (Italy)</li>
            <li>
              Jean-François Raskin, Université libre de Bruxelles (Belgium)
            </li>
            <li>Martin Zimmermann, University of Liverpool (UK)</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}

export default Committees
