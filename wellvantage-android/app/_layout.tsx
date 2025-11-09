import ScreenHeader from "@/components/ScreenHeader";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "global.css";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar backgroundColor="red" style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerTitle: "Workout Management",
              header: ({ options, route, navigation, back }) => {
                let title =
                  (options.headerTitle as unknown as string) || route.name;

                return <ScreenHeader title={title} />;
              },
            }}
          />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
