import ScreenHeader from "@/components/ScreenHeader";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Workout Mangement",

          header: ({ options, route, navigation, back }) => {
            let title =
              (options.headerTitle as unknown as string) || route.name;

            return <ScreenHeader title={title} />;
          },
        }}
      />
      <Stack.Screen
        name="AddWorkoutPlan"
        options={{
          headerTitle: "Add Workout Plan",
          header: ({ options, route, navigation, back }) => {
            let title =
              (options.headerTitle as unknown as string) || route.name;

            return <ScreenHeader title={title} />;
          },
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
