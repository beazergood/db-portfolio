import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App: My Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Skills</h1>
        <a href="/">Home</a>
      </main>
    </div>
  )
}
