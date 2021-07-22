import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import profilePic from '../../public/me.jpg'
import emojiPic from '../../public/images/emoji.png'
import { Button } from '../components/UI/Button'
import { version } from '../../package.json'
import { Nav } from '../components/UI/Nav'

export default function About() {
  const props = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: 'about' },
    { id: 3, label: 'Contact', href: 'contact' },
  ]

  return (
    <>
      <Nav props={props} />

      <div className="image-container overflow-hidden">
        <div className="container mx-auto my-40">
          <Head>
            <title>About {version}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <motion.div className="flex flex-row justify-end" layoutId="nav">
            <div className="w-1/3 flex flex-row space-x-4">
              <Button label="Nav to Home" href="/" />
              <Button label="About" href="/about" />
            </div>
          </motion.div>
          <div className="w-full flex flex-row text-white">
            <div className="w-1/2">
              <div className="bg-purp p-5 bg-opacity-60 rounded-full w-2/4">
                <h1 className="text-left">
                  <Typewriter
                    options={{
                      strings: getGreeting(),
                      autoStart: true,
                      cursor: '<span class="text-3xl">|</span>',
                      loop: true,
                    }}
                  />
                </h1>
              </div>
              <motion.div className="bg-opacity-75 rect absolute bg-purp"></motion.div>
              <div className="bg-gray-2B2B2B mt-10 p-5 bg-opacity-60 rounded-3xl w-3/4">
                <div className="text-2xl mt-5 w-full relative">
                  <p>
                    I'm Dave, a{' '}
                    <strong className="text-mintee font-bold">
                      full-stack designer &amp; developer
                    </strong>{' '}
                    of the interwebs from the eternally sunny isle of England.
                  </p>
                  <Image src={emojiPic} alt="It never rains, it pours" />
                </div>
                <p className="text-2xl mt-10 w-full">
                  I strive to design and build modern web experiences that even
                  my nan would enjoy.
                </p>
                <p className="text-opacity-5 text-gray-2B2B2B text-xl mt-5">
                  Hi Nan!
                </p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .rect {
            /* -webkit-box-shadow: 10px 10px 10px 141px rgb(38, 64, 100); */
            width: 1500px;
            height: 1000px;
            top: 130px;
            z-index: -1;
            /* box-shadow: 111px 111px 0px 111px rgb(38, 64, 100); */

            clip-path: polygon(0% 0%, 0% 0%, 10% 70%, 100% 100%);
          }
          .image-container {
            width: 100vw;
            height: 100vh;
            position: absolute;
            z-index: -1;
            background: url('/images/me-ont-coast.jpg') top left / cover
              no-repeat;
          }
        `}</style>
      </div>
    </>
  )
}

function getGreeting() {
  return [
    '<span class="text-3xl">Oi oi!</span>',
    // '<span class="text-3xl">Hello!</span>',
    // '<span class="text-3xl">Worrrrrd</span>',
    // '<span class="text-3xl">G\'day!</span>',
    // '<span class="text-3xl">Hi!</span>',
    // '<span class="text-3xl">Bonjour!</span>',
    // '<span class="text-3xl">Wagwan</span>',
    // '<span class="text-3xl">Jambo!</span>',
    '<span class="text-3xl">Ello ello...</span>',
  ]
}
