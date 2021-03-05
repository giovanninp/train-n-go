import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../components/common/Input";

// interface ICoachSection {
//     onChange
// }

const AthleteSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Input type="text" props={{placeholder: 'Token'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  item: {
    width: '100%',
    paddingBottom: 10,
  },
});

export default AthleteSection;
