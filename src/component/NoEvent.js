import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const NoEvent = () => {
    return (
        <View style={styles.container} >
            <Image
                style={{ width: 111, resizeMode: "contain", height: 157.03 }}
                source={require("../img/Artwork.png")} />
            <View style={{ gap: 8 }} >
                <Text
                    style={styles.ViewText}
                >No event</Text>
                <Text
                    style={styles.noEventText}
                >You haven’t created event yet. Click add event button to add new event.</Text>
            </View>
        </View>
    )
}

export default NoEvent

const styles = StyleSheet.create({
    noEventText: {
        width: 275.5,
        textAlign: "center",
        lineHeight: 24, fontSize: 14,
        fontWeight: '400',
        color: "#344B67"
    },
    container: {
        flex: 1, justifyContent: "center", alignItems: "center",
    },
    ViewText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "700",
        color: "#344B67",
        lineHeight: 30
    }
})