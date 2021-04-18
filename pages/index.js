import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
export default class Home extends React.Component {
  render() {
    return (
      <Layout home>
        <Head>
          <title>{"LA GARDENIA"}</title>
          <meta property="twitter:description" content="LA GARDENIA"></meta>
          <meta
            property="twitter:card"
            content="https://lagardenia.uynet.work/images/jacket_omote.png"
          ></meta>
          <meta
            property="twitter:image"
            content="https://lagardenia.uynet.work/images/jacket_omote.png"
          ></meta>
        </Head>
      </Layout>
    );
  }
}
