import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

const tasks = [
    {
        id: 1,
        title: "UI Design Presentation",
        time: "09:00 AM - 11:00 AM",
        bg: "bg-blue-100",
        text: "text-blue-700",
        icon: "easel-outline",
    },
    {
        id: 2,
        title: "Web Page Design",
        time: "11:30 AM - 01:00 PM",
        bg: "bg-orange-100",
        text: "text-orange-700",
        icon: "code-slash-outline",
    },
    {
        id: 3,
        title: "Meet & Collaboration",
        time: "02:30 PM - 04:00 PM",
        bg: "bg-purple-100",
        text: "text-purple-700",
        icon: "people-outline",
    },
    {
        id: 4,
        title: "Group Research",
        time: "04:30 PM - 06:00 PM",
        bg: "bg-green-100",
        text: "text-green-700",
        icon: "book-outline",
    },
];

export default function UpcomingTasksScreen() {
    return (
        <ScrollView className="flex-1 bg-white px-5 pt-10">
            {/* Header */}
            <View className="flex-row items-center mb-6">
                <Ionicons name="grid-outline" size={22} color="#000" />
                <Text className="flex-1 text-center text-lg font-semibold text-black">
                    Upcoming Tasks
                </Text>
            </View>

            {/* Today Date */}
            <View className="mb-6">
                <Text className="text-gray-500">Today</Text>
                <Text className="text-xl font-bold text-black">Monday, 04 Apr</Text>
            </View>

            {/* Date Selector */}
            <View className="flex-row justify-between mb-6">
                {["03", "04", "05", "06", "07", "08", "09"].map((day, idx) => {
                    const isActive = day === "07";
                    return (
                        <View
                            key={idx}
                            className={`items-center ${isActive ? "text-blue-600" : ""}`}
                        >
                            <Text className="text-gray-500 text-sm">
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][idx]}
                            </Text>
                            <View
                                className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center ${isActive ? "bg-blue-600" : ""
                                    }`}
                            >
                                <Text
                                    className={`${isActive ? "text-white font-semibold" : "text-black"
                                        }`}
                                >
                                    {day}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            {/* Schedule Section */}
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-semibold text-black">Schedule</Text>
                <Pressable onPress={()=>router.push("/screens/ScheduleScreen")} className="bg-blue-600 px-4 py-2 rounded-full">
                    <Text className="text-white text-sm font-medium">+ Add New</Text>
                </Pressable>
            </View>

            {/* Task Cards */}
            <View className="space-y-4">
                {tasks.map((task) => (
                    <View
                        key={task.id}
                        className={`p-4 rounded-xl flex-row items-center ${task.bg}`}
                    >
                        <Ionicons
                            name={task.icon as any}
                            size={28}
                            color={task.text.includes("blue") ? "#2563eb" :
                                task.text.includes("orange") ? "#ea580c" :
                                    task.text.includes("purple") ? "#9333ea" : "#16a34a"}
                            style={{ marginRight: 12 }}
                        />
                        <View>
                            <Text className="text-base font-semibold text-black">
                                {task.title}
                            </Text>
                            <Text className={`${task.text} text-sm font-medium`}>
                                {task.time}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
