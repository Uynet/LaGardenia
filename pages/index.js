import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>こんにちわ</h1>
      <div className="text-gray-600 font-selif"> トップページだよ </div>
      <img src="/images/uychan.png" width = {200} alt="A" />
    </div>
  )
}
