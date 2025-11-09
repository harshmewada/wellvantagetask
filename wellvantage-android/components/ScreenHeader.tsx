import { useThemeColor } from "@/hooks/use-theme-color";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
interface ScreenHeaderProps {
  title: string;
  hasBack?: boolean;
}
const HEADER_HEIGHT = 70;

const ScreenHeader = ({ title, hasBack = true }: ScreenHeaderProps) => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  return (
    <View style={[styles.root, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity>
        <MaterialIcons color={"#fff"} size={30} name={"menu"} />
      </TouchableOpacity>
      <Text size="2xl" bold style={{ color: "#fff" }}>
        {title}
      </Text>
      <HStack space="md">
        <TouchableOpacity>
          <MaterialIcons color={"#fff"} size={20} name={"sync"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons color={"#fff"} size={20} name={"arrow-back"} />
        </TouchableOpacity>
      </HStack>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  root: {
    height: HEADER_HEIGHT,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});
