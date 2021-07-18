import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'
import '../../styles/globals.css'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // const cursorX = useMotionValue(-100)
  // const cursorY = useMotionValue(-100)
  // const cursorXOutline = useMotionValue(-100)
  // const cursorYOutline = useMotionValue(-100)

  // const springConfig = { damping: 75, stiffness: 500 }
  // const springConfigOutline = { damping: 25, stiffness: 100 }
  // const cursorXSpring = useSpring(cursorX, springConfig)
  // const cursorYSpring = useSpring(cursorY, springConfig)
  // const cursorXOutlineSpring = useSpring(cursorXOutline, springConfigOutline)
  // const cursorYOutlineSpring = useSpring(cursorYOutline, springConfigOutline)

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     cursorX.set(e.pageX - 4)
  //     cursorY.set(e.pageY - 4)
  //   }
  //   const moveCursorOutline = (e) => {
  //     cursorXOutline.set(e.pageX - 20)
  //     cursorYOutline.set(e.pageY - 20)
  //   }

  //   window.addEventListener('mousemove', moveCursor)
  //   window.addEventListener('mousemove', moveCursorOutline)
  //   window.addEventListener('mousedown', moveCursorOutline)

  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor)
  //     window.removeEventListener('mousemove', moveCursorOutline)
  //     window.removeEventListener('mousedown', moveCursorOutline)
  //   }
  // }, [])

  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
export default MyApp

//  <motion.div
// className="cursor-dot-outline"
// style={{
//   translateX: cursorXOutlineSpring,
//   translateY: cursorYOutlineSpring,
// }}
// />
// <motion.div
// className="cursor-dot"
// style={{
//   translateX: cursorXSpring,
//   translateY: cursorYSpring,
// }}
// />
