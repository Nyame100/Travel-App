import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const hotelDetailsStyle = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: -50,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
  },
  bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20,
  },
});

export default hotelDetailsStyle;
