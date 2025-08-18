import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Card, List } from "react-native-paper";

type TaskList = {
    title: string;
    description: string;
    images: string[]; // multiple images
};

type Props = {
    taskList: TaskList[];
};

export default function TaskListComponent({ taskList }: Props) {
    console.log(taskList)
    return (
        <ScrollView style={styles.container}>
            <List.Section title="Tasks">
                {taskList.map((task) => (
                    <List.Accordion
                        key={task.title}
                        title={task.title}
                        left={(props) => <List.Icon {...props} icon="folder" />}
                        style={styles.accordion}
                    >
                        <List.Item
                            title={task.description}
                            titleNumberOfLines={3}
                            description={() => (
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
                                    {task.images.map((uri, index) => (
                                        <Card key={index} style={styles.imageCard}>
                                            <Image source={{ uri: uri }} style={styles.image} />
                                        </Card>
                                    ))}
                                </ScrollView>
                            )}
                        />
                    </List.Accordion>
                ))}
            </List.Section>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    accordion: { marginBottom: 8 },
    imageScroll: { marginTop: 8 },
    imageCard: {
        width: 200,
        height: 200,
        marginRight: 10,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 2, // shadow for Android
    },
    image: { width: "100%", height: "100%", borderRadius: 12 },
});
