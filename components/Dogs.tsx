import { useEffect, useState } from "react";
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
            renderItem={({ item }) => (
              <View style={styles.dogCard}>
                <ImageBackground
                  style={styles.dog}
                  source={{ uri: item.image }}
                >
                  <View style={styles.userInfo}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.bio}>{item.bio}</Text>
                  </View>
                </ImageBackground>
              </View>
            )}
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
  dogCard: {
    width: 350,
    height: 450,
    marginBottom: 50,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  dog: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  userInfo: {
    padding: 10,
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

export default Dogs;
