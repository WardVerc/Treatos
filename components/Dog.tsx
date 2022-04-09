import { DogType } from "./useGetDogs";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

interface DogProps {
  dog: DogType;
}

const Dog: React.FC<DogProps> = ({ dog }) => {
  return (
    <ImageBackground style={styles.dog} source={{ uri: dog.image }}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{dog.name}</Text>
        <Text style={styles.bio}>{dog.bio}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    textShadowColor: "black",
    textShadowRadius: 0.5,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  bio: {
    color: "white",
    fontSize: 20,
    textShadowColor: "black",
    textShadowRadius: 0.5,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default Dog;
