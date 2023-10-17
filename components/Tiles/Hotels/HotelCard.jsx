import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
} from "../../../components/index";

const HotelCard = ({ item, margin, onPress }) => {
  const { imageUrl, title, location, rating } = item;
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={imageUrl}
            width={"90%"}
            height={"100%"}
            radius={16}
          />
        </View>

        <View style={{ padding: 10 }}>
          <ReusableText
            text={title}
            family={"medium"}
            size={SIZES.xSmall}
            color={COLORS.black}
          />

          <HeightSpacer height={5} />

          <ReusableText
            text={location}
            family={"medium"}
            size={SIZES.small}
            color={COLORS.gray}
          />

          <HeightSpacer height={5} />
          <Rating rating={rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 260,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginRight: margin,
  }),
  imageContainer: {
    alignItems: "center",
    margin: 10,
    height: 150,
  },
});
