import {
    StyleSheet, Text, View,
    TextInput,
    Image
} from 'react-native'
import React from 'react'
import Header from '../component/Header'
import AppButton from '../component/AppButton'

const NewPassword = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#E6E6E6" }} >
            <Header color="#000" onPress={() => navigation.goBack()} />
            <View style={{
                backgroundColor: "#fff",
                borderTopColor: "#E6E6E6",
                borderBottomColor: "#E6E6E6",
                borderWidth: 1,
                paddingVertical: 16, paddingHorizontal: 14
            }} >
                <View style={{ gap: 24 }} >
                    <View>
                        <Text style={{ lineHeight: 24, fontSize: 24, fontWeight: 800, color: "#000" }} >Set new password</Text>
                        <Text style={{ lineHeight: 24, color: "#1C2A2B", fontSize: 16, fontWeight: 400, width: 347, }} >Your new password mush be different to previously used passwords.</Text>
                    </View>
                    <View style={{ gap: 16, justifyContent: "center", alignItems: "center" }} >
                        <View style={{
                            flexDirection: "row", alignItems: "center", gap: 16,
                            borderRadius: 8,
                            width: "90%",
                            height: 48,
                            paddingHorizontal: 16,
                            borderColor: "#E6E6E6", borderWidth: 1
                        }} >
                            <Image
                                style={{ width: 20, height: 20, resizeMode: "contain" }}
                                source={require("../img/lock.png")} />
                            <TextInput
                                style={styles.inputs}
                                secureTextEntry={true}
                                placeholder='New Password'
                                placeholderTextColor="#7A828A"
                            />
                        </View>
                        <View style={{
                            flexDirection: "row", alignItems: "center", gap: 16,
                            height: 48,
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            width: "90%",
                            borderColor: "#E6E6E6", borderWidth: 1
                        }} >
                            <Image style={{ width: 20, height: 20, resizeMode: "contain" }} source={require("../img/lock.png")} />
                            <TextInput
                                style={styles.inputs}
                                secureTextEntry={true}
                                placeholder='Confirm Password' placeholderTextColor="#7A828A" />
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                        <AppButton title="Reset Password" style={{ width: "90%" }} onPress={() => navigation.pop(1)} />
                    </View>
                </View>
            </View>
        </View >
    )
}

export default NewPassword

const styles = StyleSheet.create({
    inputs: {
        fontSize: 16,
        color: "#000",
        width: "90%"
    }

})