import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";


export default function ScheduleScreen() {
    const [date, setDate] = useState(new Date());
    return (
        <View className="flex-1 bg-[#f9fbff]">
            {/* Header */}
            <View className="flex-row items-center justify-between px-5 pt-10 pb-4 bg-[#eaf3ff] rounded-b-3xl">
                <Pressable>
                    <Ionicons name="chevron-back" size={24} color="#0f172a" />
                </Pressable>
                <Text className="text-lg font-semibold text-[#0f172a]">Schedule</Text>
                <View className="w-6" />
            </View>

            {/* Calendar */}
            <View className="px-5 mt-4">
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={"default"}
                // onChange={onChange}
                />
            </View>

            {/* Task List */}
            <ScrollView className="mt-5 px-5 flex-1">
                <Text className="text-base font-semibold text-[#0f172a] mb-4">Added Task</Text>

                {/* Task 1 */}
                <View className="bg-orange-50 p-4 rounded-xl mb-3 flex-row items-center">
                    <View className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Ionicons name="search-outline" size={20} color="#ef4444" />
                    </View>
                    <View className="ml-3">
                        <Text className="text-base font-semibold text-[#0f172a]">Keyword Research</Text>
                        <Text className="text-sm text-orange-500">09:00 AM - 11:00 AM</Text>
                    </View>
                </View>

                {/* Task 2 */}
                <View className="bg-blue-50 p-4 rounded-xl mb-3 flex-row items-center">
                    <View className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Ionicons name="mail-outline" size={20} color="#3b82f6" />
                    </View>
                    <View className="ml-3">
                        <Text className="text-base font-semibold text-[#0f172a]">Email Campaign</Text>
                        <Text className="text-sm text-blue-500">03:00 PM - 05:00 PM</Text>
                    </View>
                </View>

                {/* Task 3 */}
                <View className="bg-purple-50 p-4 rounded-xl mb-3 flex-row items-center">
                    <View className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Ionicons name="people-outline" size={20} color="#8b5cf6" />
                    </View>
                    <View className="ml-3">
                        <Text className="text-base font-semibold text-[#0f172a]">Analytics Meeting</Text>
                        <Text className="text-sm text-purple-500">06:00 PM - 07:00 PM</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Schedule Button */}
            <View className="px-5 pb-6">
                <Pressable className="bg-blue-600 py-4 rounded-2xl flex items-center">
                    <Text className="text-white font-semibold text-lg">Schedule</Text>
                </Pressable>
            </View>
        </View>
    );
}
