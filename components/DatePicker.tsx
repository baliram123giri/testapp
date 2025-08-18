import { formatDate } from "@/utils/utils";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

type Props = {
    label?: string;
    onDateChange?: (date: Date) => void;
};

export default function DatePicker({ label, onDateChange }: Props) {
    const [date, setDate] = useState(new Date()); // defaults to today
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
            onDateChange?.(selectedDate);
        }
    };

    return (
        <View>
            {label && <Text className="mb-2 font-bold text-lg">{label}</Text>}
            <Pressable onPress={() => setShow(true)} className="flex-row justify-between items-center bg-gray-100 rounded-xl px-4 py-3 mt-2 mb-4">
                <Text >{formatDate(date)}</Text>
                <Ionicons name="calendar-outline" size={20} color="#2563eb" />
            </Pressable>

            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={onChange}
                />
            )}
        </View>
    );
}
