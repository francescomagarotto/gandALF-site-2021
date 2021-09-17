import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
const Venue = props => {
  return (
    <Layout>
      <Helmet title={"Venue - " + process.env.GATSBY_SITE_NAME} />

      <main className={"flex-fill col-md-8 offset-md-2 col-sm-12"}>
        <h1 className="text-left">Venue</h1>
        <section>
          <h2>Conference Venue</h2>
          Department of Mathematics "Tullio Levi-Civita", via Trieste 63 – 35121
          Padova (Italy).
        </section>
        <section className="mt-2">
          <h2>How to reach Padova</h2>
          <h3>By Car (toll motorways)</h3>
          <dl>
            <dt>A4 Torino – Trieste</dt>
            <dd>Exits at Padova Ovest and Padova Est</dd>
            <dt>A13 Bologna – Padova</dt>
            <dd>Exits at Padova Sud and Padova Zona Industriale</dd>
          </dl>
          <a href="www.autostrade.it">Autostrade.it</a>
          <h3>By Train</h3>
          The railway station is a 15-minute walk from the conference venue;
          there are train services to Venice, Trieste, Verona, Milan, Bologna,
          Florence and Rome. For timetables and information:
          <dl>
            <dt>Trenitalia (high speed and local trains)</dt>
            <dd>
              <a href="www.trenitalia.com">www.trenitalia.com</a>
            </dd>
            <dt>Italo (high speed trains)</dt>
            <dd>
              <a href="www.italotreno.it">www.italotreno.it</a>
            </dd>
          </dl>
          <h3>By Air</h3>
          The nearest airport is Venice "Marco Polo" airport (49 km),
          conveniently linked with all major European airports. The nearby
          Treviso "Antonio Canova" Airport (62 km) serves low-cost airlines.
          <h3>By Shuttle</h3>
          The Shuttle service will pick you up at the airport at your arrival
          and take you directly to the address of your choice in Padova. The
          reservation must be made at least 24h before your arrival.
          <dl>
            <dt>GoOpti </dt>
            <dd>
              <a href="https://www.goopti.com/en/">
                https://www.goopti.com/en/
              </a>
            </dd>
            <dt>Landomas </dt>
            <dd>
              <a href="http://www.landomas.it/en/">
                http://www.landomas.it/en/
              </a>
            </dd>
          </dl>
          <h3>By bus/train</h3>
          <p>
            From Venice and Treviso airports there are direct buses to Padova
            bus station (autostazione), close to the railway station.
          </p>
          <h4>From Venice airport</h4>
          <p>
            Busitalia offers a direct bus connection every hour at 40' (also at
            10' at rush hours), running from 7:10 to 22:40.
          </p>
          <a href="https://www.fsbusitalia.it/content/fsbusitalia/eng/tourism/airport-connection-services/link-to-venice-airport.html">
            Airport Connection Services
          </a>
          <p>
            The bus takes around 1 hour. You can buy the ticket at the ticket
            office inside the airport (arrival level, on the left of the exit
            gate), at the vending machines close to the bus stop or directly on
            the bus (2 € extra charge). The airport is linked to Venezia–Mestre
            train station station by ATVO MESTRE EXPRESS or ACTV City Bus route
            n. 15.
          </p>
          <h4>From Treviso airport</h4>
          <p>
            The companies MOM and Busitalia provide the connections to Padova.
            You can buy tickes at the ticket office in the Arrivals hall of the
            airport terminal building, or on the bus. The bus stop is in Via
            Noalese, to the right of the airport exit. The airport is linked to
            Treviso railway station by MOM Line 6 or Treviso Airlink.
          </p>
          <h3>By taxi</h3>
          <p>
            The cost of the ride from Venice or Treviso airport to Padova is
            about 100-110 € (note that there may be some extra charges: for
            airport connection, luggage and night ride).
          </p>
          <h3>Car rental</h3>
          <p>A car rental service is available in the airport.</p>
        </section>
      </main>
    </Layout>
  )
}

export default Venue
