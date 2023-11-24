import {
    StyleSheet,
    ImageBackground,
    Text, View,
    Image,
    TextInput, ScrollView
} from 'react-native'
import React from 'react'
import background from "../img/Background.png";
import Header from '../component/Header';
import AppButton from '../component/AppButton';


const SignScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground
                source={background}
                style={{ flex: 1, resizeMode: "contain" }}
            >
                <View>
                    <ScrollView>
                        <Header title="Sign Up" color="#fff"
                            style={[{ color: "#fff", }, styles.signInView]} onPress={() => navigation.goBack()} />
                        <View style={styles.innerContainer} >
                            <View style={styles.logoandTextView} >
                                <Image style={{ width: 176.93, height: 48 }} source={require('../img/LogoWhiteColor.png')} />
                                <Text
                                    style={styles.logisticsText}>
                                    You want to talk logistics?
                                </Text>
                            </View>
                            <View style={styles.getStartedContainer} >
                                <View style={{ paddingVertical: 8 }} >
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: "#000",
                                        lineHeight: 24,
                                        paddingHorizontal: 14,

                                    }}  >Get Started</Text>
                                </View>
                                <View style={{ paddingHorizontal: 16, gap: 14, justifyContent: "center", alignItems: "center", paddingVertical: 12, }} >
                                    <View style={styles.inputsView} >
                                        <Image style={{ width: 20, height: 20, resizeMode: "contain" }} source={require("../img/emaiIcon.png")} />
                                        <TextInput
                                            style={styles.inputs}
                                            placeholder='Email Address'
                                            placeholderTextColor="#7A828A" />
                                    </View>
                                    <View style={styles.inputsView} >
                                        <Image style={{ width: 20, height: 20, resizeMode: "contain" }} source={require("../img/lock.png")} />
                                        <TextInput
                                            style={styles.inputs}
                                            secureTextEntry={true}
                                            placeholder='New Password'
                                            placeholderTextColor="#7A828A" />
                                    </View>
                                    <View style={styles.inputsView}  >
                                        <Image style={{ width: 20, height: 20, resizeMode: "contain" }} source={require("../img/lock.png")} />
                                        <TextInput
                                            style={styles.inputs}
                                            secureTextEntry={true}
                                            placeholder='Confirm Password'
                                            placeholderTextColor="#7A828A" />
                                    </View>
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 10 }} >
                                    <AppButton title="Sign Up" onPress={() => navigation.push("OtpScreen")} />
                                </View>
                                {/* </View> */}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ ImageBackground>
        </View>
    )
}
// onPress={() => navigation.push("")}
export default SignScreen

const styles = StyleSheet.create({
    // color: '#fff',
    // lineHeight: 24,
    // fontWeight: 'bold',
    // fontSize: 16,
    // textAlign: 'center',
    inputsView: {
        flexDirection: "row", alignItems: "center",
        gap: 10,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        paddingHorizontal: 16,
        width: 347,
        color: "#000"
        // paddingBottom: 10
    },
    innerContainer: {
        top: 24,
        gap: 32,
        paddingBottom: 23
    },
    logoandTextView: {
        gap: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    logisticsText: {
        color: "#fff",
        fontSize: 16,
        lineHeight: 24
    },
    getStartedContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 16,
    },
    inputs: {
        width: "100%",
    },
    getText: {

    }

})