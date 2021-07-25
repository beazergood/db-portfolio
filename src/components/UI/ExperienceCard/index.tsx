import { Pill } from '../Pill'
import { useInView } from 'react-intersection-observer'
import {
  useViewportScroll,
  motion,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'

export interface ExperienceCardProps {
  role: string
  company: string
  dates: string
  pills: Array<any>
  side: string
  img: string
  description: string
}

const variantsFromLeft = {
  visible: { opacity: 1, scale: 1, x: 30 },
  hidden: {
    opacity: 0,
    scale: 0.65,
    x: -30,
  },
}
const variantsFromRight = {
  visible: { opacity: 1, scale: 1, x: 0 },
  hidden: {
    opacity: 0,
    scale: 0.65,
    x: 50,
  },
}

export const ExperienceCard = ({ ...props }) => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <>
      {props.side == 'left' && (
        <div className="flex md:contents">
          <div className="flex flex-row-reverse md:contents">
            <motion.div
              className="col-start-1 col-end-5"
              transition={{ type: 'spring', stiffness: 100, duration: 2 }}
              animate={inView ? 'visible' : 'hidden'}
              variants={variantsFromLeft}
              ref={ref}
            >
              <Card props={props} />
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <TimelineElement />
            </div>
          </div>
        </div>
      )}
      {props.side == 'right' && (
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <TimelineElement />
          </div>
          <motion.div
            className="col-start-6 col-end-10"
            transition={{ type: 'spring', stiffness: 100, duration: 2 }}
            animate={inView ? 'visible' : 'hidden'}
            variants={variantsFromRight}
            ref={ref}
          >
            <Card props={props} />
          </motion.div>
        </div>
      )}
    </>
  )
}

const Card = ({ props }) => {
  const pillsContainer = {
    hidden: {
      x: 420,
    },
    show: {
      x: -10,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <div className="bg-white p-4 rounded-xl my-4 ml-auto shadow-md block">
      <h3 className="font-semibold mb-1 text-sm uppercase font-mono text-gray-300">
        {props.company}
      </h3>
      <h1 className="leading-tight text-justify text-2xl text-gray-600 mb-4">
        {props.role}
      </h1>
      {props.description && (
        <p className="text-justify text-gray-500">{props.description}</p>
      )}
      <motion.ul
        className="py-2 flex flex-wrap p-x-2 my-2 w-full relative top-1"
        variants={pillsContainer}
        initial="hidden"
        animate="show"
        layout
      >
        {props.pills.map((p, i) => {
          return (
            <motion.li key={i} variants={listItem}>
              <Pill title={p} />
            </motion.li>
          )
        })}
      </motion.ul>

      <p className="leading-tight text-gray-400 text-right">{props.dates}</p>
    </div>
  )
}

const TimelineElement = () => {
  return (
    <>
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-mintee pointer-events-none"></div>
      </div>
      <motion.div
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 },
        }}
        className="w-6 h-6 absolute top-1/2 -mt-10 rounded-full bg-white stroke-2 border-4 border-purp shadow"
      ></motion.div>
    </>
  )
}
