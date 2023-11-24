import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/dist/AntDesign';


const CreateBottomSheet = () => {
    LocaleConfig.locales['fr'] = {
        monthNames: [
          'Janvier',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre'
        ],
        monthNames: [
          'Janvier',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre'
        ],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Sunday','Monday', 'Tuesday,', 'Wednesday', 'Thursday', 'Friday ','Saturday',],
        dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      };
      
      LocaleConfig.defaultLocale = 'fr';
      
    const [selected, setselected] = useState('')
  const snapPoints = useMemo(() => ["30%" ,"50%", "75%"], []);
  const bottomSheetRef = useRef(null);

  const handleClosspress = () => {bottomSheetRef.current?.close()};
  const handleOpenspress = () => {bottomSheetRef.current?.expand()};

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button title="close" onPress={handleClosspress} />
          <Button title="Open" onPress={handleOpenspress} />
          <BottomSheet
            index={1}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
          >
            <View style={styles.contentContainer}>
                <View style={styles.headerBottomSheet} >
                    <TouchableOpacity activeOpacity={0.5} >
                    <Text style={{color:"#000", fontSize:16, lineHeight:24, fontWeight:"300", width:80,textAlign:"left" }} >Cancel</Text>
                    </TouchableOpacity>
                    <Text  style={{color:"#000", fontSize:16, lineHeight:24, fontWeight:"600", width:150,textAlign:"center"}}  >Event Date</Text>
                    <TouchableOpacity activeOpacity={0.5} >
                    <Text style={{color:"#6941C6", fontSize:16, lineHeight:24, fontWeight:"600", width:80,textAlign:"right"}} >Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", gap:10}} >
                    <TouchableOpacity>
                    <Icon size={12} name="left"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon size={12} name="right"/>
                    </TouchableOpacity>
                </View>
                <Calendar
  style={{ width: 375 }}
  onDayPress={(date) => {
    console.log(date);
    handleClosspress();
  }}
  hideExtraDays={true}
  showHeaderBar={false}
  hideArrows={true}
  hideDayNames={false}
  showWeekNumbers={false}
  theme={{
    
  }}
/>

            </View>
          </BottomSheet>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerBottomSheet:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:16,
    paddingVertical:12,
    gap:16
  }
});

export default CreateBottomSheet;





{/* 
//  <GestureHandlerRootView style={{ flex: 1 }}>
//       <BottomSheetModalProvider>
//     <View style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1}
//         snapPoints={snapPoints}
       
//       >
//         <View style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </View>
//       </BottomSheet>
//     </View> */}
{/* //     </BottomSheetModalProvider> */}
{/* //     </GestureHandlerRootView>  */}