import React from "react";

import { View, Text } from "react-native";

import Frame from "../../components/Frame";

import styles from "./styles";

class Home extends React.Component {
  render() {
    return (
      <Frame>
        <View style={styles.container}>
            <Text>Hello Home</Text>
        </View>
      </Frame>
    );
  }
}

export default Home;
