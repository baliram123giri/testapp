import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TaskDetailsScreen() {
    return (
        <ScrollView className="flex-1 bg-white px-5 pt-10">
            {/* Header */}
            <SafeAreaView>
                <View className="flex-row items-center mb-5">
                    <Pressable>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </Pressable>
                    <Text className="flex-1 text-center text-lg font-semibold text-black">
                        Task Details
                    </Text>
                </View>
            </SafeAreaView>

            {/* Task Title */}
            <Text className="text-xl font-bold text-black mb-3">
                Web Development
            </Text>

            {/* Date & Time */}
            <View className="flex-row items-center mb-5">
                <View className="bg-blue-100 p-2 rounded-full mr-3">
                    <Ionicons name="calendar-outline" size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-600 text-base">
                    04 April, at 11:30 AM
                </Text>
            </View>

            {/* Progress */}
            <View className="mb-6">
                <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-700 font-medium">In Progress</Text>
                    <Text className="text-gray-700 font-medium">60%</Text>
                </View>
                <View className="h-2 bg-gray-200 rounded-full">
                    <View className="h-2 bg-blue-600 rounded-full w-[60%]" />
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
