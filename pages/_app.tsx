// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'
// import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
export default MyApp
