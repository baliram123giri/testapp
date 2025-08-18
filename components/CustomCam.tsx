import { theme } from "@/provider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FancyMultiImagePicker({ onChange }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    const [images, setImages] = useState<string[]>([]);

    // Pick multiple images from Photos
    const pickPhotos = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Permission is required!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true, // multi select
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
        });
        if (!result.canceled) {
            const uris = result.assets.map((asset) => asset.uri);
            setImages([...images, ...uris]);
            onChange?.([...images, ...uris])
        }
        setModalVisible(false);
    };

    // Take photo from Camera (single)
    const takePhoto = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
            alert("Camera permission required!");
            return;
        }
        const result = await ImagePicker.launchCameraAsync({
            aspect: [4, 3],
            quality: 0.7,
        });
        if (!result.canceled) {
            setImages([...images, result.assets[0].uri]);
            onChange?.([...images, result.assets[0].uri])
        }

        setModalVisible(false);
    };
    const deleteHandler = (id: any) => {
        setImages((prev: string[]) => prev.filter((item: String) => item !== id))
    }
    return (
        <View>
            {/* Horizontal Scroll of Selected Images */}
            <View className="flex flex-row gap-1 w-full items-center px-4 py-3 border rounded-md bg-white shadow-sm border-slate-50 " >
                {images.map((uri, index) => (
                    <View key={index} style={{ height: 25, width: 25 }} className="relative">
                        <Image source={{ uri }} style={styles.image} />

                        <Ionicons onPress={() => deleteHandler(uri)} name="close" size={15} className="bg-red-500 absolute -top-4 right-0 rounded-full flex text-center pt-0.5   content-center items-center justify-center flex-row h-5 w-5" color={"white"} />

                    </View>
                ))}
                {images.length < 4 && <TouchableOpacity onPress={() => setModalVisible(true)}>

                    <View className="flex flex-row items-center gap-1">
                        <Ionicons name="camera" size={25} color={theme.colors?.primary} />
                        {images.length === 0 && <Text>Attach Photos</Text>}
                    </View>
                </TouchableOpacity>}
            </View>

            {/* Modal with Options */}
            <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Select Image</Text>

                        <TouchableOpacity style={styles.optionButton} onPress={pickPhotos}>
                            <Ionicons name="image-outline" size={24} color="#16a34a" />
                            <Text style={styles.optionText}>Photos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton} onPress={takePhoto}>
                            <Ionicons name="camera-outline" size={24} color="#2563eb" />
                            <Text style={styles.optionText}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: { width: "100%", height: "100%", borderRadius: 1 },
    modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.4)" },
    modalContainer: { backgroundColor: "white", padding: 20, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
    modalTitle: { fontSize: 18, fontWeight: "600", marginBottom: 16, textAlign: "center" },
    optionButton: { flexDirection: "row", alignItems: "center", padding: 12, marginBottom: 12, backgroundColor: "#e0f2fe", borderRadius: 12, justifyContent: "center" },
    optionText: { marginLeft: 8, fontWeight: "500", fontSize: 16 },
});
