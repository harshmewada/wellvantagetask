import AddIcon from "@/components/AddIcon";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useThemeColor } from "@/hooks/use-theme-color";
import Feather from "@expo/vector-icons/Feather";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const selectOptions = [
  `Begginer's Workout - 3 Days`,
  `Begginer's Workout - 1 Day`,
];

const WorkOut = () => {
  const tintColor = useThemeColor({}, "tint");
  const textColor = useThemeColor({}, "text");
  const router = useRouter();
  const [selectedWorkout, setSelectedWorkout] = useState("");
  return (
    <Box className="mt-10 px-5">
      <VStack space="4xl">
        <View style={[styles.select, { backgroundColor: tintColor }]}>
          <Picker
            selectedValue={selectedWorkout}
            onValueChange={(itemValue) => setSelectedWorkout(itemValue)}
            placeholder="Custom Workout Plans"
          >
            <Picker.Item value=" " label="Custom Workout Plans" />
            {selectOptions.map((opt) => (
              <Picker.Item key={opt} label={opt} value={opt} />
            ))}
          </Picker>
        </View>
        <Box>
          <VStack space="md">
            {selectOptions.map((opt) => {
              return (
                <TouchableOpacity key={opt}>
                  <HStack
                    style={{
                      justifyContent: "space-between",
                      height: 40,
                      borderBottomColor: textColor,
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text size="lg">{opt}</Text>
                    <Feather name="trash-2" size={25} color="#D32F2F" />
                  </HStack>
                </TouchableOpacity>
              );
            })}
            <Center className="pt-10">
              <AddIcon
                onPress={() => router.navigate("/workout/AddWorkoutPlan")}
              />
            </Center>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default WorkOut;

const styles = StyleSheet.create({
  select: {
    elevation: 1,
  },
});
