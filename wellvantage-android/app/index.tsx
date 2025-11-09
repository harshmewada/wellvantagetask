import Availibilty from "@/app/Availibility";
import Client from "@/app/Client";
import WorkOut from "@/app/workout";
import { Box } from "@/components/ui/box";
import { useThemeColor } from "@/hooks/use-theme-color";
import { colorScheme } from "nativewind";
import * as React from "react";
import { useWindowDimensions, View } from "react-native";
import {
  Route,
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

export default function Index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  colorScheme.set("light");
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Box className="mt-10 flex-1">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabbar}
        />
      </Box>
    </View>
  );
}

type MyRoute = Route & { extra?: string };

export function renderTabbar(props: TabBarProps<MyRoute>) {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: backgroundColor, height: 3 }}
      activeColor={backgroundColor}
      inactiveColor="#737373"
      style={{
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: "#737373",
        elevation: 0,
      }}
    />
  );
}
