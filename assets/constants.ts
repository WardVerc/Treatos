import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const ACTION_OFFSET = 100;

export const SCREEN = {
  WIDTH: width,
  HEIGHT: height,
};

export const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.7,
  BORDERRADIUS: 10,
  OUT_OF_SCREEN: width + width / 2,
};

export const COLORS = {
  like: "#00eda6",
  nope: "#ff006f",
};
