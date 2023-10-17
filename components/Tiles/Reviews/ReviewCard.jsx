import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reviewCardStyle from "./Review.style";
import reusable from "../../Reusable/Reusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import Rating from "../../Reusable/Rating";
import { DescriptionText } from "../../index";

const ReviewCard = ({ review }) => {
  return (
    <View style={reviewCardStyle.reviewBorder}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={20} />

          <View style={{ width: "80%" }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.xSmall + 2}
                color={COLORS.black}
              />

              <WidthSpacer width={"20%"} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating rating={review.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={review.updatedAt}
                  family={"medium"}
                  size={SIZES.xSmall + 2}
                  color={COLORS.black}
                />
              </View>
            </View>
            <DescriptionText text={review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({});
