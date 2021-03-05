import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
  view: {
    flex: 1,
    width,
    justifyContent: 'center',
  },
  button: {
      padding: 20,
  }
});
