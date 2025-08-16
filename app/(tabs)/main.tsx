import { HP, WP } from '@/utils/utils'
import { useRouter } from 'expo-router'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Main() {
    const { push } = useRouter()
    const onPressHandler = useCallback(() => { push("/(tabs)/create_task") }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingBottom: HP("4%"), paddingLeft: WP("3%"), paddingRight: WP("3%") }}>
                <View className="text-center flex justify-center content-center w-full mb-5">
                    <Text variant="headlineMedium" className="font-semibold mx-auto">TaskMaster</Text>
                </View>
                <View className='relative' style={{ height: HP("35%") }}>
                    <Card style={{ height: HP("35%") }}>
                        <Card.Cover style={{ height: HP("35%") }} source={require("@/assets/images/Homescreen.png")} />
                    </Card>
                    <View style={{ paddingBottom: HP("3%"), paddingLeft: WP("4%") }} className='text-start absolute top-0  h-full w-full  justify-end flex-col '>
                        <Text style={{ fontSize: 27, fontWeight: 900 }} className='!text-white my-1 font-bold'>Welcome To TaskMaster</Text>
                        <Text style={{ fontWeight: 500 }} className="!text-white">Organize your day, one task at a time.</Text>
                    </View>
                </View>

                <View style={{ marginTop: HP("2%") }}>
                    <Button mode='contained' className='py-1'>
                        Sign in With Google
                    </Button>
                    <Button onPress={onPressHandler} style={{ marginTop: HP("1%") }} mode='contained' buttonColor='#e9e9e9' textColor='black' className='py-1 bg-slate-100 mt-1'>
                        Skip
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}