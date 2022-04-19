import React, { useRef, useCallback } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./RoundButton.styles";

interface RoundButtonProps {
  name: any;
  size: number;
  color: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({ name, size, color }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const animateScale = useCallback(
    (newValue) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale]
  );

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => animateScale(1)}
      delayPressOut={80}
    >
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <FontAwesome name={name} size={size} color={color} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default RoundButton;
