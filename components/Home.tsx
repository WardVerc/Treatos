import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Dogs from "./Dogs";
import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<StackParamList, "Home">;

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome to Treatos!</Text>
      <Image
        style={styles.homeDog}
        source={{
          uri: "https://images.dog.ceo/breeds/appenzeller/n02107908_6008.jpg",
        }}
      />
      <Button
        title="Meet some dogs!"
        onPress={() => {
          navigation.navigate("Dogs");
        }}
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeDog: {
    width: 360,
    height: 300,
    marginBottom: 20,
  },
});
