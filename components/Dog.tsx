import { DogType } from "./useGetDogs";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import { CARD, COLORS } from "../assets/constants";
import { useRef } from "react";
import LikeDislike from "./LikeDislike";

interface DogProps {
  dog: DogType;
  isFirst: boolean;
}

const Dog: React.FC<DogProps> = ({ dog, isFirst }) => {
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

  const renderLikeDislike = () => {
    return (
      <View style={styles.likeDislikeContainer}>
        <View style={styles.likeContainer}>
          <LikeDislike type="like" color={COLORS.like} />
        </View>
        <View style={styles.dislikeContainer}>
          <LikeDislike type="nope" color={COLORS.nope} />
        </View>
      </View>
    );
  };

  return (
    <Animated.View style={[styles.dogCard, dogStyle]} {...dragHandlers}>
      <ImageBackground style={styles.dogImage} source={{ uri: dog.image }}>
        {renderLikeDislike()}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{dog.name}</Text>
          <Text style={styles.bio}>{dog.bio}</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dogCard: {
    position: "absolute",
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    borderRadius: CARD.BORDERRADIUS,

    // shadowbox around card
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.5,
    elevation: 7,
  },
  dogImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  likeDislikeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 80,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: "-25deg" }],
  },
  dislikeContainer: {
    right: 25,
    transform: [{ rotate: "25deg" }],
  },
  userInfo: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  bio: {
    color: "white",
    fontSize: 20,
  },
});

export default Dog;
