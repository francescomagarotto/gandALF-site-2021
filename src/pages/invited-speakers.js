import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Bloem from "../images/Bloem-Roderick-400x400.jpeg"
const InvitedSpeakers = props => {
  return (
    <Layout>
      <Helmet title={"Invited speakers - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Invited speakers</h1>
        <section className="row p-2 mt-4">
          <div className="col-4 offset-2">
            <img
              src={Bloem}
              className="img-fluid img-thumbnail float-right"
              alt="Bloem Roderick"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-4 d-flex border-left border-danger">
            <div className="align-self-center">
              <h2>Roderick Bloem</h2> TU Graz, Austria
              <br />
              <a href="https://www.iaik.tugraz.at/person/roderick-bloem/">
                https://www.iaik.tugraz.at/person/roderick-bloem/
              </a>
            </div>
          </div>
        </section>
        <section className="row p-2 mt-4">
          <div className="col-4 offset-2">
            <img
              src={
                "https://www.ias.tum.de/fileadmin/_processed_/8/8/csm_pic_HF_560x720_muscholl_e3c487d01e.jpg"
              }
              className="img-fluid img-thumbnail float-right"
              alt="Anca Muscholl"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-4 d-flex border-left border-danger">
            <div className="align-self-center">
              <h2>Anca Muscholl</h2> LaBRI, Bordeaux, France
              <br />
              <a href="https://www.labri.fr/perso/anca/">
                https://www.labri.fr/perso/anca/
              </a>
            </div>
          </div>
        </section>
        <section className="row p-2 mt-4">
          <div className="col-4 offset-2">
            <img
              src={"https://pageperso.lis-lab.fr/nicola.olivetti//PhotoWeb.jpg"}
              className="img-fluid img-thumbnail float-right"
              alt="Nicola Olivetti"
              style={{ width: "auto", height: "200px" }}
            />
          </div>
          <div className="col-4 d-flex border-left border-danger">
            <div className="align-self-center">
              <h2>Nicola Olivetti</h2>Aix-Marseille University, France
              <br />
              <a href="https://pageperso.lis-lab.fr/nicola.olivetti/">
                https://pageperso.lis-lab.fr/nicola.olivetti/
              </a>
            </div>
          </div>
        </section>
        <section className="row p-2 mt-4">
          <div className="col-4 offset-2">
            <img
              src={
                "https://d2k0ddhflgrk1i.cloudfront.net/_processed_/3/c/csm_d2z4w_1ae5fecd72.jpg"
              }
              className="img-fluid img-thumbnail float-right"
              alt="S.E. (Sicco) Verwer"
              style={{ width: "auto", height: "200px" }}
            />
          </div>
          <div className="col-4 d-flex border-left border-danger">
            <div className="align-self-center">
              <h2>S.E. (Sicco) Verwer</h2>
              TU Delft, The Netherlands<br/>
              <a href="https://www.tudelft.nl/staff/s.e.verwer/">https://www.tudelft.nl/staff/s.e.verwer/</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default InvitedSpeakers
