import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const AdultVaccinationCalendarIcon = () => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50">
      <Defs>
        <ClipPath id="a">
          <Rect
            width="50"
            height="50"
            transform="translate(254 524)"
            fill="#fff"
            stroke="#707070"
            stroke-width="1"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(-254 -524)" clip-path="url(#a)">
        <Path
          d="M49.873,42.844a1.953,1.953,0,1,0-3.824.8,2.041,2.041,0,0,1-.414,1.711,1.984,1.984,0,0,1-1.562.743H5.927a1.985,1.985,0,0,1-1.562-.743,2.04,2.04,0,0,1-.414-1.711A21.579,21.579,0,0,1,24.5,26.552c.165.006.807.007.961,0a21.484,21.484,0,0,1,17.407,9.536,1.953,1.953,0,0,0,3.244-2.175,25.4,25.4,0,0,0-13.165-10,13.281,13.281,0,1,0-15.9,0A25.4,25.4,0,0,0,.127,42.844,5.934,5.934,0,0,0,5.927,50H44.073a5.934,5.934,0,0,0,5.8-7.156ZM15.625,13.281A9.375,9.375,0,0,1,34.25,11.757,21.013,21.013,0,0,1,26.267,9.8a11.062,11.062,0,0,1-2.826-1.9A1.951,1.951,0,0,0,20.02,9.18a1.759,1.759,0,0,0,.37,1.171c.175.205,4.147,4.724,13.679,5.309a9.394,9.394,0,0,1-8.6,6.985c-.155,0-.77,0-.922,0a9.386,9.386,0,0,1-8.918-9.364Z"
          transform="translate(254 524)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export default AdultVaccinationCalendarIcon;
