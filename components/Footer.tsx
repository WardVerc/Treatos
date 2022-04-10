import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SCREEN } from "../assets/constants";
import RoundButton from "./RoundButton";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <RoundButton name="times" size={40} color={COLORS.nope} />
        <RoundButton name="heart" size={34} color={COLORS.like} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: SCREEN.WIDTH,
    alignItems: "center",
    marginBottom: 10,
  },
  buttons: {
    width: "40%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    zIndex: 3,
  },
});
