import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
export default class Home extends React.Component {
  render() {
    return (
      <Layout home>
        <Head>
          <title>{"LA GARDENIA"}</title>
        </Head>
      </Layout>
    );
  }
}
