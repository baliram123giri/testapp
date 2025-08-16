import { TaskList } from '@/utils/app.types'
import React, { createContext, useState } from 'react'
export const taskContext = createContext<any>(null)

export default function ContextProvider({ children }: any) {
    const [selectedDate, setSelectedDate] = useState<string>()
    const [taskList, setTaskList] = useState<TaskList[]>([])
    return (
        <taskContext.Provider value={{ selectedDate, setSelectedDate, setTaskList, taskList }}>
            {children}
        </taskContext.Provider>
    )
}

