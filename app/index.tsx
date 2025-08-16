import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Contact() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <View style={{ flex: 1 }} className="">
        {/* header  */}
        <View className="text-center flex justify-center content-center w-full">
          <Text variant="headlineMedium" className="font-semibold mx-auto">MyTasks</Text>
          <Text className="mx-auto">Organize your day, one task at a time.</Text>
        </View>
        {/* //button */}
        
      </View>
    </SafeAreaView>
  );
}
