import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../components";
import AppBar from "../components/Reusable/AppBar";
import TopTabStyles from "./TopTab.style";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          {/* Main image on the TopTab */}
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />

          <View style={TopTabStyles.profile}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg",
              }}
              style={TopTabStyles.image}
            />

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"Agent 47"}
                family={"medium"}
                color={COLORS.white}
                size={SIZES.medium}
              />
            </View>

            <HeightSpacer height={5} />

            <View style={TopTabStyles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"cdn_47@mail.com"}
                  family={"medium"}
                  color={COLORS.black}
                  size={SIZES.medium}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="TopInfo"
        activeColor="#EB6A58"
        tabBarHideKeyBoard={true}
        headerShown={false}
        inactiveColor={"#3E2465"}
        barStyle={{ paddingBottom: 48 }}
      >
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
