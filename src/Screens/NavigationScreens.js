import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import ForgotPassword from './ForgotPassword';
import ForgotCheckEmail from './ForgotCheckEmail';
import NewPassword from './NewPassword';
import SignScreen from './SignScreen';
import OtpScreen from './OtpScreen';
import LastLoginscreen from './LastLoginscreen';
import WelcomeScreen from './WelcomeScreen';
import Splash from './Splash';
import BottomTabNavigation from './BottomNavigation';
// import HomePage from './AddEvent/HomePage';
// import NoEvent from '../component/NoEvent';
import CreateEvent from './AddEvent/CreateEvent';
import StepScreensInfo from '../component/StepScreensInfo';
const NavigationScreens = () => {
    const [isSplashScreen, setisSplashScreen] = useState(false);
    const Stack = createNativeStackNavigator();
    useEffect(() => {
        const timer = setTimeout(() => {
            setisSplashScreen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack.Navigator
            // initialRouteName='StepScreensInfo'
            screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="StepScreensInfo" component={StepScreensInfo} /> */}
            {isSplashScreen ? (
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            ) : (
                <Stack.Screen name="SplashScreen" component={Splash} />
            )}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotCheckEmail" component={ForgotCheckEmail} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="SignScreen" component={SignScreen} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="LastLoginscreen" component={LastLoginscreen} />
            <Stack.Screen name="HomePage" component={BottomTabNavigation} />
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
        </Stack.Navigator>
    );
};

export default NavigationScreens;




// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Splash from './Splash';
// import WelcomeScreen from './WelcomeScreen';

// const NavigationScreens = () => {
//     const [isSplashScreen, setisSplashScreen] = useState(false);
//     const Stack = createNativeStackNavigator();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setisSplashScreen(true);
//         }, 3000);
//         return () => clearTimeout(timer);
//     }, []);

//     if (isSplashScreen) {
//         return (
//             // <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//                 {isSplashScreen ? (
//                     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//                 ) : (
//                     <Stack.Screen name="SplashScreen" component={Splash} />
//                 )}
//             </Stack.Navigator>
//             // </NavigationContainer>
//         );
//     } else {
//         return null;
//     }
// };

// export default NavigationScreens;
