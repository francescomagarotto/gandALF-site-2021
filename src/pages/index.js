import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const IndexPage = (props) => {
  return (
    <Layout>
      <Helmet title={"Home - " + process.env.GATSBY_SITE_NAME} />
      <main className={"flex-fill p-4"}>
        <h1>Homepage</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
