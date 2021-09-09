import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const svgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
}

const pathVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 3, ease: 'easeInOut' } },
}
export const VennDiagram = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
    delay: 300,
  })
  const vennVariants = {
    visible: {},
    hidden: {},
  }
  return (
    <>
      <motion.div className="py-32">
        <motion.div className="relative w-full">
          <motion.p className="font-mono text-purp absolute -top-4 left-4">
            I'm here
          </motion.p>
          <p className="font-mono text-gray-300 absolute sm:right-20  -top-12">
            Design
          </p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="336"
            variants={svgVariants}
            animate={inView ? 'animate' : 'initial'}
            ref={ref}
            initial="initial"
            className="overflow-x-hidden"
          >
            <motion.path
              d="M 152 17 C 152 83.826 97.826 138 31 138 C 20.54 138 10.39 136.673 0.709 134.177 C 0.241 129.849 0 125.453 0 121 C 0 54.174 54.174 0 121 0 C 131.46 0 141.61 1.327 151.291 3.823 C 151.759 8.151 152 12.547 152 17 Z"
              transform="translate(107.334 108.75) rotate(90 76 69)"
              fill="rgb(194, 240, 204)"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="M 121 0 C 183.374 0 234.724 47.195 241.291 107.823 C 231.61 105.327 221.46 104 211 104 C 144.174 104 90 158.174 90 225 C 90 229.453 90.241 233.849 90.709 238.177 C 38.542 224.731 0 177.366 0 121 C 0 54.174 54.174 0 121 0 Z M 242 121 C 242 187.826 187.826 242 121 242 C 110.54 242 100.39 240.673 90.709 238.177 C 97.276 298.805 148.626 346 211 346 C 277.826 346 332 291.826 332 225 C 332 168.634 293.458 121.269 241.291 107.823 C 241.759 112.151 242 116.547 242 121 Z"
              transform="translate(17.967 4.316) rotate(90 166 173)"
              fill="transparent"
              stroke-width="21"
              stroke="rgb(194, 133, 211)"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="M 25 33 C 25 33 35.125 88.875 71 117.5 C 106.875 146.125 123.428 155.661 168 150"
              fill="transparent"
              stroke-width="10"
              stroke="rgb(111, 220, 135)"
              variants={pathVariants}
            ></motion.path>

            {/* <motion.path
              d="M 121 0 C 183.374 0 234.724 47.195 241.291 107.823 C 231.61 105.327 221.46 104 211 104 C 144.174 104 90 158.174 90 225 C 90 229.453 90.241 233.849 90.709 238.177 C 38.542 224.731 0 177.366 0 121 C 0 54.174 54.174 0 121 0 Z M 242 121 C 242 187.826 187.826 242 121 242 C 110.54 242 100.39 240.673 90.709 238.177 C 97.276 298.805 148.626 346 211 346 C 277.826 346 332 291.826 332 225 C 332 168.634 293.458 121.269 241.291 107.823 C 241.759 112.151 242 116.547 242 121 Z"
              transform="translate(8.967 -4.684) rotate(90 166 173)"
              fill="transparent"
              stroke-width="10"
              stroke="rgb(194, 133, 211)"
              variants={pathVariants}
            />
            <motion.path
              d="M 152 17 C 152 83.826 97.826 138 31 138 C 20.54 138 10.39 136.673 0.709 134.177 C 0.241 129.849 0 125.453 0 121 C 0 54.174 54.174 0 121 0 C 131.46 0 141.61 1.327 151.291 3.823 C 151.759 8.151 152 12.547 152 17 Z"
              transform="translate(98.334 99.75) rotate(90 76 69)"
              fill="rgba(194, 240, 204, 0.4)"
              variants={pathVariants}
            />
            <motion.path
              d="M 16 24 C 16 24 26.125 79.875 62 108.5 C 97.875 137.125 114.428 146.661 159 141"
              fill="transparent"
              stroke-width="10"
              stroke="rgb(111, 220, 135)"
              variants={pathVariants}
            /> */}
          </motion.svg>
          <p className="font-mono text-gray-300 absolute -left-0 sm:left-10 -bottom-8">
            Development
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}
