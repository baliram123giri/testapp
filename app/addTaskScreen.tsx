import CustomCam from "@/components/CustomCam";
import DatePicker from "@/components/DatePicker";
import { taskContext } from "@/provider/ContextProvider";
import { TaskList } from "@/utils/app.types";
import { HP } from "@/utils/utils";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from 'toastify-react-native';
import ToastManager from "toastify-react-native/components/ToastManager";

export default function AddTaskScreen() {

    const [values, setValues] = useState<TaskList>({ description: "", dueDate: null, priority: "Med", title: "", images: [] })
    const { setTaskList } = useContext(taskContext)

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

                className={`bg-white rounded-xl px-4 py-4 text-base text-black shadow-sm border border-gray-200`}
            />

            {/* Description */}
            <TextInput
                placeholder="Description"
                onChangeText={(value: string) => setValues({ ...values, description: value })}
                value={values?.description ?? ""}

                multiline={true}
                numberOfLines={10}
                style={{
                    height: HP("25%"),
                    textAlignVertical: 'top'
                }}
                textAlignVertical="top"
                className={`bg-white rounded-xl my-3 px-4 py-4 text-base text-black shadow-sm border border-gray-200`}
            />

            {/* Due Date */}
            <Text className="text-base font-semibold mb-2">Due Date</Text>
            <View className="flex flex-row justify-between mb-3">
                <DatePicker onDateChange={(value: Date) => setValues({ ...values, dueDate: value })} />
                <CustomCam onChange={(value: string[]) => setValues({ ...values, images: value })} />
            </View>
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

            {/* Submit Button */}
            <TouchableOpacity onPress={onTaskHandler} className="bg-[#3d99f5] rounded-xl py-4">
                <Text className="text-center text-white text-lg font-semibold">Add Task</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
