import ThemeProvider from "@/provider/ThemeProvider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
export default function Layout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>

  );
}
