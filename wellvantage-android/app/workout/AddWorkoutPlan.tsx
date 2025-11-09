import AddIcon from "@/components/AddIcon";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { VStack } from "@/components/ui/vstack";
import { useThemeColor } from "@/hooks/use-theme-color";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
const AddWorkoutplan = () => {
  const backgroundColor = useThemeColor({}, "background");
  const [text, setText] = useState(`Bench Press: www.benchpress.com
Eat Oats`);

  const handleChangeText = (value: string) => {
    setText(value);
  };
  return (
    <ScrollView>
      <Box className="px-5 py-10">
        <VStack space="2xl">
          <Box className="p-5 border-2 rounded-md border-gray-300 border-solid">
            <Text size="xl">Beginner’s Workout - 3 days</Text>
          </Box>
          <Box>
            <HStack className="items-center" space="sm">
              <Box
                className="rounded-l-full px-7 py-2"
                style={{ backgroundColor }}
              >
                <Text size="xl" style={{ color: "white" }}>
                  Day 1
                </Text>
              </Box>
              <Box className="flex-1 h-12 ml-1">
                <Input
                  variant="outline"
                  // size="lg"
                  className="h-full"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  style={{ borderColor: "#D9D9D9" }}
                >
                  <InputField placeholder="Chest" />
                </Input>
              </Box>
              <Feather name="trash-2" size={25} color="#D32F2F" />
            </HStack>
          </Box>
          <Center>
            <AddIcon />
          </Center>
          <Table className="w-full  min-w-full">
            <TableHeader>
              <TableRow className="border-b-0">
                <TableHead className="w-48"></TableHead>
                <TableHead>Sets</TableHead>
                <TableHead>Reps</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((el) => {
                return (
                  <TableRow key={el.id}>
                    <TableData className="w-48">{el.title}</TableData>
                    <TableData>
                      <Input>
                        <InputField type="text" value={el.sets} />
                      </Input>
                    </TableData>
                    <TableData>
                      <Input>
                        <InputField value={el.reps} />
                      </Input>
                    </TableData>
                    <TableData>
                      <HStack className="items-center" space="sm">
                        <Feather name="edit-3" size={25} />

                        <Feather name="trash-2" size={25} color="#D32F2F" />
                      </HStack>
                    </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Center>
            <AddIcon />
          </Center>
          <Box className="border-2 rounded-md border-gray-300 border-solid p-2">
            <Textarea
              className="border-0 focus:ring-0 focus:outline-none resize-none w-full"
              variant="default"
            >
              <TextareaInput value={text} onChangeText={handleChangeText} />
            </Textarea>
            <Box className="flex items-end">
              <Text className="text-yellow-500">
                {" "}
                {100 - text.length} Words remaining
              </Text>
            </Box>
          </Box>

          <Center>
            <Button
              variant="solid"
              size="lg"
              className="w-48 border-lg"
              style={{ backgroundColor }}
            >
              <ButtonText className="text-white font-medium">Submit</ButtonText>
            </Button>
          </Center>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default AddWorkoutplan;

const styles = StyleSheet.create({});

const tableData = [
  {
    id: 1,
    title: "Chest",
    sets: "10",
    reps: "5-8",
  },
  {
    id: 2,

    title: "Bench Press",
    sets: "8",
    reps: "3",
  },
  {
    id: 3,

    title: "Bench Press",
    sets: "8",
    reps: "5",
  },
  {
    id: 4,
    title: "Planks",
    sets: "3",
    reps: "30 secs",
  },
];
