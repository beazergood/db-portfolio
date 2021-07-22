import Image from 'next/image'
import { motion } from 'framer-motion'

export const Wave = () => {
  const svgVariants = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  }
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100vw' }}
      >
        <clipPath id="shape">
          <motion.path
            d="M 1412.875 37.738 C 1386.875 75.962 1333.175 150.989 1279.875 178.364 C 1226.875 205.739 1173.175 183.434 1119.875 145.92 C 1066.875 108.406 1013.175 53.656 959.875 81.031 C 906.875 108.406 853.175 215.878 799.875 237.88 C 746.875 259.476 693.175 194.587 639.875 178.364 C 586.875 162.142 533.175 194.587 479.875 194.587 C 426.875 194.587 373.175 162.142 319.875 172.991 C 266.875 183.434 213.175 238.184 159.875 264.849 C 106.875 291.92 53.175 291.92 26.575 291.92 L 0 291 L 0 491.718 L 29.437 491.718 C 55.912 491.718 109.362 491.718 162.115 519.494 C 215.166 546.853 268.616 603.029 321.368 613.744 C 374.42 624.875 427.869 591.586 480.622 591.586 C 533.673 591.586 587.123 624.875 639.876 608.23 C 692.927 591.586 746.377 525.007 799.129 547.165 C 852.181 569.74 905.63 680.01 958.383 708.097 C 1011.434 736.185 1064.884 680.01 1117.637 641.519 C 1170.688 603.029 1224.137 580.142 1276.89 608.23 C 1329.942 636.318 1383.391 713.299 1409.27 752.517 L 1436.144 791.32 L 1439.875 805 L 1440 805 L 1441 1 Z M -0.125 491.718 L 0 491.718 Z Z"
            fill="rgb(194, 240, 204)"
            variants={pathVariants}
          ></motion.path>
        </clipPath>
      </motion.svg>

      <Image
        className="clipped"
        layout="fill"
        src={'images/me-ont-coast.jpg'}
      />
    </>
  )
}
