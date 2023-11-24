import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../component/Header'

const ForgotCheckEmail = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#F2F1F6" }} >
            <Header color="#000" onPress={() => navigation.goBack()} />
            <View style={{
                width: "100%", height: "auto",
                gap: 16,
                paddingVertical: 16,
                paddingHorizontal: 18,
                borderColor: "#E6E6E6",
                borderWidth: 1,
                backgroundColor: "#fff"
            }} >
                <View >
                    <Image source={require("../img/emailVector.png")} />
                    <View
                        style={{
                            paddingVertical: 16,
                            // paddingHorizontal: 14
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24, color: "#000",
                                lineHeight: 24,
                                fontWeight: "800"
                            }}
                        >Check your email</Text>
                        <Text
                            style={{
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 24,
                                color: "#000",
                                width: "80%"
                            }}
                        >We sent a password reset link to samantha@mail.com</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 5, alignItems: "center", justifyContent: "center" }} >
                    <Text
                        style={{ fontSize: 16, color: "#000", fontWeight: 400 }}
                    >Don't receive the eamil?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace("NewPassword")}
                        activeOpacity={0.5}
                    >
                        <Text style={{
                            color: "#6941C6",
                            fontWeight: 600,
                            fontSize: 16
                        }} >Click to resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgotCheckEmail

const styles = StyleSheet.create({})