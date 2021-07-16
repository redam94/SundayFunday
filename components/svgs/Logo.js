import * as React from "react"
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg"
import {flute} from '../../styles/colors'

/* SVGR has dropped some elements not supported by react-native-svg: title */
const window = Dimensions.get('window')
function SvgComponent(props) {
  const height = 480;
  const width = 640;
  const fluteColor = flute;
  const fluteAlpha = 1;
  const fluteFlairAlpha1 = .5;
  const fluteFlairAlpha2 = .65;
  const fluteFlairColor = '#fff';

  return (
    <Svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        opacity={fluteAlpha}
        fill={fluteColor}
        d="M304.301 68.911l-78.56-22.2c-22.546 72.443-51.001 126.868-24.146 210.262-2.921 65.596-23.981 130.491-37.894 130.694-18.463.269-40.208-4.955-39.283 3.747l-.436 6.677c8.985 7.147 22.695 13.871 49.659 23.283 31.101 6.331 41.728 5.452 55.401 5.646l2.548-7.366c3.381-9.772-8.188-11.298-32.88-23.182-15.885-7.645 3.239-83.126 30.174-136.211 58.949-54.492 61.26-136.729 75.417-191.35z"
      />
      <Path
        opacity={fluteFlairAlpha1}
        fill={fluteFlairColor}
        d="M281.434 64.746l-34.766 132.857s-3.084 11.499-.766 12.189c2.485.739 6.003-11.515 6.003-11.515l35.154-132.753-5.625-.778z"
      />
      <Path
        opacity={fluteAlpha}
        fill={fluteColor}
        d="M397.996 25.279l-87.059 22.063c18.367 81.422 21.195 148.928 92.654 213.61 33.299 64.102 48.932 137.516 35.787 145.363-17.443 10.412-41.034 17.397-35.365 25.179l3.258 6.602c12.49 1.866 29.252.731 60.119-5.134 33.114-11.076 42.756-17.759 55.889-25.095l-1.623-8.42c-2.154-11.17-14.017-6.26-44.08-4-19.34 1.454-42.639-80.98-46.177-146.373 26.19-84.345-16.845-163.967-33.403-223.795z"
      />
      <Path
        opacity={fluteFlairAlpha2}
        fill={fluteFlairColor}
        d="M375.972 35.243l39.958 145.704s3.386 12.653 5.976 12.035c2.773-.662-.616-14.273-.616-14.273L381.76 32.891l-5.788 2.352z"
      />
    </Svg>
  )
}

export default SvgComponent