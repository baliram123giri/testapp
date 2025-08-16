// components/CustomCalendar.tsx
import clsx from "clsx";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CustomCalendar({ onChange }: { onChange?: (value: string) => void }) {
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const startOfMonth = currentMonth.startOf("month");
    const daysInMonth = currentMonth.daysInMonth();

    const daysArray = [];
    for (let i = 0; i < startOfMonth.day(); i++) {
        daysArray.push(null); // empty slots for alignment
    }
    for (let d = 1; d <= daysInMonth; d++) {
        daysArray.push(currentMonth.date(d));
    }

    const goToPrevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
    const goToNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

    return (
        <View className="p-4 bg-white rounded-2xl">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-4">
                <TouchableOpacity onPress={goToPrevMonth}>
                    <Text style={{ fontSize: 20 }} className=" font-bold ">{"<"}</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-800">
                    {currentMonth.format("MMMM YYYY")}
                </Text>
                <TouchableOpacity onPress={goToNextMonth}>
                    <Text style={{ fontSize: 20 }} className="text-lg font-bold ">{">"}</Text>
                </TouchableOpacity>
            </View>

            {/* Days of Week */}
            <View className="flex-row justify-between mb-2">
                {daysOfWeek.map((day) => (
                    <Text style={{ fontWeight: 700 }} key={day} className="text-black text-center flex-1">
                        {day[0]}
                    </Text>
                ))}
            </View>

            {/* Calendar Grid */}
            <View className="flex-row flex-wrap">
                {daysArray.map((day, index) => {
                    const isSelected = day && selectedDate.isSame(day, "day");
                    return (
                        <TouchableOpacity
                            key={index}
                            className="w-[14.28%] items-center justify-center py-2"
                            disabled={!day}
                            onPress={() => {
                                if (day && onChange) {
                                    onChange(day.format("YYYY-MM-DD"));
                                }
                                if (day) {
                                    setSelectedDate(day);
                                }
                            }}
                        >
                            <Text
                                className={clsx(
                                    "flex w-8 h-8 pt-1 items-center content-center justify-center text-center text-base rounded-full",
                                    day
                                        ? isSelected
                                            ? "bg-[#3d99f5] text-white"
                                            : "text-gray-800"
                                        : "text-transparent"
                                )}
                            >
                                {day ? day.date() : ""}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Selected Date */}
            {/* <Text className="mt-4 text-center text-[#3d99f5] font-semibold">
                📅 Selected: {selectedDate.format("YYYY-MM-DD")}
            </Text> */}
        </View>
    );
}
