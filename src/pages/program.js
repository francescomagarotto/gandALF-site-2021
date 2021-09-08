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
            <li>Shufang Zhu, Lucas Martinelli Tabajara, Geguang Pu and Moshe Vardi: “Temporal Knowledge Compilation for Realizability Checking and Synthesis”</li>
            <li>Miikka Vilander: “Games for Succinctness of Regular Expressions”</li>
            <li>Javier Esparza, Mikhail Raskin and Christoph Welzel: “Abduction of trap invariants in parameterized systems”</li>
            <li>Giovanni Pagliarini and Guido Sciavicco: “Decision Tree Learning with Spatial Modal Logics”</li>
            <li>A. R. Balasubramanian and Chana Weil-Kennedy: “Reconfigurable Broadcast Networks and Asynchronous Shared-Memory Systems are Equivalent”</li>
            <li>Erich Grädel, Niels Lücking and Matthias Naaf: “Semiring Provenance for Büchi Games: Strategy Analysis with Absorptive Polynomials”</li>
            <li>Simon Jantsch, Jakob Piribauer and Christel Baier: “Witnessing subsystems for probabilistic systems with low tree width”</li>
            <li>Jan Rooduijn and Yde Venema: “Filtration and canonical completeness for the continuous modal μ-calculus”</li>
            <li>Florian Gallay and Ylies Falcone: “Decentralized LTL Enforcement”</li>
            <li>Dhananjay Raju, Ruediger Ehlers and Ufuk Topcu: “Adapting to the Behavior of Environments with Bounded Memory”</li>
            <li>Ashwani Anand, Nathanaël Fijalkow, Aliénor Goubault-Larrecq, Leroux Jérôme and Pierre Ohlmann: “New Algorithms for Combinations of Objectives using Separating Automata”</li>
            <li>Raoul Koudijs: “Finite Model Property and Bisimulation for Local Logics of Dependence”</li>
            <li>Alessandro Cimatti, Luca Geatti, Nicola Gigante, Angelo Montanari and Stefano Tonetta: “Expressiveness of Extended Bounded Response LTL”</li>
            <li>Tobias Winkler and Maximilian Weininger: “Stochastic Games with Disjunctions of Multiple Objectives”</li>
            <li>Clemens Kupke, Johannes Marti and Yde Venema: “On the Size of Disjunctive Formulas in the μ-calculus”</li>
            <li>Laura Bozzelli, Angelo Montanari, Adriano Peron and Pietro Sala: “Adding the relation Meets to the temporal logic of prefixes and infixes makes it EXPSPACE-complete”</li>
            <li>Gustav Grabolle: “A Nivat theorem for weighted alternating automata over commutative semirings”</li>
            <li>Domenico Cantone, Andrea De Domenico and Pietro Maugeri: “On the convexity of a fragment of pure set theory with applications within a Nelson-Oppen framework”</li>
            <li>Antti Kuusisto and Raine Rönnholm: “The optimal way to play the most difficult repeated coordination games”</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}

export default Program
