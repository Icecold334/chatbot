import { router, Stack } from "expo-router";
import { useState } from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import "../../i18n";

export default function RootLayout() {
    const [activeScreen, setActiveScreen] = useState('index');
    return (<>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView edges={["top", "left", "right"]} className={`flex-col flex-1 bg-primary-100`}>
            <Stack screenOptions={{
                headerShown: false,
                animation: "fade",
                // animationDuration: 1
            }} />
            <View className="flex-row justify-between absolute w-full rounded-full bottom-[0vh] self-center shadow-2xl bg-primary-100 px-7 py-5 ">
                <TouchableOpacity activeOpacity={0.5} className="w-[6vh] h-[6vh] rounded-full bg-primary-600 " onPress={() => { router.navigate('/main') }}>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} className="w-[6vh] h-[6vh] rounded-full bg-warning-600 " onPress={() => { router.navigate('/main/game') }}>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} className="w-[6vh] h-[6vh] rounded-full bg-secondary-600 " onPress={() => { }}>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
    )
}
