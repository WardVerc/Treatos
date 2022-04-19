import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import useGetDogs, { DogType } from "../../hooks/useGetDogs";
import { StackParamList } from "../../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Dog from "../Dog/Dog";
import smallDogs from "../../assets/smalldogs.json";
import Footer from "../Footer/Footer";
import Header from "../Header";
import { styles } from "./Dogs.styles";

type Props = NativeStackScreenProps<StackParamList, "Dogs">;

const Dogs: React.FC<Props> = ({ navigation }) => {
  const { isLoading, dogs: loadedDogs } = useGetDogs();
  const [dogs, setDogs] = useState<DogType[]>([]);

  const currentDog = dogs[0];
  const nextDog = dogs[1];

  useEffect(() => {
    if (!isLoading && loadedDogs) {
      setDogs(loadedDogs);
    }
    console.log(isLoading + " " + loadedDogs);
  }, [loadedDogs, isLoading]);

  const removeTopCard = useCallback(() => {
    setDogs((prevstate) => prevstate.slice(1));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.dogsContainer}>
        {currentDog && (
          <Dog
            dog={currentDog}
            key={currentDog.id}
            removeTopCard={removeTopCard}
          />
        )}
      </View>
      <View style={[styles.dogsContainer, styles.nextDogContainer]}>
        {nextDog && (
          <Dog dog={nextDog} key={nextDog.id} removeTopCard={removeTopCard} />
        )}
      </View>

      <Footer />
    </View>
  );
};

export default Dogs;
