import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

const todayMessages = [
    {
        id: 1,
        name: "Jane Cooper",
        message: "Tell me about your project.",
        time: "10 minutes ago",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 2,
        name: "Wade Warren",
        message: "Let's schedule a meeting.",
        time: "11:45 am",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        id: 3,
        name: "Esther Howard",
        message: "Last project is complete.",
        time: "10:15 am",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
];

const yesterdayMessages = [
    {
        id: 4,
        name: "Robert Fox",
        message: "I'll research this topic.",
        time: "12:15 pm",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    {
        id: 5,
        name: "Jenny Wilson",
        message: "Well done. Good Job.",
        time: "11:35 am",
        avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
        id: 6,
        name: "Jacob Jones",
        message: "New task is ready.",
        time: "09:10 am",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
        id: 7,
        name: "Floyd Miles",
        message: "Let’s check the files.",
        time: "08:05 am",
        avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    },
];

export default function InboxScreen() {
    return (
        <View className="flex-1 bg-[#f9fbff]">
            {/* Header */}
            <View className="flex-row items-center justify-between px-5 pt-10 pb-4 bg-[#eaf3ff] rounded-b-3xl">
                <Ionicons name="grid-outline" size={22} color="#0f172a" />
                <Text className="text-lg font-semibold text-[#0f172a]">Inbox</Text>
                <Ionicons name="options-outline" size={22} color="#0f172a" />
            </View>

            {/* Search Bar */}
            <View className="px-5 mt-4">
                <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <Ionicons name="search-outline" size={20} color="#64748b" />
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#94a3b8"
                        className="ml-2 flex-1 text-[#0f172a]"
                    />
                </View>
            </View>

            {/* Messages */}
            <ScrollView className="mt-6 px-5">
                {/* Today */}
                <Text className="text-gray-500 mb-3">Today</Text>
                {todayMessages.map((msg) => (
                    <View
                        key={msg.id}
                        className="flex-row items-center justify-between mb-5"
                    >
                        <View className="flex-row items-center">
                            <Image
                                source={{ uri: msg.avatar }}
                                className="w-12 h-12 rounded-full"
                            />
                            <View className="ml-3">
                                <Text className="font-semibold text-[#0f172a]">{msg.name}</Text>
                                <Text className="text-gray-500 text-sm">{msg.message}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-400 text-xs">{msg.time}</Text>
                    </View>
                ))}

                {/* Yesterday */}
                <Text className="text-gray-500 mb-3">Yesterday</Text>
                {yesterdayMessages.map((msg) => (
                    <View
                        key={msg.id}
                        className="flex-row items-center justify-between mb-5"
                    >
                        <View className="flex-row items-center">
                            <Image
                                source={{ uri: msg.avatar }}
                                className="w-12 h-12 rounded-full"
                            />
                            <View className="ml-3">
                                <Text className="font-semibold text-[#0f172a]">{msg.name}</Text>
                                <Text className="text-gray-500 text-sm">{msg.message}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-400 text-xs">{msg.time}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
