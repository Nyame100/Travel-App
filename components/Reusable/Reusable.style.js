import { StyleSheet, Platform } from "react-native";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent,
  }),
});

export default reusable;
