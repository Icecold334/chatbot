import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
    return (<>
        <SafeAreaView edges={["top", "left", "right"]} className={`flex-1 bg-primary-200`}>
            <Slot />
        </SafeAreaView>
        <StatusBar barStyle="dark-content" />
    </>
    )
}
