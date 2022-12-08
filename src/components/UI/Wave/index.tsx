import { motion } from "framer-motion";
import useResponsive from "../../../hooks/responsive";

const svgVariants = {
  hidden: {
    x: -50,
  },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const WaveWithImage = () => {
  return (
    <div className="flex flex-row">
      <div className="svg-container">
        <motion.svg viewBox="0 0 1440 805" className="svg-content absolute z-0">
          <motion.path
            d="M 1412.875 37.738 C 1386.875 75.962 1333.175 150.989 1279.875 178.364 C 1226.875 205.739 1173.175 183.434 1119.875 145.92 C 1066.875 108.406 1013.175 53.656 959.875 81.031 C 906.875 108.406 853.175 215.878 799.875 237.88 C 746.875 259.476 693.175 194.587 639.875 178.364 C 586.875 162.142 533.175 194.587 479.875 194.587 C 426.875 194.587 373.175 162.142 319.875 172.991 C 266.875 183.434 213.175 238.184 159.875 264.849 C 106.875 291.92 53.175 291.92 26.575 291.92 L 0 291 L 0 491.718 L 29.437 491.718 C 55.912 491.718 109.362 491.718 162.115 519.494 C 215.166 546.853 268.616 603.029 321.368 613.744 C 374.42 624.875 427.869 591.586 480.622 591.586 C 533.673 591.586 587.123 624.875 639.876 608.23 C 692.927 591.586 746.377 525.007 799.129 547.165 C 852.181 569.74 905.63 680.01 958.383 708.097 C 1011.434 736.185 1064.884 680.01 1117.637 641.519 C 1170.688 603.029 1224.137 580.142 1276.89 608.23 C 1329.942 636.318 1383.391 713.299 1409.27 752.517 L 1436.144 791.32 L 1439.875 805 L 1440 805 L 1441 1 Z M -0.125 491.718 L 0 491.718 Z Z"
            fill="rgb(194, 240, 204)"
            variants={pathVariants}
          ></motion.path>
        </motion.svg>
        <motion.svg width="0" height="0" className="svg-content">
          <clipPath id="shape" clipPathUnits="objectBoundingBox">
            <motion.path
              d="M0.981,0.047 C0.963,0.094,0.926,0.188,0.889,0.222 C0.852,0.256,0.815,0.228,0.778,0.181 C0.741,0.135,0.704,0.067,0.667,0.101 C0.63,0.135,0.592,0.268,0.555,0.296 C0.519,0.322,0.481,0.242,0.444,0.222 C0.408,0.201,0.37,0.242,0.333,0.242 C0.296,0.242,0.259,0.201,0.222,0.215 C0.185,0.228,0.148,0.296,0.111,0.329 C0.074,0.363,0.037,0.363,0.018,0.363 L0,0.363 L0,0.611 L0.02,0.611 C0.039,0.611,0.076,0.611,0.113,0.645 C0.149,0.679,0.187,0.749,0.223,0.762 C0.26,0.776,0.297,0.735,0.334,0.735 C0.371,0.735,0.408,0.776,0.444,0.756 C0.481,0.735,0.518,0.652,0.555,0.68 C0.592,0.708,0.629,0.845,0.666,0.88 C0.702,0.915,0.74,0.845,0.776,0.797 C0.813,0.749,0.85,0.721,0.887,0.756 C0.924,0.79,0.961,0.886,0.979,0.935 L0.997,0.983 L1,1 L1,1 L1,0 L1,0"
              fill="rgb(194, 240, 204)"
              variants={pathVariants}
            ></motion.path>
          </clipPath>
        </motion.svg>
        <img src={"/images/me-ont-coast.jpg"} className="clipped m-0" />
      </div>

      <style jsx>{`
        .clipped {
          clip-path: url(#shape);
        }

        .clipped2 {
          clip-path: url(#shape2);
        }

        .svg-container {
          display: inline-block;
          position: relative;
          width: 100%;
          padding-bottom: 0%;
          vertical-align: middle;
          overflow: hidden;
        }

        .svg-content {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

const WaveWithGradient = () => {
  return (
    <>
    <motion.svg viewBox="0 0 1440 605" >
      <defs>
        <mask id="mask">
          <path
            d="M 0,111 C 96,130 288,207.2 480,206 C 672,204.8 768,117.8 960,105 C 1152,92.2 1344,134.6 1440,142L1440 560L0 560z"
            fill="rgba(194, 240, 204, 1)"
          ></path>
          <path
            d="M 0,481 C 288,444.2 1152,333.8 1440,297L1440 560L0 560z"
            fill="rgba(194, 133, 211, 1)"
          ></path>
        </mask>
      </defs>
      <image href={"/images/me-ont-coast.jpg"} mask="url(#mask)"></image>
    </motion.svg>
    </>
  );
};

export const Wave = () => {
  const { isTabletOrMobile } = useResponsive();

  return isTabletOrMobile ? <WaveWithImage /> : <WaveWithGradient />;
};
