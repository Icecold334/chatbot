import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import "../../i18n";

export default function RootLayout() {
    return (<>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView edges={["top", "left", "right"]} className={`flex-col flex-1 bg-primary-100`}>
            <Slot />
        </SafeAreaView>
    </>
    )
}
