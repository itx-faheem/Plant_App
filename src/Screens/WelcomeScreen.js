import { StyleSheet, Text, View, Image, ImageBackground, Alert } from 'react-native'
import React from 'react'
// import AppButton from '../../AppButton'
import background from "../img/Background.png";
import AppButton from '../component/AppButton';


const WelcomeScreen = ({ title, onPress, navigation, style, }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <ImageBackground
                source={background}
                style={styles.backgroundImage}
            >
                <View style={{ width: "90%", gap: 32, alignItems: "center", bottom: "12.5%" }} >
                    <View style={{ gap: 16, justifyContent: "center", alignItems: "center" }} >
                        <Image style={{ width: 176, height: 48 }} source={require("../img/LogoWhiteColor.png")} />
                        <Text style={{ color: "#fff", lineHeight: 24, fontWeight: 500, fontSize: 16, alignItems: "center" }}  >You want to talk logistics?</Text>
                    </View>
                    <View style={{ gap: 12, paddingHorizontal: 10 }} >
                        <AppButton title="Login" style={styles.loginButton} styleText={{ color: "#6941C6" }} onPress={() => navigation.push("LoginScreen")} />
                        <AppButton title="Get Started" style={styles.getStartedButton} styleText={styles.dubblegetStyle} onPress={() => navigation.push("SignScreen")} />
                    </View>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 13, fontWeight: 400, lineHeight: 18, width: "85%" }} >
                        By singing up you agree to the User Notice and Privacy Policy
                    </Text>
                </View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#fff",
        color: "#6941C6",
        width: 335
    },
    getStartedButton: {
        backgroundColor: "transparent",
        color: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
        width: 335
    },
    dubblegetStyle: {
        borderColor: null
    }
});

export default WelcomeScreen;
