import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/MartianMono-Regular.otf"),
    bold: require("./assets/fonts/MartianMono-Bold.otf"),
    extraBold: require("./assets/fonts/MartianMono-ExtraBold.otf"),
    light: require("./assets/fonts/MartianMono-Light.otf"),
    extraLight: require("./assets/fonts/MartianMono-ExtraLight.otf"),
    medium: require("./assets/fonts/MartianMono-Medium.otf"),
    xlight: require("./assets/fonts/light.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
