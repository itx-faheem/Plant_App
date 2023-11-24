import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground, TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import Header from '../component/Header';
import background from '../img/Background.png';
import Icon from 'react-native-vector-icons/AntDesign';
import AppButton from '../component/AppButton';

const LoginScreen = ({ navigation, title, }) => {
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                source={background}
                style={styles.backgroundImage}>
                <ScrollView>
                    <Header title="Login" color="#fff" style={[{ color: "#fff", }, styles.signInView]} signInView={styles.signInView} onPress={() => navigation.goBack()} />
                    <View style={{ gap: 32, justifyContent: "center", alignItems: "center", marginTop: 24, }} >
                        <View style={{ gap: 16 }}>
                            <Image style={{ width: 176.93, height: 48 }} source={require('../img/LogoWhiteColor.png')} />
                            <Text
                                style={{
                                    color: '#fff',
                                    lineHeight: 24,
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    textAlign: 'center',
                                }}>
                                You want to talk logistics?
                            </Text>
                        </View>
                        <View style={styles.innerContainer} >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 600,
                                lineHeight: 24,
                                color: "#000",
                                paddingHorizontal: 5
                            }} >Sign In</Text>
                            <View style={{ justifyContent: "center", alignItems: "center", gap: 14, }} >
                                <View style={styles.emailandPasswordView}>
                                    <Image style={{ width: 20, height: 20, resizeMode: "contain" }} source={require("../img/emaiIcon.png")} />
                                    <TextInput
                                        style={styles.inputs}
                                        placeholder='Email Address'
                                        placeholderTextColor="#7A828A"
                                    />
                                </View>
                                <View style={styles.emailandPasswordView} >
                                    <Image
                                        style={{ width: 20, height: 20, resizeMode: "contain" }}
                                        source={require("../img/lock.png")} />
                                    <TextInput
                                        style={styles.inputs}
                                        secureTextEntry={true}
                                        placeholder='Password'
                                        placeholderTextColor="#7A828A" />
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push("ForgotPassword")}  >
                                <Text style={{ color: "#6941C6", fontSize: 16, fontWeight: 600, lineHeight: 24 }}  >Forgot Password?</Text>
                            </TouchableOpacity>
                            <View >
                                <AppButton style={styles.costombtnstyle} title="Sign In" onPress={() => navigation.push("HomePage")} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
    },
    innerContainer: {
        paddingHorizontal: 14,
        paddingVertical: 16,
        gap: 16,
        backgroundColor: "#fff",
        borderRadius: 13,
        marginTop: 16,
        // backgroundColor: "blue"
    },
    emailandPasswordView: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        gap: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        height: 48,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: 317
    },

    inputs: {
        fontSize: 16,
        width: 255,
        color: "#000"
    },
    signInView: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        // backgroundColor: "red"
        // position: "absolute",
        // width: "100%"
    },
    costombtnstyle: {
        width: 317,
        paddingHorizontal: 14
    }
});
