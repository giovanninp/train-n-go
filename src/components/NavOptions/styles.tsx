import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    height: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flex: 2,
  },
  title: {
    textAlign: "center",
    fontSize: 10,
  },
  selectedBar: {
      backgroundColor: '#EAEAEA'
  }
});
