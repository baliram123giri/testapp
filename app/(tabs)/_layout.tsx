import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (

        <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: true }} >
            <Tabs.Screen
                name="main"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="create_task"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="calendar-month" size={size} color={color} />
                    )
                }}
            />

        </Tabs>

    );
}
