import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({ navigation, onPress, title, style, signInView, color }) => {
    return (
        // <SafeAreaView>
        //     <KeyboardAvoidingView>
        //         <ScrollView>
        <View style={[styles.headerContainer, signInView]}>
            <TouchableOpacity onPress={onPress}>
                <Icon name='arrowleft' size={24} color={color} />
            </TouchableOpacity>
            <View style={{ flex: 1, height: 20, justifyContent: "center", alignItems: "center" }}>
                {
                    title ? (<Text style={[{ textAlign: "center", fontSize: 14, fontWeight: 600, lineHeight: 20, }, style]}>{title}</Text>) : null
                }

            </View>
            <View style={{ height: 24, width: 24 }} >
            </View>
        </View>
        //         </ScrollView>
        //     </KeyboardAvoidingView>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        height: 44,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});

export default Header;
