import { motion } from 'framer-motion'

const svgVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 2,
    transition: { duration: 2 },
  },
}

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: { duration: 3, ease: 'easeInOut' },
  },
}

const curve = (start, control1, control2, end) => {
  return [
    'M',
    start.join(' '),
    'C',
    control1.join(' '),
    control2.join(' '),
    end.join(' '),
  ].join(' ')
}

const line = (start, end) => {
  return ['M', start.join(' '), 'L', end.join(' ')].join(' ')
}

// const Guide = ({ start, end }) => {
//   return [
//     <circle fill="gray" opacity={0.5} cx={start[0]} cy={start[1]} r={1} />,
//     <path
//       stroke="gray"
//       strokeWidth="1"
//       strokeOpacity={0.5}
//       fill="transparent"
//       d={line(start, end)}
//     />,
//     <circle fill="gray" opacity={0.5} cx={end[0]} cy={end[1]} r={1} />,
//   ]
// }

const symmetricalCurvePoints = ({
  controlX,
  endpointX,
  endpointDistance,
  controlDistance,
}) => [
  [endpointX, 50 - endpointDistance / 2],
  [controlX, 50 - controlDistance / 2],
  [controlX, 50 + controlDistance / 2],
  [endpointX, 50 + endpointDistance / 2],
]

const Curve = ({ points, showGuides }) => {
  const curvePath = (
    <motion.path
      strokeWidth="1"
      stroke="blue"
      strokeOpacity={0.5}
      fill="transparent"
      d={curve(...points)}
      variants={pathVariants}
    />
  )
  // if (showGuides) {
  //   return [
  //     (<Guide start={points[0]} end={points[1]} />),
  //     (<Guide start={points[2]} end={points[3]} />),
  //     curvePath
  //   ]
  // } else {
  return curvePath
  // }
}

const Line = ({ start, end }) => (
  <motion.path
    strokeWidth="1"
    stroke="blue"
    strokeOpacity={0.5}
    fill="transparent"
    d={line(start, end)}
    variants={pathVariants}
  />
)

export const InfiniteLoop = () => {
  const leftCurvePoints = symmetricalCurvePoints({
    controlX: 10,
    endpointX: 35,
    controlDistance: 40,
    endpointDistance: 15,
  })
  const rightCurvePoints = symmetricalCurvePoints({
    controlX: 90,
    endpointX: 65,
    controlDistance: 40,
    endpointDistance: 15,
  })
  return (
    <div className="mx-auto w-1/2">
      <motion.svg
        viewBox="0 25 100 50"
        style={{ border: '0px solid lightgray', width: '100%' }}
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <Curve points={leftCurvePoints} showGuides={true} />
        <Curve points={rightCurvePoints} showGuides={true} />
        <Line start={leftCurvePoints[0]} end={rightCurvePoints[3]} />
        <Line start={leftCurvePoints[3]} end={rightCurvePoints[0]} />
      </motion.svg>
    </div>
  )
}
