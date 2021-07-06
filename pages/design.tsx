import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Design() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App: Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Design</h1>
        <div className="grid">
          <motion.p>Here's some designs</motion.p>
          <motion.div>
            <h3>Design 🎨 &rarr;</h3>
            <p>See my past & present design work.</p>
          </motion.div>
        </div>
      </main>

      <a href="/">Home</a>
    </div>
  )
}
