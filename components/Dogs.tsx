import { useEffect, useState } from "react";
import { Image, View, Text, FlatList } from "react-native";
import useGetDogs from "./useGetDogs";
import { styles } from "./Dogs.styles";
import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<StackParamList, "Dogs">;

const Dogs: React.FC<Props> = ({ navigation }) => {
  const { isLoading, dogUris } = useGetDogs();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={dogUris?.message}
          renderItem={({ item }) => (
            <Image style={styles.dog} source={{ uri: item }} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Dogs;
