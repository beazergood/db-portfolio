import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import profilePic from '../../public/me.jpg'
import emojiPic from '../../public/emoji.png'

export default function Home() {
  return (
    <div className="image-container">
      <div className="container mx-auto my-40">
        <Head>
          <title>Create Next App: Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full flex flex-row text-white">
          <div className="w-1/2">
            <div className="bg-purp p-5 bg-opacity-60 rounded-full w-2/4">
              <h1 className="text-left">
                <Typewriter
                  options={{
                    strings: [
                      '<span class="text-3xl">Oi oi!</span>',
                      '<span class="text-3xl">Hello!</span>',
                      '<span class="text-3xl">Worrrrrd</span>',
                      '<span class="text-3xl">G\'day!</span>',
                      '<span class="text-3xl">Hi!</span>',
                      '<span class="text-3xl">Bonjour!</span>',
                      '<span class="text-3xl">Wagwan</span>',
                      '<span class="text-3xl">Jambo!</span>',
                      '<span class="text-3xl">Ello ello...</span>',
                    ],
                    autoStart: true,
                    cursor: '<span class="text-3xl">|</span>',
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <div className="bg-gray-2B2B2B mt-10 p-5 bg-opacity-60 rounded-3xl w-3/4">
              <p className="text-2xl mt-5 w-full">
                I'm Dave, a full-stack designer & developer of the interwebs
                from the eternally sunny isle of England.
                <span className="absolute">
                  <Image
                    src={emojiPic}
                    placeholder={'blur'}
                    alt="Picture of Dave Beazer, what a great guy!"
                  />
                </span>
              </p>
              <p className="text-2xl mt-10 w-full">
                I strive to design and build web experiences that even my nan
                would enjoy.
              </p>
              <p className="text-opacity-5 text-gray-2B2B2B text-xl mt-5">
                Hi Nan!
              </p>
            </div>
          </div>

          <div className="w-1/4 rounded-full">
            <Image
              src={profilePic}
              width="300"
              height="300"
              className="rounded-full "
              quality={100}
              placeholder={'blur'}
              alt="Picture of Dave Beazer, what a great guy!"
            />
            <div className="bg-opacity-75 rect absolute bg-purp"></div>
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

          clip-path: polygon(5% 30%, 13% 5%, 100% 70%, 100% 100%);
        }
        .image-container {
          width: 100vw;
          height: 100vh;
          position: absolute;
          z-index: -1;
          background: url('/me-ont-coast.JPG') top left / cover no-repeat;
        }
      `}</style>
    </div>
  )
}
