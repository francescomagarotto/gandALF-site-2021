import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Bloem from "../images/Bloem-Roderick-400x400.jpeg"
const InvitedSpeakers = props => {
  return (
    <Layout>
      <Helmet title={"Invited speakers - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-sm-12"}>
        <h1 className="text-left">Invited speakers</h1>
        <section>
          <div className="row p-2 mt-4 justify-content-lg-end">
            <div className="col-2 d-none d-lg-block">
              <img
                src={Bloem}
                className="img-fluid img-thumbnail float-right"
                alt="Bloem Roderick"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col-md-auto d-flex border-left border-danger">
              <div className="align-self-center">
                <h2>Roderick Bloem</h2> TU Graz, Austria
                <br />
                <a href="https://www.iaik.tugraz.at/person/roderick-bloem/">
                  https://www.iaik.tugraz.at/person/roderick-bloem/
                </a>
              </div>
            </div>
            <div className="col-6 col-md-12 col-sm-12 mt-2 p-2 ml-2">
              <div className="row col-12">
                <h3>Shield Synthesis for Safe Reinforcement Learning</h3>
              </div>
              <div className="row col-12">
                <p>
                  You have a reinforcement learning system? Sure, it works
                  great, but does it give you any guarantees? I thought not. We
                  will describe methods to use reactive synthesis to construct
                  runtime enforcement modules (shields) that can ensure that a
                  system works correctly, even if the system has bugs. If the
                  system doesn't have too many bugs, the behavior of the
                  shielded system will stay close to the behavior of the
                  original system. We will show extensions to probabilistic and
                  timed settings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row p-2 mt-4">
            <div className="col-2 d-none d-lg-block">
              <img
                src={
                  "https://www.ias.tum.de/fileadmin/_processed_/8/8/csm_pic_HF_560x720_muscholl_e3c487d01e.jpg"
                }
                className="img-fluid img-thumbnail float-right"
                alt="Anca Muscholl"
                style={{ width: "auto", height: "200px" }}
              />
            </div>
            <div className="col-md-auto d-flex border-left border-danger">
              <div className="align-self-center">
                <h2>Anca Muscholl</h2> LaBRI, Bordeaux, France
                <br />
                <a href="https://www.labri.fr/perso/anca/">
                  https://www.labri.fr/perso/anca/
                </a>
              </div>
            </div>
            <div className="col-6 col-md-12 col-sm-12 mt-2 p-2 ml-2">
              <div className="row col-12">
                <h3>Sound negotiations</h3>
              </div>
              <div className="row col-12">
                <p>
                  Deterministic, sound negotiations represent a tractable
                  distributed model related to Petri nets and Zielonka automata.
                  We describe in this talk how to exploit the structure of sound
                  negotiations in order to derive polynomial-time algorithms,
                  avoiding the state explosion induced by configurations. We
                  also explain how to obtain polynomial-time Angluin-style
                  algorithms for active learning of sound negotiations. (This is
                  joint work with I. Walukiewicz.)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row p-2 mt-4 justify-content-lg-end">
            <div className="col-2 align-self-center d-none d-lg-block ">
              <img
                src={
                  "https://pageperso.lis-lab.fr/nicola.olivetti//PhotoWeb.jpg"
                }
                className="img-fluid img-thumbnail float-right"
                alt="Nicola Olivetti"
                style={{ width: "auto", height: "200px" }}
              />
            </div>
            <div className="col-md-auto d-flex border-left border-danger">
              <div className="align-self-center">
                <h2>Nicola Olivetti</h2>Aix-Marseille University, France
                <br />
                <a href="https://pageperso.lis-lab.fr/nicola.olivetti/">
                  https://pageperso.lis-lab.fr/nicola.olivetti/
                </a>
              </div>
            </div>
            <div className="col-6 col-md-12 col-sm-12 mt-2 p-2 ml-2">
              <div className="row col-12">
                <h3>Non-normal modal logics vindicated</h3>
              </div>
              <div className="row col-12">
                <p>
                  Non-normal modal logics (NNML) are known since a long time.
                  They are a generalisation of standard normal modal logics,
                  that do not satisfy some basic principles of them, in some
                  cases they even contradict them. NNML have been studied mainly
                  by philosophers for overcoming difficulties and paradoxes of
                  epistemic and deontic reasoning originated by their
                  formalisation in normal modal logics. In my opinion the
                  interest of NNML has not been fully recognised in Knowledge
                  Representation, not only for epistemic and deontic reasoning,
                  but also for reasoning about agency and capability. One
                  possible reason that hindered their larger use is the rather
                  abstract Neighbourhood semantics which comes with them, as
                  well as the lack of efficient and "friendly" proof systems.
                  The aim of my talk is to vindicate Non Normal modal logics,
                  suggesting also a natural reformulation of their semantics and
                  recent developments in their proof theory.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row p-2 mt-4">
            <div className="col-2 d-none d-lg-block">
              <img
                src={
                  "https://d2k0ddhflgrk1i.cloudfront.net/_processed_/3/c/csm_d2z4w_1ae5fecd72.jpg"
                }
                className="img-fluid img-thumbnail float-right"
                alt="S.E. (Sicco) Verwer"
                style={{ width: "auto", height: "200px" }}
              />
            </div>
            <div className="col-md-auto d-flex border-left border-danger">
              <div className="align-self-center">
                <h2>S.E. (Sicco) Verwer</h2>
                TU Delft, The Netherlands
                <br />
                <a href="https://www.tudelft.nl/staff/s.e.verwer/">
                  https://www.tudelft.nl/staff/s.e.verwer/
                </a>
                </div>
            </div>
            <div className="col-6 col-md-12 col-sm-12 mt-2 p-2 ml-2">
              <div className="row col-12">
                <h3>
                  State machine learning in practice using Flexfringe:
                  flexibility, use-cases, and interpretability
                </h3>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    State machine learning deals with the problem of
                    reconstructing a state machine (automaton) model from
                    sequences of observations. In the standard use-case, we have
                    access to the input and output events from a software
                    component and the goal is to find a small model describing
                    the mapping from inputs to outputs. In more complex
                    settings, we observe only inputs , only have access to
                    indirect signals from e.g. sensors, or sometimes we may have
                    white-box access to the system. In this talk, I will show
                    examples of standard and complex settings and how to setup
                    Flexfringe to learn models in each of these cases. I will
                    also demonstrate how the obtained models can be used in
                    further processes such as finding bugs and safety
                    verification. A special focus is on the trade-off between
                    predictive accuracy and interpretability of these models.
                    Reverse engineering models of systems is often performed for
                    interpretability while the learning algorithms focus on
                    accuracy. I will present initial ideas on how to modify this
                    learning objective and results we obtained using it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default InvitedSpeakers
