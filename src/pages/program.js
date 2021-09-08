import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const Program = props => {
  return (
    <Layout>
      <Helmet title={"Program - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Program</h1>
        <section>
          <h2>Accepted papers</h2>
          <ul id="programul">
            <li>
              Shufang Zhu, Lucas Martinelli Tabajara, Geguang Pu and Moshe
              Vardi: “Temporal Knowledge Compilation for Realizability Checking
              and Synthesis”
            </li>
            <li>
              Miikka Vilander: “Games for Succinctness of Regular Expressions”
            </li>
            <li>
              Javier Esparza, Mikhail Raskin and Christoph Welzel: “Abduction of
              trap invariants in parameterized systems”
            </li>
            <li>
              Giovanni Pagliarini and Guido Sciavicco: “Decision Tree Learning
              with Spatial Modal Logics”
            </li>
            <li>
              A. R. Balasubramanian and Chana Weil-Kennedy: “Reconfigurable
              Broadcast Networks and Asynchronous Shared-Memory Systems are
              Equivalent”
            </li>
            <li>
              Erich Grädel, Niels Lücking and Matthias Naaf: “Semiring
              Provenance for Büchi Games: Strategy Analysis with Absorptive
              Polynomials”
            </li>
            <li>
              Simon Jantsch, Jakob Piribauer and Christel Baier: “Witnessing
              subsystems for probabilistic systems with low tree width”
            </li>
            <li>
              Jan Rooduijn and Yde Venema: “Filtration and canonical
              completeness for the continuous modal μ-calculus”
            </li>
            <li>
              Florian Gallay and Ylies Falcone: “Decentralized LTL Enforcement”
            </li>
            <li>
              Dhananjay Raju, Ruediger Ehlers and Ufuk Topcu: “Adapting to the
              Behavior of Environments with Bounded Memory”
            </li>
            <li>
              Ashwani Anand, Nathanaël Fijalkow, Aliénor Goubault-Larrecq,
              Leroux Jérôme and Pierre Ohlmann: “New Algorithms for Combinations
              of Objectives using Separating Automata”
            </li>
            <li>
              Raoul Koudijs: “Finite Model Property and Bisimulation for Local
              Logics of Dependence”
            </li>
            <li>
              Alessandro Cimatti, Luca Geatti, Nicola Gigante, Angelo Montanari
              and Stefano Tonetta: “Expressiveness of Extended Bounded Response
              LTL”
            </li>
            <li>
              Tobias Winkler and Maximilian Weininger: “Stochastic Games with
              Disjunctions of Multiple Objectives”
            </li>
            <li>
              Clemens Kupke, Johannes Marti and Yde Venema: “On the Size of
              Disjunctive Formulas in the μ-calculus”
            </li>
            <li>
              Laura Bozzelli, Angelo Montanari, Adriano Peron and Pietro Sala:
              “Adding the relation Meets to the temporal logic of prefixes and
              infixes makes it EXPSPACE-complete”
            </li>
            <li>
              Gustav Grabolle: “A Nivat theorem for weighted alternating
              automata over commutative semirings”
            </li>
            <li>
              Domenico Cantone, Andrea De Domenico and Pietro Maugeri: “On the
              convexity of a fragment of pure set theory with applications
              within a Nelson-Oppen framework”
            </li>
            <li>
              Antti Kuusisto and Raine Rönnholm: “The optimal way to play the
              most difficult repeated coordination games”
            </li>
          </ul>
        </section>
        <section>
          <h2>Schedule</h2>
          <div className="card p-2 mb-2">
            <h3>Monday, September 20</h3>
            <table className={"table"}>
              <thead>
                <tr>
                  <th>Timetable</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8:55-9:00</td>
                  <td>Welcome</td>
                </tr>
                <tr>
                  <td>9:00-10:00</td>
                  <td>Invited Speaker 1 - Anca Muscholl</td>
                </tr>
                <tr>
                  <td>10:00-10:45</td>
                  <td>Coffee break</td>
                </tr>
                <tr>
                  <td>10:45-12:30</td>
                  <td>
                    Session 1 - Verification and synthesis
                    <br />
                    Javier Esparza, Mikhail Raskin and Christoph Welzel:
                    “Abduction of trap invariants in parameterized systems”
                    <br />
                    A. R. Balasubramanian and Chana Weil-Kennedy:
                    “Reconfigurable Broadcast Networks and Asynchronous
                    Shared-Memory Systems are Equivalent”
                    <br />
                    Simon Jantsch, Jakob Piribauer and Christel Baier:
                    “Witnessing subsystems for probabilistic systems with low
                    tree width”
                    <br />
                    Dhananjay Raju, Ruediger Ehlers and Ufuk Topcu: “Adapting to
                    the Behavior of Environments with Bounded Memory”
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>12:30-14:15</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>14:15-15:35</td>
                  <td>
                    Session 2 - Games
                    <br />
                    Erich Grädel, Niels Lücking and Matthias Naaf: “Semiring
                    Provenance for Büchi Games: Strategy Analysis with
                    Absorptive Polynomials”
                    <br />
                    Tobias Winkler and Maximilian Weininger: “Stochastic Games
                    with Disjunctions of Multiple Objectives”
                    <br /> Antti Kuusisto and Raine Rönnholm: “The optimal way
                    to play the most difficult repeated coordination games”
                  </td>
                </tr>
                <tr>
                  <td>15:35-16:20</td>
                  <td>Coffee break</td>
                </tr>
                <tr>
                  <td>16:20-17:40</td>
                  <td>
                    Session 3 - LTL
                    <br />
                    Shufang Zhu, Lucas Martinelli Tabajara, Geguang Pu and Moshe
                    Vardi: “Temporal Knowledge Compilation for Realizability
                    Checking and Synthesis”
                    <br /> Florian Gallay and Ylies Falcone: “Decentralized LTL
                    Enforcement”
                    <br />
                    Alessandro Cimatti, Luca Geatti, Nicola Gigante, Angelo
                    Montanari and Stefano Tonetta: “Expressiveness of Extended
                    Bounded Response LTL”
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card p-2 mb-2">
            <h3>Tuesday, September 21</h3>
            <table className={"table"}>
              <thead>
                <tr>
                  <th>Timetable</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00-10:00</td>
                  <td>Invited Speaker 2 - Nicola Olivetti</td>
                </tr>
                <tr>
                  <td>10:00-10:45</td>
                  <td>Coffee break</td>
                </tr>
                <tr>
                  <td>10:45-12:30</td>
                  <td>
                    Session 4 - Logic 1
                    <br />
                    Raoul Koudijs: “Finite Model Property and Bisimulation for
                    Local Logics of Dependence”
                    <br />
                    Laura Bozzelli, Angelo Montanari, Adriano Peron and Pietro
                    Sala: “Adding the relation Meets to the temporal logic of
                    prefixes and infixes makes it EXPSPACE-complete”
                    <br />
                    Domenico Cantone, Andrea De Domenico and Pietro Maugeri: “On
                    the convexity of a fragment of pure set theory with
                    applications within a Nelson-Oppen framework”
                    <br />
                    Jan Rooduijn and Yde Venema: “Filtration and canonical
                    completeness for the continuous modal μ-calculus”
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>12:30-14:15</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>14:15-15:15</td>
                  <td>Invited Speaker 3 - Sicco Verwer</td>
                </tr>
                <tr>
                  <td>15:15-16:00</td>
                  <td>Coffee break</td>
                </tr>
                <tr>
                  <td>16:00-17:20</td>
                  <td>
                    Session 5 - Automata
                    <br />
                    Ashwani Anand, Nathanaël Fijalkow, Aliénor Goubault-Larrecq,
                    Leroux Jérôme and Pierre Ohlmann: “New Algorithms for
                    Combinations of Objectives using Separating Automata”
                    <br />
                    Gustav Grabolle: “A Nivat theorem for weighted alternating
                    automata over commutative semirings”
                    <br />
                    Miikka Vilander: “Games for Succinctness of Regular
                    Expressions”
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>17:20</td>
                  <td>Social Event (TBA)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card p-2 mb-2">
            <h3>Wednesday, September 22</h3>
            <table className={"table"}>
              <thead>
                <tr>
                  <th>Timetable</th>
                  <th colSpan="3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00-10:00</td>
                  <td colSpan="3">Invited Speaker 4 - Roderick Bloem</td>
                </tr>
                <tr>
                  <td>10:00-10:45</td>
                  <td colSpan="3">Coffee break</td>
                </tr>
                <tr>
                  <td>10:45-11:35</td>
                  <td>
                    Session 6 - Logic 2<br />
                    Giovanni Pagliarini and Guido Sciavicco: “Decision Tree
                    Learning with Spatial Modal Logics”
                    <br />
                    Clemens Kupke, Johannes Marti and Yde Venema: “On the Size
                    of Disjunctive Formulas in the μ-calculus”
                    <br />
                  </td>
                  <td>10:45-12:45</td>
                  <td rowSpan="2">OVERLAY Workshop Session 1</td>
                </tr>
                <tr>
                  <td>11:35-11:45</td>
                  <td colSpan="3">Gandalf 2021 Closing</td>
                </tr>
                <tr>
                  <td>12:45-14:30</td>
                  <td colSpan="3">Lunch</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>14:30-16:30</td>
                  <td>OVERLAY Workshop Session 2</td>
              
                </tr>
                <tr>
                <td></td>
                  <td></td>
                <td>16:30-17:15</td> <td>Coffee break</td>

                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>17:15-18:15</td> <td>OVERLAY Workshop Session 3</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>18:15-18:25</td> <td>OVERLAY Workshop Closing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Program
