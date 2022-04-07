import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Dogs from "./components/Dogs";
import Home from "./components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  Dogs: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dogs" component={Dogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
