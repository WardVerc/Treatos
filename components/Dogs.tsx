import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DogType } from "./useGetDogs";
import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Dog from "./Dog";
import smallDogs from "../assets/smalldogs.json";
import { CARD } from "../assets/constants";
import Footer from "./Footer";
import Header from "./Header";

type Props = NativeStackScreenProps<StackParamList, "Dogs">;

const Dogs: React.FC<Props> = ({ navigation }) => {
  const [dogs, setDogs] = useState<DogType[]>(smallDogs);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.dogsContainer}>
        {dogs
          .map((dog, index) => {
            const isFirst = index === 0;
            return <Dog dog={dog} isFirst={isFirst} key={dog.id} />;
          })
          .reverse()}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Dogs;
