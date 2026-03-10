import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function () {
    const [text, setText] = useState('')
    const handleTextChange = (e: string) => {
        setText(e)
        console.log(text);


    }
    return (<>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View  >
                <View className="flex-row items-center gap-4 p-10 bg-primary-600">
                    <TouchableOpacity
                        activeOpacity={0.5}
                        className="w-[6vh] h-[6vh] rounded-full bg-primary-100"
                        onPress={() => { router.navigate('/main') }}
                    />
                    <Text className="text-4xl text-primary-100 font-bold">Umar</Text>
                </View>
            </View>
            <View style={{ flex: 1 }} className="bg-danger-300" >

            </View>

            <View className="flex-row justify-between w-full  bg-primary-600 shadow-xl px-7 py-5">
                <TextInput
                    className=" border border-primary-50 rounded-full mr-3 w-[80%] p-4"
                    placeholder="Masukkan pesan"
                    placeholderTextColor={'#fff'}
                    value={text}
                    onChangeText={handleTextChange}
                />

                <TouchableOpacity
                    activeOpacity={0.5}
                    className="w-[6vh] h-[6vh] rounded-full bg-primary-100"
                    onPress={() => { Keyboard.dismiss() }}
                />
            </View>
        </KeyboardAvoidingView>
    </>)
}