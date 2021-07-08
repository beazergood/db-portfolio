import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App: Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Showcase</h1>
        <a href="/">Home</a>
      </main>
    </div>
  )
}
