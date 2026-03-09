import { useTranslation } from "react-i18next";
import { StatusBar, Text, View } from "react-native";

export default function () {
    const { t } = useTranslation()
    return (
        <>
            <View className="flex-row bg-primary-600 py-14 px-10 justify-between items-center shadow-xl w-[95%] absolute self-center bottom-[75vh] rounded-xl">
                <Text className="text-center text-primary-100 text-4xl font-semibold">{t("welcome")}</Text>
            </View>
            <StatusBar barStyle="dark-content" />
        </>
    )
}