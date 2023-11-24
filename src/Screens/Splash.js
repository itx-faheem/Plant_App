import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const Splash = ({ navigation }) => {



    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../img/Logo.png")} style={{ width: 176.93, height: 48 }} />
        </View>
    );
};

export default Splash;
