import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, TEXT } from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import ReusableText from "../../Reusable/ReusableText";
import HeightSpacer from "../../Reusable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();
  const { _id, country, description, imageUrl, region } = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", { item })}
    >
      <View>
        <NetworkImage source={imageUrl} height={85} width={85} radius={12} />
        <HeightSpacer height={5} />
        <ReusableText
          text={country}
          family={"regular"}
          size={TEXT.xxSmall}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
