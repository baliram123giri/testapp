import { HP } from '@/utils/utils'
import React from 'react'
import { View } from 'react-native'

export default function CustomAreaProvider({ children }: { children: React.ReactNode }) {
    return (
        <View style={{ padding: HP("4%") }} className='bg-white shadow'>
            {children}
        </View>
    )
}