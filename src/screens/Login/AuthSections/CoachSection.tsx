import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../components/common/Input";

// interface ICoachSection {
//     onChange
// }

const CoachSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Input type="text" props={{placeholder: 'Login'}} />
      </View>
      <View style={styles.item}>
        <Input type="text" props={{placeholder: 'Password'}}/>
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

export default CoachSection;
