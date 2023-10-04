import { View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import reusable from "../../components/Reusable/Reusable.style";
import { HeightSpacer, Places, ReusableText } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import Recommendations from "../../components/Home/Recommendations";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hey user"}
            family={"regular"}
            size={TEXT.small}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" color={COLORS.black} size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.small}
          color={COLORS.black}
        />
        <Places />

        <HeightSpacer height={15} />

        <Recommendations />

        <HeightSpacer height={30} />

        <BestHotels />
      </View>
    </SafeAreaView>
  );
};

export default Home;
