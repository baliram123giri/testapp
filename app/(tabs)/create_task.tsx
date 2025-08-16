import CustomCalendar from '@/components/CustomCalendar'
import { taskContext } from '@/provider/ContextProvider'
import { theme } from '@/provider/ThemeProvider'
import { TaskList } from '@/utils/app.types'
import { HP, WP } from '@/utils/utils'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useCallback, useContext } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Card, IconButton, List, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CreateTask() {
    const { push } = useRouter()
    const onPressHandler = useCallback(() => { push("/addTaskScreen") }, [])
    const { setSelectedDate, taskList } = useContext(taskContext)
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={{ flex: 1 }} className="bg-white">
            <SafeAreaView style={{ paddingBottom: 0, maxHeight: 80 }}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 10, paddingBottom: 0 }}>
                    <Text style={{ fontSize: 20, flex: 1, justifyContent: "center", flexDirection: "row", textAlign: "center", fontWeight: "900" }}>
                        Hello, Guest 👋
                    </Text>
                    <IconButton
                        icon={() => <MaterialIcons name="settings" size={WP("6%")} color={theme.colors?.primary} />}
                        onPress={() => console.log("Settings pressed")}
                    />
                </View>
            </SafeAreaView>
            <ScrollView horizontal={false}>
                <CustomCalendar onChange={setSelectedDate} />
                <View style={{ padding: WP("3%") }}>
                    <Text style={{ fontSize: 17, fontWeight: 800, marginBottom: HP("2%") }} >Today</Text>
                    {!taskList?.length ? <View><Card style={{ height: HP("25%") }}>
                        <Card.Cover style={{ height: HP("25%") }} source={require("@/assets/images/no_task.png")} />
                    </Card>
                        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }} className='mt-1'>
                            <Text style={{ fontSize: 15, fontWeight: 800, }} className='text-center mx-auto' >No tasks yet</Text>
                            <Text style={{ fontSize: 13 }} className='mx-auto'>Tap the + button to add a new task.</Text>
                        </View></View> : <View>
                        <List.Section title="">
                            {taskList.map((value: TaskList) => (
                                <List.Accordion
                                    key={value.description}
                                    title={value.title}
                                    left={props => <List.Icon {...props} icon="folder" />}>
                                    <List.Item title={value.description} />
                                </List.Accordion>
                            ))}
                        </List.Section>
                    </View>}
                </View>

            </ScrollView>
            <View style={{ height: HP("15%") }} className='absolute -bottom-14 right-4'>
                <TouchableOpacity onPress={onPressHandler}>
                    <MaterialIcons size={WP("15%")} name='add-circle' color={theme.colors?.primary} />
                </TouchableOpacity>
            </View>
        </View>

    )
}