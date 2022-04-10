import React from "react";
import { ColorValue } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../assets/constants";

interface LikeDislikeProps {
  type: string;
  color: string;
}

const LikeDislike: React.FC<LikeDislikeProps> = ({ type, color }) => {
  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Text style={[styles.text, { color: color }]}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 7,
    paddingHorizontal: 5,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
});

export default LikeDislike;
