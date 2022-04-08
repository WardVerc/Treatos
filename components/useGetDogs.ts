import { useEffect, useState } from "react";
import { InteractionManager } from "react-native";
import jsonDogs from "../assets/dogs.json";
import smallDogs from "../assets/smalldogs.json";

export interface DogUrisType {
  message: string[];
}

export interface DogProps {
  id: number;
  name: string;
  bio: string;
  image: string;
}

const useGetDogs = () => {
  const [isLoading, setLoading] = useState(true);
  const [dogUris, setDogUris] = useState<DogUrisType>({ message: [] });
  const [dogs, setDogs] = useState<DogProps[]>();

  // const createDogs = (dogUris: DogUrisType): Dog[] => {
  //   const newDogs = jsonDogs.map((item, index) => ({
  //     ...item,
  //     image: dogUris.message[index],
  //   }));
  //   return newDogs;
  // };

  // const getDogImages = () => {
  //   setLoading(true);
  //   fetch(`https://dog.ceo/api/breeds/image/random/50`)
  //     .then((response) => response.json())
  //     .then((json) => setDogUris(json))
  //     .catch((error) => console.error(error))
  //     .then(() => setDogs(createDogs(dogUris)))
  //     .finally(() => setLoading(false));
  // };

  // useEffect(() => {
  //   getDogImages();
  // }, []);
  useEffect(() => {
    setLoading(true);
    setDogs(smallDogs);
    setLoading(false);
  }, []);

  return { isLoading, dogs };
};

export default useGetDogs;
