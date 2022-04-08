import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import useGetDogs from "./useGetDogs";
import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Dog from "./Dog";

type Props = NativeStackScreenProps<StackParamList, "Dogs">;

const Dogs: React.FC<Props> = ({ navigation }) => {
  const { isLoading, dogs } = useGetDogs();

  //   useEffect(() => {
  //     console.log(dogs);
  //   }, [dogs]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View style={styles.header}>
            <Text>Header</Text>
          </View>
          <FlatList
            data={dogs}
            renderItem={({ item }) => <Dog dog={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.bottomBorder}>
            <Text>Buttons</Text>
          </View>
        </>
      )}
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
});

export default Dogs;
