import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";

const StepScreensInfo = () => {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 13, paddingHorizontal: 20, justifyContent: "space-between", borderWidth: 1, borderColor: "#F2F1F6" }} >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
                    <Image style={styles.stepsImg} source={require("../img/StepOne.png")} />
                    <Text style={styles.screenText} >Event info</Text>
                </View>
                <View>
                    <Icon name="right" size={20} color="#7A828A" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
                    <Image style={styles.stepsImg} source={require("../img/StepTwo.png")} />
                    <Text style={styles.screenText} >Delegates</Text>
                </View>
                <View>
                    <Icon name="right" size={20} color="#7A828A" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
                    <Image style={styles.stepsImg} source={require("../img/StepThree.png")} />
                    {/* <Text style={styles.screenText} >Hello world</Text> */}
                    <Icon name="right" size={20} color="#7A828A" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
                    <Image style={styles.stepsImg} source={require("../img/StepFour.png")} />
                    {/* <Text style={styles.screenText} >luzzi</Text> */}
                    {/* <Icon name="right" size={20} color="#7A828A" /> */}
                </View>
            </View>
        </View>
    )
}

export default StepScreensInfo

const styles = StyleSheet.create({
    screenText: {
        color: "#000"
    },
    stepsImg: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    }
})