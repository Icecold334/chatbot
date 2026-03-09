import Button from "@/components/ui/button";
import { router } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView edges={["top", "left", "right"]} className="flex-1 bg-primary-600">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
                >
                    <View className="flex-1 justify-end items-center">
                        <Animated.View
                            className="rounded-t-3xl w-[85%] bg-primary-50 shadow-2xl px-6 pt-10"
                            style={{ height: '55%' }}
                            entering={SlideInDown.duration(1000).springify(1500)}
                        >
                            <ScrollView
                                contentContainerStyle={{ flexGrow: 1 }}
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                            >
                                <View className="flex py-4">
                                    <Text className="text-4xl font-bold text-center mb-10">Login</Text>

                                    <Text className="mb-2 font-semibold">Nama</Text>
                                    <TextInput
                                        className="border border-gray-300 rounded-xl p-4 mb-5"
                                        placeholder="Masukkan nama"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                    />
                                    <Button title="Login" onPress={() => {
                                        router.navigate('/main')
                                    }} />
                                </View>
                            </ScrollView>
                        </Animated.View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}