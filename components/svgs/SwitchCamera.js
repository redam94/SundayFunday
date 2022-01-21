import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-labelledby="title"
      aria-describedby="desc"
      {...props}
    >
      <Path
        data-name="layer1"
        d="M59 18H46.6L40 10H24l-6.6 8H5a3 3 0 00-3 3v30a3 3 0 003 3h54a3 3 0 003-3V21a3 3 0 00-3-3zM38.6 46.3A13.7 13.7 0 0132 48a13.9 13.9 0 01-9.9-4.1 14.1 14.1 0 01-4-10l-1.5 1.5a2 2 0 11-2.8-2.8l6.2-6.3 6.2 6.3a2 2 0 11-2.8 2.8l-1.2-1.2a10.1 10.1 0 002.8 6.9 9.8 9.8 0 0011.7 1.7 2 2 0 011.9 3.5zm11.6-10.9L44 41.7l-6.2-6.3a2 2 0 112.8-2.8l1.2 1.2a10.1 10.1 0 00-2.8-6.9 9.8 9.8 0 00-11.7-1.7 2 2 0 11-1.9-3.5 13.9 13.9 0 0116.4 2.4 14.1 14.1 0 014 10l1.5-1.5a2 2 0 112.8 2.8z"
        fill="#ffffffdf"
      />
    </Svg>
  )
}

export default SvgComponent