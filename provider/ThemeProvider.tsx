
import {
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    useFonts,
} from "@expo-google-fonts/manrope";
import React from "react";
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import ContextProvider from "./ContextProvider";


// ✅ Extend Paper theme with Manrope
export const theme: ThemeProp = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#349eea",
        onPrimary: "#FFFFFF"
    },
    fonts: {
        ...DefaultTheme.fonts,
        bodyLarge: { ...DefaultTheme.fonts.bodyLarge, fontFamily: "ManropeRegular" },
        bodyMedium: { ...DefaultTheme.fonts.bodyMedium, fontFamily: "ManropeRegular" },
        bodySmall: { ...DefaultTheme.fonts.bodySmall, fontFamily: "ManropeRegular" },
        labelLarge: { ...DefaultTheme.fonts.labelLarge, fontFamily: "ManropeSemiBold" },
        titleLarge: { ...DefaultTheme.fonts.titleLarge, fontFamily: "ManropeBold" },
        headlineMedium: { ...DefaultTheme.fonts.headlineMedium, fontFamily: "ManropeExtraBold" },
    },
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [fontsLoaded] = useFonts({
        ManropeExtraLight: Manrope_200ExtraLight,
        ManropeLight: Manrope_300Light,
        ManropeRegular: Manrope_400Regular,
        ManropeMedium: Manrope_500Medium,
        ManropeSemiBold: Manrope_600SemiBold,
        ManropeBold: Manrope_700Bold,
        ManropeExtraBold: Manrope_800ExtraBold,
    });

    if (!fontsLoaded) return null; // Show splash while fonts load

    return (
        <PaperProvider theme={theme}>
            <ContextProvider>{children}</ContextProvider>
        </PaperProvider>
    );
}
