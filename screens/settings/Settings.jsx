import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import AppBar from "../../components/Reusable/AppBar";
import { HeightSpacer, ReusableText, SettingsTile } from "../../components";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          color={COLORS.white}
          onPress={() => navigation.goBack()}
          top={50}
          left={20}
          right={20}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Account settings"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />
        <SettingsTile title={"Language"} />

        <HeightSpacer height={3} />

        <SettingsTile title={"Country"} title1={"USA"} />

        <HeightSpacer height={3} />

        <SettingsTile title={"Currency"} title1={"USD"} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Support"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />
        <SettingsTile title={"Get help"} title1={""} />

        <HeightSpacer height={10} />
        <SettingsTile title={"Give a feedback"} title1={""} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Legal"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />
        <SettingsTile title={"Terms of service"} />

        <HeightSpacer height={3} />

        <SettingsTile title={"Privacy policy"} title1={""} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
