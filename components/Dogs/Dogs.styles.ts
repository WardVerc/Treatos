import { StyleSheet } from "react-native";
import { CARD, HEADER } from "../../assets/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dogsContainer: {
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    borderRadius: CARD.BORDERRADIUS,
    alignItems: "center",
    justifyContent: "center",
  },
  nextDogContainer: {
    position: "absolute",
    zIndex: -3,
    marginTop: HEADER.HEIGHT,
  },
});
