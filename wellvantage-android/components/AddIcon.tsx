import { useThemeColor } from "@/hooks/use-theme-color";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Box } from "./ui/box";

const AddIcon = (props: TouchableOpacityProps) => {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <TouchableOpacity {...props}>
      <Box
        className=" h-12 w-12 rounded-full flex  justify-center items-center"
        style={[{ backgroundColor }]}
      >
        <Ionicons name="add" color="white" size={25} />
      </Box>
    </TouchableOpacity>
  );
};

export default AddIcon;
