import { StyleSheet } from "react-native";
import { SCREEN } from "../../assets/constants";

export const styles = StyleSheet.create({
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
