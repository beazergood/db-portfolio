import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App: Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Design</h1>
        <motion.p layoutId="subtitle">
          Channel for parodies and comedic sketches. Enjoy!
        </motion.p>
      </main>

      <a href="/">Home</a>
    </div>
  )
}
