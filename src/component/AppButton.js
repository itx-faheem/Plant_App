import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AppButton = ({ title, onPress, style, buttonStyle, styleText }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.buttonContainer, style, buttonStyle]}
            onPress={onPress}>
            <Text style={[styles.buttonText, styleText]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 347,
        height: 56,
        backgroundColor: "#6941C6",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
    },
});

export default AppButton;
