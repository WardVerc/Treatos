import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";
import useGetDogs from "./useGetDogs";
import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Dog from "./Dog";

type Props = NativeStackScreenProps<StackParamList, "Dogs">;

const Dogs: React.FC<Props> = ({ navigation }) => {
  const { dogs } = useGetDogs();

  // hold x and y positions
  const swipe = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    // on touch, hold the same x and y changes in swipe
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      // on release put animated view back to original pos, spring for smooth transition
      Animated.spring(swipe, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
        // bouncy effect on release
        friction: 7,
      }).start();
    },
  });

  // put handlers on animated view
  const dragHandlers = panResponder.panHandlers;

  // add rotation mapped to x position
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-8deg", "0deg", "8deg"],
  });

  // give the animated view the tranform (= swipe changes)
  const dogStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <Animated.View style={[styles.dogCard, dogStyle]} {...dragHandlers}>
        <Dog dog={dogs[0]} />
      </Animated.View>

      <View style={styles.bottomBorder}>
        <Text>Buttons</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBorder: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  dogCard: {
    width: "90%",
    height: "65%",
    margin: 20,
    marginBottom: 50,
    borderRadius: 10,

    // shadowbox around card
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.5,
    elevation: 10,
  },
});

export default Dogs;
