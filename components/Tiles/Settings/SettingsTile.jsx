import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../../Reusable/Reusable.style";
import { COLORS, TEXT } from "../../../constants/theme";
import ReusableText from "../../Reusable/ReusableText";
import WidthSpacer from "../../Reusable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";
const SettingsTile = ({ title, title1, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText
        text={title}
        family={"regular"}
        color={COLORS.dark}
        size={TEXT.large}
      />
      {title === "Language" ? (
        <View style={reusable.rowWithSpace("flex-start")}>
          <Image
            source={require("../../../assets/images/USA.png")}
            style={styles.image}
          />
          <WidthSpacer width={5} />
          <ReusableText
            text={"English"}
            family={"regular"}
            color={COLORS.gray}
            size={TEXT.large}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      ) : (
        <View style={reusable.rowWithSpace("flex-start")}>
          <ReusableText
            text={title1}
            family={"regular"}
            color={COLORS.gray}
            size={TEXT.large}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15,
  },
  image: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },
});
