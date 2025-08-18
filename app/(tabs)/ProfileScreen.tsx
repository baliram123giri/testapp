import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, ScrollView, Switch, Text, View } from "react-native";

export default function ProfileScreen() {
    const [locationEnabled, setLocationEnabled] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);

    return (
        <View className="flex-1 bg-[#f9fbff]">
            {/* Header */}
            <View className="flex-row items-center justify-between px-5 pt-10 pb-4 bg-[#eaf3ff] rounded-b-3xl">
                <Ionicons name="grid-outline" size={22} color="#0f172a" />
                <Text className="text-lg font-semibold text-[#0f172a]">Profile</Text>
                <View className="w-6" />
            </View>

            <ScrollView className="mt-6 px-5">
                {/* Profile Photo + Name */}
                <View className="items-center mb-8">
                    <View className="relative">
                        <Image
                            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                            className="w-28 h-28 rounded-full border-4 border-white shadow-md"
                        />
                        <Pressable className="absolute bottom-0 right-0 bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                            <Ionicons name="pencil" size={16} color="#fff" />
                        </Pressable>
                    </View>
                    <Text className="mt-4 text-lg font-semibold text-[#0f172a]">
                        Ronald Richards
                    </Text>
                </View>

                {/* Options */}
                <View className="space-y-6">
                    {/* Edit Profile */}
                    <Pressable className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="create-outline" size={22} color="#0ea5e9" />
                            <Text className="ml-3 text-[#0f172a] text-base">Edit Profile</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                    </Pressable>

                    {/* Change Password */}
                    <Pressable className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="lock-closed-outline" size={22} color="#10b981" />
                            <Text className="ml-3 text-[#0f172a] text-base">
                                Change Password
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                    </Pressable>

                    {/* Turn on Location */}
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="location-outline" size={22} color="#3b82f6" />
                            <Text className="ml-3 text-[#0f172a] text-base">
                                Turn on Location
                            </Text>
                        </View>
                        <Switch
                            value={locationEnabled}
                            onValueChange={setLocationEnabled}
                            trackColor={{ false: "#cbd5e1", true: "#3b82f6" }}
                            thumbColor="#fff"
                        />
                    </View>

                    {/* Email Notifications */}
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="mail-outline" size={22} color="#f59e0b" />
                            <Text className="ml-3 text-[#0f172a] text-base">
                                Email Notifications
                            </Text>
                        </View>
                        <Switch
                            value={emailNotifications}
                            onValueChange={setEmailNotifications}
                            trackColor={{ false: "#cbd5e1", true: "#3b82f6" }}
                            thumbColor="#fff"
                        />
                    </View>

                    {/* Settings */}
                    <Pressable className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="settings-outline" size={22} color="#f97316" />
                            <Text className="ml-3 text-[#0f172a] text-base">Settings</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                    </Pressable>

                    {/* Logout */}
                    <Pressable className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="log-out-outline" size={22} color="#ef4444" />
                            <Text className="ml-3 text-[#0f172a] text-base">Logout</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                    </Pressable>
                </View>
            </ScrollView>


        </View>
    );
}
