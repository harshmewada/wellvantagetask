import AddIcon from "@/components/AddIcon";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { ChevronDownIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useApi } from "@/hooks/useApi";
import Feather from "@expo/vector-icons/Feather";
import moment from "moment";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";
import { BOOKINGSTATUS, TrainerAvailibilty } from "./types/traineravailibility";
const Availibilty = () => {
  const backgroudColor = useThemeColor({}, "background");
  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState<DateType>();

  const {
    getData: getTodaySchedule,
    isLoading,
    error,
    data,
  } = useApi({
    url: `${process.env.EXPO_PUBLIC_API_URL}/schedule`,
    method: "get",
  });
  const onChangeDate = async (date: DateType) => {
    getTodaySchedule({
      params: {
        date: moment(date?.toString()).toDate().toISOString(),
      },
    });
    setSelected(date);
  };
  return (
    <ScrollView>
      <Box className="px-5 py-10">
        <VStack space="2xl">
          <Box className="p-2">
            <Center>
              <Text size="3xl" bold>
                Set Availability
              </Text>
            </Center>
          </Box>
          <Box className="p-5 border-2 rounded-lg border-gray-300 border-solid">
            <DateTimePicker
              mode="single"
              date={selected}
              onChange={({ date }) => onChangeDate(date)}
              styles={{
                ...defaultStyles,

                selected: {
                  backgroundColor: backgroudColor,
                  borderRadius: 100,
                },
                selected_label: { color: "white" },
                day: { padding: 0, height: 10, width: 45, margin: 0 },
                weekday: {
                  ...defaultStyles.weekday,
                  width: 55,
                },

                weekdays: {
                  borderColor: "#737373",
                  borderBottomWidth: 1,
                  height: 40,
                },
                header: {
                  borderColor: "#737373",
                  borderBottomWidth: 1,
                  height: 40,
                },
              }}
              minDate={moment().toDate()}
            />
          </Box>
          {selected && (
            <Box className="w-full">
              <VStack className="" space="lg">
                <Text bold size="2xl">
                  {moment(selected.toString()).format("DD MMM")}
                </Text>

                <VStack space="lg">
                  {isLoading ? (
                    <Center>
                      <Spinner color={backgroudColor} size={40} />
                    </Center>
                  ) : (
                    data?.map((avail: TrainerAvailibilty) => {
                      return (
                        <HStack
                          key={avail.id}
                          space="md"
                          className="items-center"
                        >
                          <Box className="h-12 ml-1">
                            <Input
                              variant="outline"
                              // size="lg"
                              className="h-full w-32"
                              isDisabled={false}
                              isInvalid={false}
                              isReadOnly={false}
                              style={{ borderColor: "#D9D9D9" }}
                            >
                              <InputField
                                placeholder="Chest"
                                value={avail.startTime}
                              />
                              <InputSlot className="pr-3">
                                <InputIcon as={ChevronDownIcon} />
                              </InputSlot>
                            </Input>
                          </Box>
                          <Box
                            style={{
                              // flex: 0.1,
                              width: 40,
                              height: 1,
                              backgroundColor: "#ccc",
                            }}
                          ></Box>
                          <Box className="h-12 ml-1">
                            <Input
                              variant="outline"
                              // size="lg"
                              className="h-full w-32"
                              isDisabled={false}
                              isInvalid={false}
                              isReadOnly={false}
                              style={{ borderColor: "#D9D9D9" }}
                            >
                              <InputField
                                placeholder="Chest"
                                value={avail.endTime}
                              />
                              <InputSlot className="pr-3">
                                <InputIcon as={ChevronDownIcon} />
                              </InputSlot>
                            </Input>
                          </Box>

                          <TouchableOpacity>
                            <Button
                              variant="solid"
                              className={
                                avail.status === BOOKINGSTATUS.OPEN
                                  ? "bg-green-300"
                                  : "bg-yellow-300"
                              }
                              size="sm"
                            >
                              <ButtonText
                                className={
                                  avail.status === BOOKINGSTATUS.OPEN
                                    ? "text-green-700"
                                    : "text-yellow-700"
                                }
                              >
                                {avail.status}
                              </ButtonText>
                            </Button>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Feather name="trash-2" size={25} color="#D32F2F" />
                          </TouchableOpacity>
                        </HStack>
                      );
                    })
                  )}

                  <Center>
                    <AddIcon />
                  </Center>
                </VStack>
              </VStack>
            </Box>
          )}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Availibilty;
