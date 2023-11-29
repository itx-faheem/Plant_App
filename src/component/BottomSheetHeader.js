import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';


const BottomSheetHeader = () => {
    const weekDaysName = ["S", "M", "T", "W", "T", "F","S"]
  return (
    <View style={{flex:1}} >
    <View style={{flexDirection:"row", alignItems:"center", gap:10,
     paddingHorizontal:14, paddingVertical:12, borderWidth:1, borderColor:"#E6E6E6" }} >
      <View>
      <Image  style={{width:20, height:20, resizeMode:"contain"}} source={require("../img/date.png")}  />
      </View>
      <View style={{flexDirection:"row", alignItems:"center", width:"80%", gap:7}} >
      <Text style={styles.textTime}>june</Text>
      <Text style={styles.textTime}>24,2023</Text>
      <Text style={styles.textTime}>at</Text>
      <Text style={styles.textTime}>3:30</Text>
      <Text style={styles.textTime}>PM</Text>
      </View>
    <View>
      <Icon name="up" size={20} color="#000"  />
    </View>
    </View>
    <View style={{paddingHorizontal:16,paddingVertical:12,gap:16}} >
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",}} >
      <View style={{flexDirection:"row", alignItems:"center", gap:5}} >
        <Text  style={styles.textTime} >June</Text>
        <Text  style={styles.textTime} >2023</Text>
        <Icon  name="right" color="#000"  size={12}  />
      </View>
      <View  style={{flexDirection:"row", gap:6}} >    
      <TouchableOpacity>
      <Icon  size={20} color="#000" name="left"/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon  size={20} color="#000" name="right"/>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignItems:"center"}} >
        {weekDaysName.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  </View>
  )
}

export default BottomSheetHeader

const styles = StyleSheet.create({})