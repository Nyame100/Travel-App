import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Image } from "react-native";
import styles from "./slides.style";
import {
  HeightSpacer,
  ReusableBtn,
  ReusableText,
} from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";

const Slides = ({ item }) => {
  const { image, title } = item;

  const navigation = useNavigation();

  const onPress = () => {};

  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={title}
          family={"medium"}
          size={SIZES.xLarge}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={onPress}
          btnText={"Get started"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
