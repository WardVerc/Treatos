import React from "react";
import { View } from "react-native";
import { COLORS } from "../../assets/constants";
import RoundButton from "../RoundButton/RoundButton";
import { styles } from "./Footer.styles";

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
