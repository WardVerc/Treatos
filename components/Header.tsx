import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SCREEN } from "../assets/constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: SCREEN.WIDTH,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    zIndex: 3,
  },
});
