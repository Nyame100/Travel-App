import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import reusable from "./Reusable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  WidthSpacer,
} from "../../components/index";

const ReusableTile = ({ item, onPress }) => {
  const { imageUrl, title, location, review, rating } = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage source={imageUrl} width={80} height={80} radius={12} />

        <WidthSpacer width={15} />

        <View>
          <ReusableText
            text={title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />

          <HeightSpacer height={8} />

          <ReusableText
            text={location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

          <View style={reusable.rowWithSpace("flex-start")}>
            <Rating rating={rating} />
            <WidthSpacer width={5} />
            <ReusableText
              text={`(${review})`}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ReusableTile);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
