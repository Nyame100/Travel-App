import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View>
      <Text>County details</Text>
    </View>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({});
