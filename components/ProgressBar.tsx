import { theme } from "@/provider/ThemeProvider";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

type Props = {
    progress: number; // 0–100
    color?: string;
    height?: number;
};

export default function ProgressBar({ progress, color = "#3b82f6", height = 12 }: Props) {
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const percentage = Math.min(Math.max(progress, 0), 100);
        Animated.timing(animatedWidth, {
            toValue: percentage,
            duration: 400,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    return (
        <View style={{ width: "100%", marginVertical: 10 }}>
            {/* Background bar */}
            <View
                style={{
                    width: "100%",
                    height,
                    backgroundColor: "#E5E7EB", // gray background
                    borderRadius: height / 2,
                }}
            >
                {/* Blue progress fill */}
                <Animated.View
                    style={{
                        height: "100%",
                        borderRadius: height / 2,
                        backgroundColor: theme.colors?.primary,
                        width: animatedWidth.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"],
                        }),
                    }}
                />
            </View>
        </View>
    );
}
