import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <Layout>
      <Helmet title={"About us - " + process.env.GATSBY_SITE_NAME} />
      <main className={"flex-fill p-4"}>
        <h1>History of the University</h1>
      </main>
    </Layout>
  );
}
