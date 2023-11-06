import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import reusable from "./Reusable.style";

const ProfileTile = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View
          style={[
            reusable.rowWithSpace("flex-start"),
            { marginHorizontal: 10 },
          ]}
        >
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={10} />

          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>
        <WidthSpacer width={5} />
        <AntDesign name="right" size={20} color={COLORS.dark} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  tile: {
    paddingVertical: 12,
    backgroundColor: COLORS.lightWhite,
    marginBottom: 10,
    borderRadius: 16,
  },
});
