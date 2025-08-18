import ProgressBar from "@/components/ProgressBar";
import { theme } from "@/provider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";

export default function TaskDetailsScreen() {
    return (
        <ScrollView className="flex-1 bg-white px-5 pt-10">
            {/* Task Title */}
            <Text className="text-xl font-bold text-black mb-3">
                Web Development
            </Text>

            {/* Date & Time */}
            <View className="flex-row items-center mb-5">
                <View className="bg-blue-100 h-10 w-10 flex justify-center flex-row items-center p-2 rounded-full mr-3">
                    <Ionicons name="calendar-outline" size={20} color={theme.colors?.primary} />
                </View>
                <Text className="text-gray-600 text-base">
                    04 April, at 11:30 AM
                </Text>
            </View>

            {/* Progress */}
            <View className="mb-6">
                <View className="flex justify-between mb-2">
                    <View className="flex-row justify-between items-center">    <Text className="text-black font-semibold">In Progress</Text>
                        {/* Percentage text (optional) */}
                        <Text style={{ marginTop: 6, textAlign: "right", fontWeight: "500" }}>
                            {60}%
                        </Text></View>
                    <ProgressBar progress={60} />

                </View>

            </View>

            {/* Overview */}
            <View className="mb-6">
                <Text className="text-lg font-semibold text-black mb-2">Overview</Text>
                <Text className="text-gray-600 leading-6">
                    The project will incorporate several popular web development technologies.
                    Much of the time, the tools and programming languages taught in a classroom
                    setting are learned and practiced in isolation from one another …
                    <Text className="text-blue-600 font-medium">Read More</Text>
                </Text>
            </View>

            {/* Members */}
            <View className="mb-6">
                <Text className="text-lg font-semibold text-black mb-3">Members</Text>
                <View className="flex-row">
                    {[1, 2, 3, 4].map((i) => (
                        <Image
                            key={i}
                            source={{ uri: "https://randomuser.me/api/portraits/men/" + i + ".jpg" }}
                            className="w-10 h-10 rounded-full mr-2"
                        />
                    ))}
                    <View className="w-10 h-10 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                        <Ionicons name="add" size={20} color="#2563eb" />
                    </View>
                </View>
            </View>

            {/* Tasks */}
            <View className="mb-6">
                <Text className="text-lg font-semibold text-black mb-3">Tasks</Text>
                <View className="bg-blue-50 p-4 rounded-xl flex-row justify-between items-center">
                    <View>
                        <Text className="text-base font-semibold text-black">Introduction</Text>
                        <Text className="text-sm text-gray-600">Jane Cooper</Text>
                    </View>
                    <Ionicons name="checkmark-circle" size={24} color="#2563eb" />
                </View>
            </View>
        </ScrollView>
    );
}
