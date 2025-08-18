export type TaskList = {
    title: string
    description: string,
    dueDate: Date | null
    priority: string
    images?: string[]
}