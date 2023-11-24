import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AppButton from '../../component/AppButton';
import NoEvent from '../../component/NoEvent';

const Events = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 16, backgroundColor: "#fff" }} >
                <View style={styles.profileContainer}>
                    <Image source={require("../../img/Profile.png")} style={styles.profileImage} />
                    <View style={styles.profileTextContainer}>
                        <Text style={styles.profileName}>M Faheem</Text>
                        <Text style={styles.profileDescription}>Sigma Alpha Mu</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.push("CreateEvent")}
                    activeOpacity={0.5} style={styles.addEventBtnView}>
                    <Icon name="plus" size={18} color="#fff" />
                    <Text style={styles.addEventBtnText}>Add Event</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 16, paddingHorizontal: 14 }} >
                <View style={styles.searchView} >
                    <Icon name="search1" size={18} color="#7A828A" />
                    <TextInput placeholder='Search' placeholderTextColor="#7A828A" style={{ width: "100%", fontSize: 16, lineHeight: 24, color: "#000" }} />
                </View>
                <View style={styles.filterView} >
                    <Text style={{ fontSize: 16, color: "#000", fontWeight: 600 }} >Your Event</Text>
                    <Image source={require("../../img/filter.png")} style={{ height: 12, width: 16 }} />
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, borderWidth: 1, borderTopColor: "#E6E6E6", borderBottomColor: "#E6E6E6", }} >
                <NoEvent />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F1F6"
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    profileTextContainer: {
        flexDirection: 'column',
        width: "auto"
    },
    profileName: {
        width: 157,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000"
    },
    profileDescription: {
        fontSize: 16,
        color: '#425466',
        width: 157,
    },
    addEventBtnView: {
        width: 134,
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        gap: 4,
        backgroundColor: '#6941C6',
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    addEventBtnText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#fff',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    filterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 9,
        paddingVertical: 8,
        width: "100%"
    },
    searchView: {
        flexDirection: "row",
        alignItems: "center",
        width: "95%", height: 48,
        backgroundColor: "#fff", gap: 10,
        borderRadius: 8,
        borderColor: "#E6E6E6",
        borderWidth: 1,
        // paddingVertical: 12,
        paddingHorizontal: 16
    }
});

export default Events;

