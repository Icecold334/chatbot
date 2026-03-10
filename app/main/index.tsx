import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function () {
    const { t } = useTranslation()
    return (
        <View className="flex justify-center items-center  w-full mt-4">
            <View className=" bg-primary-600 py-14 px-10  shadow-xl w-[90%]  rounded-xl mb-4 ">
                <Text className="text-center text-primary-100 text-4xl font-semibold">{t("welcome")}</Text>
            </View>
            <FlatList
                className="w-[90%] h-[100vh] rounded-xl mb-4 bg-primary-600"
                contentContainerClassName="p-5"
                showsVerticalScrollIndicator={false}
                data={Array.from({ length: 5 })}
                keyExtractor={(_, index) => index.toString()}
                renderItem={() => (
                    <TouchableOpacity activeOpacity={0.9} className="flex bg-primary-100 p-4 mb-2 rounded-lg shadow-sm" onPress={() => {
                        router.navigate('/chat')
                        console.log('puqimay');

                    }}>
                        <View>
                            <Text className="text-xl font-semibold">Chat Umar</Text>
                            <Text className="">Lorem ipsum dolor sit amet.</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />


        </View>
    )
}