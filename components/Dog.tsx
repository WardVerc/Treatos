import { DogProps } from "./useGetDogs";
import {
  ImageBackground,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

interface Props {
  dog: DogProps;
}

const Dog: React.FC<Props> = ({ dog }) => {
  return (
    <View style={styles.dogCard}>
      <ImageBackground style={styles.dog} source={{ uri: dog.image }}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{dog.name}</Text>
          <Text style={styles.bio}>{dog.bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  dogCard: {
    width: 350,
    height: 450,
    margin: 20,
    marginBottom: 50,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.5,
    elevation: 10,
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
