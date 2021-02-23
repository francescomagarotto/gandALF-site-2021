import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const CallForPapers = props => {
  return (
    <Layout>
      <Helmet title={"Call for papers - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Call for papers</h1>
        <p>
          The aim of GandALF 2021 is to bring together researchers from academia
          and industry which are actively working in the fields of Games,
          Automata, Logics, and Formal Verification. The idea is to cover an
          ample spectrum of themes, ranging from theory to applications, and
          stimulate cross-fertilization. Papers focused on formal methods are
          especially welcome. Authors are invited to submit original research or
          tool papers on all relevant topics in these areas. Papers discussing
          new ideas that are at an early stage of development are also welcome.
        </p>
        <p>
          The topics covered by the conference include, but are not limited to,
          the following:
        </p>
          <ul>
            <li> Automata Theory</li>
            <li> Automated Deduction</li>
            <li> Computational aspects of Game Theory</li>
            <li> Concurrency and Distributed computation</li>
            <li> Decision Procedures</li>
            <li>
              Deductive, Compositional, and Abstraction Techniques for
              Verification
            </li>
            <li> Finite Model Theory</li>
            <li> First-order and Higher-order Logics</li>
            <li> Formal Languages</li>
            <li>
              Formal Methods for Systems Biology, Hybrid, Embedded, and Mobile
              Systems
            </li>
            <li> Games and Automata for Verification</li>
            <li> Game Semantics</li>
            <li> Logical aspects of Computational Complexity</li>
            <li> Logics of Programs</li>
            <li> Modal and Temporal Logics</li>
            <li> Model Checking</li>
            <li> Models of Reactive and Real-Time Systems</li>
            <li> Probabilistic Models (Markov Decision processes)</li>
            <li> Program Analysis and Software Verification</li>
            <li> Reinforcement Learning</li>
            <li> Run-time Verification and Testing</li>
            <li>
              Specification and Verification of Finite and Infinite-state
              Systems
            </li>
            <li> Synthesis</li>
          </ul>
        <section>
        <h3>Important Dates</h3>
        <dl>
          <dt>Abstract submission</dt>
          <dd>June 15, 2021</dd>
          <dt>Paper submission</dt>
          <dd>June 22, 2021</dd>
          <dt>Notification</dt>
          <dd>July 23, 2021</dd>
          <dt>Camera-ready</dt>
          <dd>August 27, 2021</dd>
          <dt>Conference</dt>
          <dd>September 21-22, 2021</dd>
          </dl>
          </section>
        <section>
        <h3>Publications</h3>
        <p>
          The proceedings will be published by Electronic Proceedings in
          Theoretical Computer Science (
          <a href="http://www.eptcs.org/">http://www.eptcs.org/</a>). Authors of
          the best papers will be invited to submit a revised version of their
          work to a special issue of an established international journal. The
          previous editions of GandALF already led to special issues of the
          International Journal of Foundations of Computer Science (GandALF
          2010), Theoretical Computer Science (GandALF 2011 and 2012),
          Information and Computation (GandALF 2013, 2014, 2016, 2017, 2019 and
          2020), and Acta Informatica (GandALF 2015).
        </p>
        </section>
        <section>
          <h3>Submission</h3>
          <p>
            Submitted papers should not exceed fourteen (14) pages using EPTCS
            format (please use the LaTeX style provided at
            http://style.eptcs.org), be unpublished and contain original
            research. For papers reporting experimental results, authors are
            encouraged to make their data available with their submission.
            Submissions must be in PDF format and will be handled via the
            EasyChair Conference system at the following address: <a href="https://www.easychair.org/conferences/?conf=gandalf2021
">Gandalf 2021 Conference EasyChair</a>
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default CallForPapers
