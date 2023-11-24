import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from './AddEvent/EventScreen';
import BudgetinScreen from './AddEvent/BudgetinScreen';
import TasksScreen from './AddEvent/TasksScreen';
import MessagesScreen from './AddEvent/MessagesScreen';
import ProfileScreen from './AddEvent/ProfileScreen';
import { StyleSheet, View, Image, Text } from 'react-native';
import EventIcon from '../img/Event.png';
import TasksIcon from '../img/Tasks.png';
import ProfileIcon from '../img/ProfileIcon.png';
import BudgetingIcon from '../img/Budgeting.png';
import MessagesIcon from '../img/Messages.png';
// with color

import compassIcon from '../img/compass.png';
import TaskColorIcon from '../img/TaskColor.png';
import BudgetingColorIcon from '../img/BudgetingColor.png';
import MessageColorIcon from '../img/MessageColor.png';
import profileColorIcon from '../img/profileColor.png';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {

    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: style.tabsBottomContainer,
        tabBarHideOnKeyboard: true
    };
    const createTabOptions = (icon, label, colorIcon, screenName) => ({ focused }) => (
        <View style={{ alignItems: "center", gap: 3, paddingVertical: 3 }} >
            <Image style={{ width: 23, height: 23, resizeMode: "contain" }} source={focused ? colorIcon : icon} />
            <Text style={{ color: focused ? "#6941C6" : "#7A828A", fontSize: 11 }} >{label}</Text>
        </View>
    )

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                options={{ tabBarIcon: createTabOptions(compassIcon, 'Events', EventIcon, 'Events') }}
                name="Events"
                component={Events}
            />
            <Tab.Screen name="Tasks" component={TasksScreen}
                options={{ tabBarIcon: createTabOptions(TasksIcon, 'Tasks', TaskColorIcon, 'Tasks') }} />
            <Tab.Screen name="Budgeting" component={BudgetinScreen}
                options={{ tabBarIcon: createTabOptions(BudgetingIcon, 'Budgeting', BudgetingColorIcon, 'Budgeting') }} />
            <Tab.Screen name="Messages" component={MessagesScreen}
                options={{ tabBarIcon: createTabOptions(MessagesIcon, 'Messages', MessageColorIcon, 'Messages') }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{ tabBarIcon: createTabOptions(ProfileIcon, 'Profile', profileColorIcon, 'Profile') }}
            />
        </Tab.Navigator>
    );
};
const style = StyleSheet.create({
    tabsBottomContainer: {
        height: 55,
        paddingHorizontal: 8,
        paddingTop: 5,
    },
});
export default BottomTabNavigation;



