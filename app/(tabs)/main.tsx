import { theme } from "@/provider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const tasks = [
        {
            id: 1,
            title: "UI Design",
            time: "09:00 AM - 11:00 AM",
            icon: null,
        },
        {
            id: 2,
            title: "Web Development",
            time: "11:30 AM - 12:30 PM",
            icon: null,
        },
        {
            id: 3,
            title: "Office Meeting",
            time: "02:00 PM - 03:00 PM",
            icon: null,
        },
        {
            id: 4,
            title: "Dashboard Design",
            time: "03:30 PM - 05:00 PM",
            icon: null,
        },
    ];

    return (
        <View className="flex-1 bg-white">
            {/* Header */}
            <SafeAreaView className="bg-white mb-2">
                <View className="flex-row justify-between items-center p-5">
                    <Ionicons name="grid-outline" size={28} color="#000" />
                    <Text className="text-xl font-bold">Homepage</Text>
                    <Ionicons name="notifications-outline" size={28} color="#000" />
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Progress Card */}
                <LinearGradient
                    colors={['#1c4c87', '#349eea']}
                    className="bg-blue-600 mx-5 p-5 shadow-lg"
                    start={{ x: 0.85, y: 0.15 }}
                    end={{ x: 0.15, y: 0.85 }}
                    style={{ flex: 1, borderRadius: 10 }}
                >
                    <View >
                        <Text className="text-white text-lg font-semibold">
                            Today’s progress summary
                        </Text>
                        <Text className="text-white mt-1">15 Tasks</Text>

                        {/* Avatars */}
                        <View className="flex-row mt-4 relative">
                            {[1, 2, 4, 5, 66, 9, 43, 65, 67, 3].map((i, index, arr) => (
                                arr.length - 1 !== index || arr.length == 1 ? <Image
                                    key={i}
                                    style={{ left: index * 20, marginLeft: index, zIndex: index }}
                                    source={{ uri: "https://randomuser.me/api/portraits/men/" + i + ".jpg" }}
                                    className={`w-10 h-10 rounded-full absolute `}
                                /> : <View style={{ left: index * 20, marginLeft: index, zIndex: index }} className="w-10 h-10 rounded-full bg-white right items-center justify-center -ml-3">
                                    <Ionicons name="add" size={20} color="#000" />
                                </View>
                            ))}
                            {false && <View style={{ left: 20, marginLeft: 5, zIndex: 2 }} className="w-10 h-10 rounded-full bg-white right items-center justify-center -ml-3">
                                <Ionicons name="add" size={20} color="#000" />
                            </View>}
                        </View>

                        {/* Progress Bar */}
                        <View className="mt-4 bg-white/30 h-3 rounded-full overflow-hidden">
                            <View className="bg-white h-3 w-[40%] rounded-full" />
                        </View>

                        <Text className="text-white mt-2">Progress 40%</Text>
                    </View>
                </LinearGradient>

                {/* Task Section */}
                <View className="flex-row justify-between items-center mx-5 mt-6">
                    <Text className="text-lg font-bold">Today’s Task</Text>
                    <Text style={{ color: theme.colors?.primary }} className="font-medium">See All</Text>
                </View>

                {/* Task List */}
                {tasks.map((task) => (
                    <Pressable
                        key={task.id}
                        onPress={() => router.push("/screens/TaskDetailScreen")}
                        className="bg-white mx-5 mt-4 p-4 rounded-2xl shadow-md flex-row items-center"
                    >
                        {/* <Image source={task.icon} className="w-12 h-12 rounded-xl mr-4" /> */}
                        <View className="flex-1">
                            <Text className="text-base font-semibold">{task.title}</Text>
                            <Text className="text-gray-500">{task.time}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#888" />
                    </Pressable>
                ))}
            </ScrollView>

            {/* Bottom Navigation */}

        </View >
    );
}
