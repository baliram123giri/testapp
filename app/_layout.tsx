import ThemeProvider from "@/provider/ThemeProvider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native/components/ToastManager";
import "../global.css";
export default function Layout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="addTaskScreen" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
       <ToastManager />
    </ThemeProvider>

  );
}
