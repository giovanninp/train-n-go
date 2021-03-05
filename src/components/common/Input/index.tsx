import React from "react";
import { View } from "react-native";
import { TabRouter } from "react-navigation";

import Types from "./Types";

interface IInput {
  props?: any;
  type: "default" | "text";
}

const Input: React.FC<IInput> = ({ type = "default", props }) => {
  const choosen = type === "default" ? "text" : type;
  const ToRender = Types[choosen];

  return <ToRender {...props} />;
};

export default Input;
