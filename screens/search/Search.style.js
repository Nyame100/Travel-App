import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const searchContainerStyle = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  input: {
    fontFamily: "medium",
    fontSize: SIZES.small,
    width: "100%",
    height: "100%",
    paddingHorizontal: 15,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small + 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },
  searchImage: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height / 2.2,
    paddingHorizontal: 20,
  },
});

export default searchContainerStyle;
