import { DogType } from "./useGetDogs";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import { ACTION_OFFSET, CARD, COLORS } from "../assets/constants";
import { useRef } from "react";
import LikeDislike from "./LikeDislike";
import { useCallback } from "react";

interface DogProps {
  dog: DogType;
  isFirst: boolean;
}

const Dog: React.FC<DogProps> = ({ dog, isFirst }) => {
  // hold x and y positions
  const swipe = useRef(new Animated.ValueXY()).current; //all values of X and Y
  const tiltSign = useRef(new Animated.Value(1)).current; //only hold 1 or -1 see onPanResponderMove

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    // on touch, hold the same x and y changes in swipe
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      // hold 1/-1 depending if touch is tophalf/bottomhalf
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
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

  // add rotation mapped to x position, 1/-1 depending on touch tophalf/bottomhalf
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // give the animated view the tranform (= swipe changes)
  const dogStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  const renderLikeDislike = useCallback(() => {
    return (
      <View style={styles.likeDislikeContainer}>
        <Animated.View style={[styles.likeContainer, { opacity: likeOpacity }]}>
          <LikeDislike type="like" color={COLORS.like} />
        </Animated.View>
        <Animated.View
          style={[styles.dislikeContainer, { opacity: nopeOpacity }]}
        >
          <LikeDislike type="nope" color={COLORS.nope} />
        </Animated.View>
      </View>
    );
  }, [likeOpacity, nopeOpacity]);

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
