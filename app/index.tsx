import { HP, WP } from "@/utils/utils";
import { useRouter } from "expo-router";

import { useCallback } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Contact() {
  const { push } = useRouter()
  const onPressHandler = useCallback(() => { push("/(tabs)/main") }, [])

  return (
    <SafeAreaView style={{ flex: 1, }} className="bg-white">
      <View style={{ flex: 1, justifyContent: "space-between", paddingBottom: HP("4%"), paddingLeft: WP("3%"), paddingRight: WP("3%") }} className="">
        {/* header  */}
        <View className="text-center flex justify-center content-center w-full">
          <Text variant="headlineMedium" className="font-semibold mx-auto">MyTasks</Text>
          <Text className="mx-auto">Organize your day, one task at a time.</Text>
        </View>
        {/* //button */}
        <Button onPress={onPressHandler} mode="contained" className="py-1">
          <Text variant="labelLarge"> Getting Started</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
