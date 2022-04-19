import { useEffect, useState } from "react";
import axios from "axios";
import jsonDogs from "../assets/dogs.json";

export interface DogUrisType {
  message: string[];
}

export interface DogType {
  id: number;
  name: string;
  bio: string;
  image: string;
}

const useGetDogs = () => {
  const [isLoading, setLoading] = useState(true);
  const [dogs, setDogs] = useState<DogType[]>([]);

  const createDogs = (dogUris: DogUrisType): DogType[] => {
    const newDogs = jsonDogs.map((item, index) => ({
      ...item,
      image: dogUris.message[index],
    }));
    return newDogs;
  };

  const getDogs = async () => {
    setLoading(true);
    const result = await axios.get<DogUrisType>(
      `https://dog.ceo/api/breeds/image/random/12`
    );
    setDogs(createDogs(result.data));
    setLoading(false);
  };

  useEffect(() => {
    setDogs([]);
    getDogs();
  }, []);

  return { isLoading, dogs };
};

export default useGetDogs;
