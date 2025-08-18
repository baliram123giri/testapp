import { theme } from "@/provider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

type Props = {
    label?: string;
    onTimeChange?: (time: Date) => void;
    is24Hour?: boolean;
};

export default function TimePicker({ label, onTimeChange, is24Hour = false }: Props) {
    const [time, setTime] = useState(new Date()); // defaults to now
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setTime(selectedDate);
            onTimeChange?.(selectedDate);
        }
    };

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !is24Hour,
    }).format(time);

    return (
        <View>
            {label && <Text className="mb-2 font-bold text-lg">{label}</Text>}
            <Pressable
                onPress={() => setShow(true)}
                className="flex-row justify-between items-center gap-1 rounded-xl px-4 py-2"
            >
                <Text>{formattedTime}</Text>
                <Ionicons name="time-outline" size={20} color={theme.colors?.primary} />
            </Pressable>

            {show && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    is24Hour={is24Hour}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={onChange}
                />
            )}
        </View>
    );
}
