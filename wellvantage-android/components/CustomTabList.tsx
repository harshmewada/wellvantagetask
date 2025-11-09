import Availibilty from "@/app/Availibility";
import Client from "@/app/Client";
import WorkOut from "@/app/workout";
import * as React from "react";
import { useWindowDimensions } from "react-native";
import {
  Route as RNTRoute,
  SceneMap,
  TabBar,
  TabBarProps,
  TabView,
} from "react-native-tab-view";

const renderScene = SceneMap({
  first: WorkOut,
  second: Client,
  third: Availibilty,
});

const routes = [
  { key: "first", title: "Workout" },
  { key: "second", title: "Client" },
  { key: "third", title: "Availibilty" },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabbar}
    />
  );
}

type MyRoute = RNTRoute & { extra?: string };

export function renderTabbar(props: TabBarProps<MyRoute>) {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: "pink" }}
    />
  );
}
// import { TabListProps } from "expo-router/ui";
// import React, { PropsWithChildren } from "react";
// import { StyleSheet } from "react-native";
// import { Box } from "./ui/box";
// import { Divider } from "./ui/divider";
// import { HStack } from "./ui/hstack";

// interface CustomTabListProps extends PropsWithChildren, TabListProps {}

// const CustomTabList = ({ children }: CustomTabListProps) => {
//   return (
//     <Box className="px-5 h-20">
//       <HStack style={{ justifyContent: "space-between" }}>{children}</HStack>
//       <Divider className="my-5 bg-indigo-500" />
//     </Box>
//   );
// };

// export default CustomTabList;

// const styles = StyleSheet.create({});
