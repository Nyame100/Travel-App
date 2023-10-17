import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

const reviewCardStyle = StyleSheet.create({
  reviewBorder: {
    paddingBottom: 5,
    borderColor: COLORS.lightGrey,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 15,
    //paddingBottom: 10,
    //borderBottomWidth: 0.5,
    //borderColor: COLORS.lightGrey,
  },
});

export default reviewCardStyle;
