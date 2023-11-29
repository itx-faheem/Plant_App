import React from 'react';
import { StyleSheet, View, TextInput,Text } from 'react-native';
import Header from '../../component/Header';
import StepScreensInfo from '../../component/StepScreensInfo';
import { populateEvents } from 'react-native-calendars/src/timeline/Packer';
import AppButton from '../../component/AppButton';


const AddDelegates = ( { navigation } ) => {
  return (
    <View>
      <Header title="Add Delegates" style={{ color: '#000',}} color="#000"  onPress={()=>navigation.goBack()} />
      <StepScreensInfo    Delegates="Delegates" Moreinfo="More info"   imgEnable={true}  imgEnable1={false} imgEnable2={false} imgEnable3={false} titcolor={{tintColor:"blue"}}  />
      <View style={{paddingHorizontal:16, paddingVertical:14, gap:10}} >
        <Text style={styles.textstyle} >Add event delegates</Text>
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:10}} >
          <TextInput   multiline={true} style={styles.inpitTextStyle}  placeholder='Enter Phone or Email addreess' placeholderTextColor="#7A828A" /> 
          <AppButton title="Add" style={{width:"25%"}} />
        </View>
      </View>
    </View>
  );
};

export default AddDelegates;

const styles = StyleSheet.create({
    titncolor:{
        tintColor:"blue"
    },
    inpitTextStyle:{
      width:"70",
      paddingHorizontal:16, fontSize:16,
      paddingVertical:12,
      borderWidth:1, borderColor:"#000", borderRadius:8, 
      alignItems:"center"
    },
    textstyle:{
      fontSize:16,
      fontWeight:"700",
      color:"#000",
      lineHeight:24,
      paddingHorizontal:2
    }
});
