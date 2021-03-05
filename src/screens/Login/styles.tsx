import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    flexShrink: 2,
  },
  auth: {
    flex: 1,
    flexShrink: 0,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
});
