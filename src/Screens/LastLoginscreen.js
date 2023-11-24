import {
    StyleSheet,
    ImageBackground,
    Text, View,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import AppButton from '../component/AppButton'

const LastLoginscreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }} >
            <View style={{ backgroundColor: "#9E77ED" }} >
                <Image style={{ height: 243, width: 375 }} source={require("../img/cloudBgc.png")} />
            </View>
            <View style={{ top: 40, paddingVertical: 12, paddingHorizontal: 16, gap: 40, justifyContent: "center", alignItems: "center" }} >
                <View style={{ gap: 5 }} >
                    <Text style={{
                        fontSize: 24, fontWeight: 700, lineHeight: 32, textAlign: "center",
                        paddingHorizontal: 10, color: "#000"

                    }} >Allow tracking for more relevant event</Text>
                    <Text style={{
                        color: "#000",
                        fontSize: 16, fontWeight: 400, lineHeight: 24, textAlign: "center"
                    }} >Your account has been created successfully, now create you event and manage </Text>
                </View>
                <View style={{ gap: 40, }} >
                    <AppButton title="Create Event" style={styles.eventbtn} />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.replace("HomePage")} >
                        <Text style={{ textAlign: "center", color: "#1C2A2B", fontSize: 16, fontWeight: 400 }} >Will do later</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LastLoginscreen

const styles = StyleSheet.create({
    eventbtn: {
        width: 180
    }
})