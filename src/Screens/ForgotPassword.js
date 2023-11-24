import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import AppButton from '../component/AppButton'

const ForgotPassword = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#F2F1F6" }} >
            <Header color="#000" onPress={() => navigation.goBack()} />
            <View style={{
                width: "100%", height: "auto",
                gap: 16,
                paddingVertical: 16,
                paddingHorizontal: 18,
                borderColor: "#E6E6E6",
                borderWidth: 1,
                backgroundColor: "#fff"
            }}  >
                <View style={{ gap: 4 }} >
                    <Text style={{
                        lineHeight: 32,
                        fontSize: 24, color: "#000", fontWeight: 800,
                    }} >Forgot password</Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 400,
                            lineHeight: 24,
                            color: "#000",

                        }}
                    >Enter the email address associated with your account and we’ll send you a link to reset your password.</Text>
                </View>
                <View
                    style={{ gap: 16, justifyContent: "center", alignItems: "center", }}
                >
                    <TextInput
                        style={{
                            height: 48,
                            gap: 4,
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            borderWidth: 1,
                            borderColor: "#E6E6E6",
                            fontSize: 17,
                            borderRadius: 8,
                            width: "95%",
                            color: "#000"
                        }}
                        placeholder='john@gmail.com' placeholderTextColor="#000" />
                    <AppButton title="Continue" style={{ width: "95%" }} onPress={() => navigation.replace("ForgotCheckEmail")} />
                </View>

            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})