import CustomHeaderProps from "@/components/CustomHeaderProps";
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
          <Stack.Screen name="create_task" options={{
            headerShown: true,
            title: "Create New Task",
            headerTitleAlign: "center",   // centers text
            headerStyle: { backgroundColor: "#fff" }, // white bg
            headerShadowVisible: false,   // remove bottom line if needed
            headerBackVisible: false,
            headerLeft: CustomHeaderProps,
          }} />
          <Stack.Screen name="screens/TaskDetailScreen" options={{
            headerShown: true,
            title: "Task Details",
            headerTitleAlign: "center",   // centers text
            headerStyle: { backgroundColor: "#fff" }, // white bg
            headerShadowVisible: false,   // remove bottom line if needed
            headerBackVisible: false,
            headerLeft: CustomHeaderProps,
          }} />
        </Stack>
      </SafeAreaProvider>
      <ToastManager />
    </ThemeProvider>

  );
}
