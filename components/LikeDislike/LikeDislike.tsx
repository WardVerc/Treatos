import React from "react";
import { Text, View } from "react-native";
import { styles } from "./LikeDislike.styles";

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

export default LikeDislike;
