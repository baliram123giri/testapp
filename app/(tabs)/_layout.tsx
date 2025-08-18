import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarStyle: { display: "none", backgroundColor: "white" }, // hide default tab bar
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen name="main" />

            <Tabs.Screen name="ProfileScreen" />
            <Tabs.Screen name="UpcomingTasks" />
        </Tabs>
    );
}

function CustomTabBar({ state, navigation }: any) {
    return (
        <View style={{ height: 100 }} className="flex-row bg-white rounded-t-3xl shadow-lg px-10 py-3 justify-between items-center">
            {/* Home */}
            <Pressable onPress={() => navigation.navigate("main")}>
                <Ionicons
                    name="home-outline"
                    size={26}
                    color={state.index === 0 ? "#2563eb" : "#000"}
                />
            </Pressable>

            {/* Calendar */}
            <Pressable onPress={() => router.push("/UpcommingTask")}>
                <Ionicons
                    name="calendar-outline"
                    size={26}
                    color={state.index === 2 ? "#2563eb" : "#000"}
                />
            </Pressable>

            {/* Floating Add Button */}
            <Pressable
                onPress={() => navigation.navigate("create_task")}
                className="bg-blue-600 p-4 rounded-full -mt-14 shadow-lg"
            >
                <Ionicons name="add" size={28} color="#fff" />
            </Pressable>

            {/* Messages */}
            <Pressable onPress={() => router.push("/screens/InboxScreen")}>
                <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={26}
                // color={state.index === 1 ? "#2563eb" : "#000"}
                />
            </Pressable>

            {/* Profile */}
            <Pressable onPress={() => router.push("/ProfileScreen")}>
                <Ionicons
                    name="person-outline"
                    size={26}
                    color={state.index === 1 ? "#2563eb" : "#000"}
                />
            </Pressable>
        </View>
    );
}
