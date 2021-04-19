import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
export default class Home extends React.Component {
  render() {
    return (
      <Layout home>
        <Head>
          <title>{"LA GARDENIA"}</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content="永遠の箱庭" />

          <meta property="og:title" content="LA GARDENIA" />
          <meta property="og:site_name" content="LA GARDENIA" />
          <meta property="og:description" content="永遠の箱庭" />
          <meta property="og:url" content="https://lagardenia.uynet.work" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://lagardenia.uynet.work/images/jacket_omote.png"
          />
          <meta name="twitter:description" content="永遠の箱庭" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LA GARDENIA" />
          <meta
            name="twitter:image"
            content="https://lagardenia.uynet.work/images/jacket_omote.png"
          />
        </Head>
      </Layout>
    );
  }
}
