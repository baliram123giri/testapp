import CustomCalendar from "@/components/CustomCalendar";
import CustomCam from "@/components/CustomCam";
import { taskContext } from "@/provider/ContextProvider";
import { TaskList } from "@/utils/app.types";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from 'toastify-react-native';
import ToastManager from "toastify-react-native/components/ToastManager";

export default function AddTaskScreen() {

    const [values, setValues] = useState<TaskList>({ description: "", dueDate: "", priority: "", title: "" })
    // Custom Modal states
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const { selectedDate, setSelectedDate, setTaskList } = useContext(taskContext)

    const onTaskHandler = () => {
        Toast.success('Task Added Successfully!')
        setTaskList((prev: TaskList[]) => [values, ...prev])
        router.back()
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled" className="flex-1 bg-white p-4">
            <ToastManager />
            {/* Header */}
            <SafeAreaView>
                <Text className="text-xl font-bold mb-4">Add Task</Text>
            </SafeAreaView>

            {/* Task Title */}
            <TextInput
                onChangeText={(value: string) => setValues({ ...values, title: value })}
                value={values?.title ?? ""}
                placeholder="Task Title"
                placeholderTextColor="#3d99f5"
                className="bg-blue-50 rounded-lg px-4 py-3 mb-3 text-base text-black"
            />

            {/* Description */}
            <TextInput
                placeholder="Description"
                onChangeText={(value: string) => setValues({ ...values, description: value })}
                value={values?.description ?? ""}
                placeholderTextColor="#3d99f5"
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
                className="bg-blue-50 rounded-lg px-4 py-3 mb-3 text-base text-black"
            />

            {/* Due Date */}
            <Text className="text-base font-semibold mb-2">Due Date</Text>

            {/* Select Date (opens custom modal) */}
            <TouchableOpacity
                onPress={() => setDateModalVisible(true)}
                className="bg-blue-50 rounded-lg flex-row items-center justify-between px-4 py-3 mb-5"
            >
                <Text className={selectedDate ? "text-black" : "text-gray-500"}>
                    {selectedDate ?? "Select Date"}
                </Text>
                <MaterialIcons name="date-range" size={20} color="#3d99f5" />
            </TouchableOpacity>

            {/* Priority */}
            <Text className="text-base font-semibold mb-2">Priority</Text>
            <View className="flex-row gap-2 mb-6">
                {["Low", "Med", "High"].map((p) => (
                    <TouchableOpacity
                        key={p}
                        onPress={() => setValues({ ...values, priority: p })}
                        className={`px-4 py-2 rounded-lg ${values.priority === p ? "bg-[#3d99f5]" : "bg-blue-50"
                            }`}
                    >
                        <Text
                            className={`${values.priority === p ? "text-white" : "text-gray-600"} font-medium`}
                        >
                            {p}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <CustomCam onChange={(value: string) => setValues({ ...values, image: value })} />
            {/* Submit Button */}
            <TouchableOpacity onPress={onTaskHandler} className="bg-[#3d99f5] rounded-xl py-4">
                <Text className="text-center text-white text-lg font-semibold">Add Task</Text>
            </TouchableOpacity>

            {/* Custom Calendar Modal */}
            <Modal visible={dateModalVisible} animationType="slide" transparent>
                <View className="flex-1 justify-center items-center bg-black/50">
                    <View className="bg-white rounded-2xl p-5 w-11/12">
                        {/* Calendar Grid */}
                        <CustomCalendar onChange={(value: string) => {
                            setSelectedDate(value)
                            setValues({ ...values, dueDate: value })
                            setDateModalVisible(false)
                        }} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}
