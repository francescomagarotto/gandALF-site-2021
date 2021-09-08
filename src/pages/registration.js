import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const Registration = props => {
  return (
    <Layout>
      <Helmet title={"Registration - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Registration</h1>
        <section>
          <h2>General information</h2>
          <p>
            GandALF 2021 and OVERLAY 2021 will take place in a mixed mode. You
            can choose to attend the events either physically or online. When
            physically attending the conference, you will receive two coffee
            breaks and one lunch per day, and a ticket for the social event and
            the social dinner on Tuesday. You can purchase one additional ticket
            for the social event and the social dinner for an accompanying
            person by selecting the option "Additional social event ticket” in
            the registration form. Student registration includes one social
            event and social dinner ticket. Workshop only registration does not
            include the social event and social dinner. The online mode uses
            Zoom to stream the conference sessions, and Slack to interact with
            other attendees and with the organisers. For online and workshop
            only registrations we have two categories: premium registration and
            basic registration. There is no difference between a premium
            registration and a basic registration in terms of entitlements.
          </p>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>PHYSICAL ATTENDANCE</th>
                <th>EARLY REGISTRATION*</th>
                <th>LATE REGISTRATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main conference and workshop</td> <td>250 EUR</td>{" "}
                <td>350 EUR</td>
              </tr>
              <tr>
                <td>Students - main conference and workshop</td>{" "}
                <td>150 EUR</td> <td>200 EUR</td>
              </tr>
              <tr>
                <td>Workshop only - Basic registration</td> <td>Free</td>{" "}
                <td>Free</td>
              </tr>
              <tr>
                <td>Workshop only - Premium registration</td> <td>55 EUR</td>{" "}
                <td>55 EUR</td>
              </tr>
              <tr>
                <td>Students and personnel of the University of Padova</td>{" "}
                <td>Free</td> <td>Free</td>
              </tr>
              <tr>
                <td>Additional social event and dinner ticket</td>{" "}
                <td>60 EUR</td> <td>60 EUR</td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>ONLINE ATTENDANCE</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main conference and workshop - Basic registration</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Main conference and workshop - Premium registration</td>
                <td>50 EUR</td>
              </tr>
            </tbody>
          </table>
          <span>* Early registration deadline: August 31st, 2021</span>
        </section>
        <section>
          <h2>Payment options</h2>
          <p>
            You can pay either by credit card or by bank transfer. Invoices
            issued to your institution will be possible only if you select "bank
            transfer" as payment type and contact us before payment at the email
            address:{" "}
            <a href="mailto:amministrazione@math.unipd.it">
              amministrazione@math.unipd.it
            </a>
          </p>
          <button
            className="btn btn-primary mx-auto d-block"
            onClick={() =>
              window.open(
                "https://apex.cca.unipd.it/pls/apex/f?p=308:2:::NO:2:P_MERCHID,P_LANG:152,USA"
              )
            }
          >
            To register click here
          </button>
        </section>
      </main>
    </Layout>
  )
}

export default Registration
