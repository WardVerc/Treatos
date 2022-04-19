import { StyleSheet } from "react-native";
import { CARD } from "../../assets/constants";

export const styles = StyleSheet.create({
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
