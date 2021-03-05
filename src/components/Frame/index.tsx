import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

interface IFrame {
  backgroundColor?: string;
}

const Frame: React.FC<IFrame> = ({ backgroundColor = "none", children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{
        backgroundColor,
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default Frame;
