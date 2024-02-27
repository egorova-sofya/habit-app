import React, { FC } from "react";
import { Dimensions, View } from "react-native";
import { Svg, Circle } from "react-native-svg";
import { COLORS, SIZES } from "../../constants/theme";

interface Props extends React.ComponentProps<typeof View> {
  color: string;
  progress: number;
}

const ProgressCircle: FC<Props> = ({ color, progress, children, ...props }) => {
  const width = Dimensions.get("screen").width;
  const buttonSize = 90;

  const circleLength = width > SIZES.largeViewportWidth ? 220 : 185;
  const Radius = circleLength / (2 * Math.PI);

  return (
    <>
      <View
        {...props}
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Svg width={buttonSize} height={buttonSize}>
          <Circle
            cx={buttonSize / 2}
            cy={buttonSize / 2}
            r={Radius}
            stroke={COLORS.gray}
            fill="transparent"
            strokeWidth={5}
          />
          <Circle
            cx={buttonSize / 2}
            cy={buttonSize / 2}
            r={Radius}
            stroke={color}
            strokeWidth={5}
            fill="transparent"
            strokeDasharray={circleLength}
            strokeDashoffset={(1 - progress / 100) * circleLength}
            strokeLinecap="round"
          />
        </Svg>

        <View
          style={{
            height: "100%",
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 150,
          }}
        >
          {children}
        </View>
      </View>
    </>
  );
};

export default ProgressCircle;
