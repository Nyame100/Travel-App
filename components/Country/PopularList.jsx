import { FlatList, View } from "react-native";
import React from "react";
import ReusableTile from "../Reusable/ReusableTile";
import { useNavigation } from "@react-navigation/native";
import HeightSpacer from "../Reusable/HeightSpacer";

const PopularList = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View>
      <HeightSpacer height={10} />
      <ReusableTile
        item={item}
        onPress={() => navigation.navigate("PlaceDetails", item._id)}
      />
    </View>
  );
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PopularList;
