import { StatusBar, Text, View } from "react-native";

export default function () {
    // const { t } = useTransition()
    return (
        <>
            <View className="flex-row bg-primary-600 py-16 px-14 justify-between items-center shadow-xl w-[95%] absolute self-center bottom-[75vh] rounded-xl">
                <Text className="text-center text-primary-100">My Chat</Text>
            </View>
            <StatusBar barStyle="dark-content" />
        </>
    )
}