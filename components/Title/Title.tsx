import React, { FC, ReactNode } from "react";
import { Text } from "react-native";

interface Props {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const Title: FC<Props> = ({ children, size = "md" }) => {
  return <Text>{children}</Text>;
};

export default Title;
