import React from "react";

import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface IOption {
  title?: string;
  icon?: string;
  onPress?: Function;
  index?: number;
}

interface INavOptions {
  options?: Array<IOption>;
  onSelect?: Function;
}

const RenderOption: React.FC<IOption> = (
  { title = null, icon = null, onPress, index },
) => {
  const handlePress = onPress
    ? () => {
        onPress({title, index});
      }
    : () => {};

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={handlePress}
      key={`navopt - ${index}`}
    >
      {icon && <View style={styles.icon}></View>}
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

const NavOptions: React.FC<INavOptions> = ({ options = [], onSelect }) => {

    const RenderItem = (props: IOption) => <RenderOption {...props} />

  return <View style={styles.container}>{options.map(RenderOption)}</View>;
};


export default NavOptions;