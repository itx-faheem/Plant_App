import { Image,
    KeyboardAvoidingView,
    ScrollView, StyleSheet, 
    Text, TextInput, 
    TouchableOpacity, 
    View
 } from 'react-native'
import React, {useState} from 'react'
import Header from '../../component/Header'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import StepScreensInfo from '../../component/StepScreensInfo';
import RadioButton from '../../component/RadoiButton';
import AppButton from '../../component/AppButton';
import CreateBottomSheet from '../../component/CreateBottomSheet';

const CreateEvent = ({ navigation }) => {
//     const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

//   const showBottomSheet = () => {
//     setBottomSheetVisible(true);
//   };

//   const handalbottomsheet = () => {
//     setBottomSheetVisible(false);
//   };
    return (
        <View  >
            <ScrollView>
                <KeyboardAvoidingView>
                    <Header onPress={() => navigation.goBack()} title="Create an Event" color="#000" style={{ color: "#000" }} />
                    <View>
                        <StepScreensInfo />
                        <View style={styles.innerContainer}>
                            <View style={{ flex: 1, justifyContent: "flex-end" }} >
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.uploadFlyerView}
                                >
                                    <Image style={{ height: 18, width: 18 }} source={require("../../img/photo.png")} />
                                    <Text style={styles.TextUploadFlyer} >Upload Flyer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 16, justifyContent:"center", alignItems:"center", gap:14}} >
                                <View style={styles.gapView} >
                                    <Text style={styles.tittleText}>Event Name</Text>
                                    <TextInput
                                        placeholderTextColor="#7A828A"
                                        style={{ color: "#000", width: 347, height: 48, borderRadius: 8, borderWidth: 1, borderColor: "#E6E6E6", paddingVertical: 12, paddingHorizontal: 16 }} placeholder='Event Name' />
                                </View>
                                <View style={styles.gapView} >
                                    <Text style={styles.tittleText} >Event Description</Text>
                                    <View style={{ width: 347, height: 91, borderWidth: 1, borderColor: "#E6E6E6", borderRadius: 8 }} >
                                        <TextInput placeholder='Description'
                                            multiline={true}
                                            placeholderTextColor="#7A828A"
                                            style={{ color: "#000", paddingVertical:12, paddingHorizontal:16 }}
                                        />
                                    </View>
                                </View>
                                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", gap:10}} >
                                    <View style={styles.gapView} >
                                        <Text style={styles.tittleText} >Event Date</Text>
                                        <View style={styles.dateAndTimeView} >
                                            <Image style={styles.imgdateAndtime}   source={require('../../img/date.png')} />
                                            <TextInput   style={styles.inputTextdateAndTieme}   multiline={true}   placeholder="Event Date" placeholderTextColor="#7A828A" />
                                            <TouchableOpacity 
                                            //  onPress={showBottomSheet}
                                             activeOpacity={0.5} >
                                            <Icon  name="down" color="#425466" size={15} /> 
                                            </TouchableOpacity>
                                             </View>
                                    </View>
                                    <View style={styles.gapView} >
                                        <Text style={styles.tittleText} >Event TIme</Text>
                                        <View style={styles.dateAndTimeView} >
                                            <Image   style={styles.imgdateAndtime} source={require('../../img/time.png')}   />
                                            <TextInput  style={styles.inputTextdateAndTieme}  multiline={true}  placeholder="Event Date" placeholderTextColor="#7A828A" />
                                            <TouchableOpacity 
                                            // onPress={showBottomSheet} 
                                            activeOpacity={0.5}>
                                                    <Icon name="down" color="#425466" size={15} />
                                                  </TouchableOpacity>
                                             {/* <CreateBottomSheet isVisible={bottomSheetVisible} onClose={handalbottomsheet} /> */}
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.gapView} >
                                    <Text style={styles.tittleText} >Event Location</Text>
                                    <View style={{flexDirection:"row", alignItems:"center",  width: 347, height: 48, borderWidth: 1, borderColor: "#E6E6E6", borderRadius: 8,  paddingHorizontal:16, gap:10}} >
                                    <Image style={styles.imgdateAndtime}  source={require("../../img/location.png")}  />
                                    <TextInput placeholder='Event Loaction' placeholderTextColor="#7A828A"  />
                                    </View>
                                    <RadioButton />
                                </View>
                                <View style={styles.gapView} >
                                    <Text style={styles.tittleText} >Price</Text>
                                    <View style={{flexDirection:"row", alignItems:"center",  width: 347, height: 48, borderWidth: 1, borderColor: "#E6E6E6", borderRadius: 8,  paddingHorizontal:16, gap:10}} >
                                    <Image style={styles.imgdateAndtime}  source={require("../../img/dollar.png")}  />
                                    <TextInput placeholder='#00.00' placeholderTextColor="#7A828A"  />
                                    </View>
                                </View>
                                <AppButton  title="Continue" />
                                
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default CreateEvent

const styles = StyleSheet.create({
    innerContainer: {
        width: "100%",
        height: 181,
        backgroundColor: "#9E77ED",
        paddingVertical: 14,
        paddingHorizontal: 16
    },
    uploadFlyerView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        width: 152,
        height: 40,
        gap: 8,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: "center",
        borderColor: "#E6E6E6"

    },
    TextUploadFlyer: {
        fontSize: 16, fontWeight: "600",
        color: "black",
        alignItems: "center"
    },
    dateAndTimeView:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#E6E6E6",
        width:169,
        paddingHorizontal:12,
        justifyContent:"space-between",
        borderRadius:8
    },
    imgdateAndtime:{
        width:15,
        height:15,
        resizeMode:"contain"
    },
    inputTextdateAndTieme:{
        width:85
    },
    tittleText:{
        fontSize: 14, lineHeight: 20, fontWeight: "400", color: "#1C2A2B" 
    },
    gapView:{
        gap:4
    }
})








// import { Image, 
//     Text, 
//     TouchableOpacity, 
//     View
//  } from 'react-native'
// import React, {useState} from 'react'
// import Icon from 'react-native-vector-icons/dist/AntDesign';
// import CreateBottomSheet from '../../component/CreateBottomSheet';

// const CreateEvent = ({ navigation }) => {
//     const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

//     const showBottomSheet = () => {
//         setBottomSheetVisible(true);
//     };

//     const handalbottomsheet = () => {
//         setBottomSheetVisible(false);
//     };

//     return (
//         <View  >
//         <TouchableOpacity
//         onPress={showBottomSheet}
//        activeOpacity={0.5} >
//       <Icon  name="down" color="#425466" size={15} /> 
//       </TouchableOpacity>
//       <CreateBottomSheet isVisible={bottomSheetVisible} onClose={handalbottomsheet} />
//         </View>
//         )
//     }












