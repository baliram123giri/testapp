import { theme } from '@/provider/ThemeProvider'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function CustomHeaderProps() {
    return <TouchableOpacity onPress={() => router.back()} style={{ paddingHorizontal: 5, paddingVertical: 3, borderRadius: 5, backgroundColor: "#f2f2f2" }}>
        <MaterialIcons name="chevron-left" size={25} color={theme.colors?.backdrop} />
    </TouchableOpacity>
}