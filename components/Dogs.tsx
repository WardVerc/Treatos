import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { DogType } from "./useGetDogs";
import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Dog from "./Dog";
import smallDogs from "../assets/smalldogs.json";
import { CARD, SCREEN } from "../assets/constants";

type Props = NativeStackScreenProps<StackParamList, "Dogs">;

const Dogs: React.FC<Props> = ({ navigation }) => {
  const [dogs, setDogs] = useState<DogType[]>(smallDogs);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.dogsContainer}>
        {dogs
          .map((dog, index) => {
            const isFirst = index === 0;
            return <Dog dog={dog} isFirst={isFirst} key={dog.id} />;
          })
          .reverse()}
      </View>

      <View style={styles.buttons}>
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
    justifyContent: "space-between",
  },
  header: {
    width: SCREEN.WIDTH,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    zIndex: 3,
  },
  dogsContainer: {
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    borderRadius: CARD.BORDERRADIUS,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: SCREEN.WIDTH,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    zIndex: 3,
  },
});

export default Dogs;
