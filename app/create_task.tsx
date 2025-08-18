import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import { theme } from "@/provider/ThemeProvider";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";


export default function CreateTaskScreen() {
    const [category, setCategory] = useState("Design");
    const [date, setDate] = useState("05 April, Tuesday");
    const [startTime, setStartTime] = useState("09:00 AM");
    const [endTime, setEndTime] = useState("11:00 AM");

    const categories = ["Design", "Development", "Research"];

    return (
        <ScrollView className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-white mx-5 mt-2 p-5 rounded-2xl shadow-md">
                {/* Task Name */}
                <Text className="text-base font-semibold text-gray-700">Task Name</Text>
                <TextInput
                    placeholder="UI Design"
                    className="bg-white border border-slate-50 shadow-md rounded-xl px-4 py-3 mt-2 mb-4 text-base text-black"
                />

                {/* Category */}
                <Text className="text-base font-semibold text-gray-700">Category</Text>
                <ScrollView horizontal className="flex-row mt-2 mb-4">
                    {categories.map((c) => (
                        <Pressable
                            key={c}
                            onPress={() => setCategory(c)}
                            style={{ backgroundColor: category === c ? theme.colors?.primary : "white" }}
                            className={`px-5 py-4 rounded-xl mr-3 ${category === c ? "" : "border border-slate-50 shadow-sm"
                                }`}
                        >
                            <Text
                                className={`font-medium ${category === c ? "text-white" : "text-gray-600"
                                    }`}
                            >
                                {c}
                            </Text>
                        </Pressable>
                    ))}
                </ScrollView>

                {/* Date & Time */}
                <Text className="text-base font-semibold text-gray-700">Date & Time</Text>
                <DatePicker />

                <View className="flex-row justify-between">
                    <View className="flex-1 mr-2">
                        <Text className="text-base font-semibold text-gray-700">
                            Start time
                        </Text>
                        <Pressable className="flex-row justify-between items-center py-1  border-slate-50 shadow-sm bg-white border rounded-xl px-4 mt-2">
                            <TimePicker
                            />
                        </Pressable>
                    </View>
                    <View className="flex-1 ml-2">
                        <Text className="text-base font-semibold text-gray-700">
                            End time
                        </Text>
                        <Pressable className="flex-row justify-between items-center py-1  border-slate-50 shadow-sm bg-white border rounded-xl px-4 mt-2">
                            <TimePicker
                            />
                        </Pressable>
                    </View>
                </View>

                {/* Description */}
                <Text className="text-base font-semibold text-gray-700 mt-5">
                    Description
                </Text>
                <TextInput
                    placeholder="Research design paths. There are many career paths..."
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    className=" border-slate-50 shadow-sm bg-white border rounded-xl px-4 py-3 mt-2 mb-6 text-base text-gray-700"
                />

                {/* Create Task Button */}
                <Pressable style={{ backgroundColor: theme.colors?.primary }} className="py-4 rounded-xl items-center shadow-lg">
                    <Text className="text-white  font-semibold text-base">
                        Create Task
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}
