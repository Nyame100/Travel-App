import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewCard from "../Tiles/Reviews/ReviewCard";
import HeightSpacer from "../Reusable/HeightSpacer";

const ReviewsList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View>
          <HeightSpacer height={10} />
          <ReviewCard review={item} />
        </View>
      )}
    />
  );
};

export default ReviewsList;

const styles = StyleSheet.create({});
