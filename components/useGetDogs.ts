import { useEffect, useState } from "react";

export interface DogUrisType {
  message: string[];
}

const useGetDogs = () => {
  const [isLoading, setLoading] = useState(true);
  const [dogUris, setDogUris] = useState<DogUrisType>();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/20")
      .then((response) => response.json())
      .then((json) => setDogUris(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const whoLetDogOut = () => {
    return "Who let the dogs out?";
  };
  return { isLoading, dogUris, whoLetDogOut };
};

export default useGetDogs;
