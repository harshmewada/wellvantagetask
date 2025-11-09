import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";

interface ClientCardProps {
  name: string;
  workout: string;
  ptPlanName: string;
  sessionRemaining: string;
  nextSessionDate: string;
  backgroundColor: string;
}

const ClientCard = ({
  name,
  workout,
  ptPlanName,
  sessionRemaining,
  nextSessionDate,
  backgroundColor,
}: ClientCardProps) => {
  return (
    <Box style={[{ backgroundColor }]} className="p-5 rounded-md">
      <HStack space="md">
        <MaterialIcons name="account-circle" size={40} color={"#BBBBBB"} />
        <VStack space="md">
          <RenderData title="Name" value={name} />
          <RenderData title="PT Plan Name" value={ptPlanName} />
          <RenderData title="Next Session Date" value={nextSessionDate} />
        </VStack>
        <VStack space="md">
          <RenderData
            title="Workout Assigned"
            value={workout}
            children={<Feather name="edit-3" size={20} color={"#737373"} />}
          />
          <RenderData title="Sessions Remaining" value={sessionRemaining} />
          <TouchableOpacity>
            <Ionicons name="logo-whatsapp" size={30} color={"#1FAF38"} />
          </TouchableOpacity>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ClientCard;

const styles = StyleSheet.create({});
interface RenderDataProps {
  title: string;
  value: string;
  children?: ReactNode | undefined;
}
const RenderData = ({ title, value, children }: RenderDataProps) => {
  return (
    <VStack>
      <Text bold>{title}</Text>
      <HStack space="sm">
        <Text>{value}</Text>
        {children}
      </HStack>
    </VStack>
  );
};
