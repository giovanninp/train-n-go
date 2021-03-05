import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface IFab {
  title?: string;
  onPress?: Function;
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: 20,
  medium: 40,
  large: 60,
};

const Fab: React.FC<IFab> = ({
  title= '',
  onPress,
  backgroundColor = '#fff',
  textColor = '#000',
  size = "medium",
}) => {
  const styles = StyleSheet.create({
    container: {
      minHeight: sizes[size],
      minWidth: sizes[size],
      alignItems: "center",
      justifyContent: "center",
      borderRadius: sizes[size] / 2,
      elevation: 5,
      backgroundColor,
      padding: 5
    },
    title: {
      fontSize: sizes[size] / 2,
      textAlign: "center",
      color: textColor
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Fab;