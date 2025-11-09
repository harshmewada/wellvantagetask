import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export const useSetScreenName = (title: string) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "In Progress",
    });
  }, [navigation]);
};
