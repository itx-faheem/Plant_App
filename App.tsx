import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
 import { NavigationContainer } from "@react-navigation/native";
 import NavigationScreen from "./src/Screens/AddEvent/NavigationScreen.js";


const App = () => {
  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})