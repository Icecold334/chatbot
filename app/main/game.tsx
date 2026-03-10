import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

export default function () {
    const { t } = useTranslation()
    return (
        <View className="flex justify-center items-center  w-full mt-4">
            <View className=" bg-warning-600 py-14 px-10  shadow-xl w-[90%]  rounded-xl mb-4 ">
                <Text className="text-center text-primary-100 text-4xl font-semibold">{t("game", 'Game')}</Text>
            </View>
            <View className="w-[90%] rounded-xl mb-4 ">
                <TouchableOpacity activeOpacity={0.5} className="flex bg-primary-300 p-10 rounded-lg shadow-sm" onPress={() => {
                    console.log('puqimay');

                }}>
                    <View>
                        <Text className="text-4xl text-center font-semibold mb-2">Level 1</Text>
                    </View>
                    <View className="border-hairline mb-2">
                    </View>
                    <View>
                        <Text className="text-lg text-center">Lorem ipsum dolor sit amet consectetur</Text>
                    </View>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <View className="border-hairline w-0 py-5 text-center"></View>
                </View>
                <TouchableOpacity activeOpacity={0.5} className="flex bg-warning-300 p-10 rounded-lg shadow-sm" onPress={() => {
                    console.log('puqimay');

                }}>
                    <View>
                        <Text className="text-4xl text-center font-semibold mb-2">Level 2</Text>
                    </View>
                    <View className="border-hairline mb-2">
                    </View>
                    <View>
                        <Text className="text-lg text-center">Lorem ipsum dolor sit amet consectetur</Text>
                    </View>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <View className="border-hairline w-0 py-5 text-center"></View>
                </View>
                <TouchableOpacity activeOpacity={0.5} className="flex bg-danger-300 p-10 rounded-lg shadow-sm" onPress={() => {
                    console.log('puqimay');

                }}>
                    <View>
                        <Text className="text-4xl text-center font-semibold mb-2">Level 3</Text>
                    </View>
                    <View className="border-hairline mb-2">
                    </View>
                    <View>
                        <Text className="text-lg text-center">Lorem ipsum dolor sit amet consectetur</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}