import React from 'react';
import { StyleSheet, View, TextInput, Text, FlatList, Image } from 'react-native';
import Header from '../../component/Header';
import StepScreensInfo from '../../component/StepScreensInfo';
import AppButton from '../../component/AppButton';
import Icon from 'react-native-vector-icons/AntDesign';

const AddDelegates = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.delegateItem}>
      <Image source={item.img} style={styles.delegateImage} />
      <View style={styles.delegateInfoContainer}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", justifyContentL:"center"}} >
        <Text style={styles.pendingText}>{item.text}</Text>
        <Icon name='plus' size={20}  />
        </View>
      </View>
    </View>
  );

  const data = [
    {
      img: require("../../img/Profile.png"),
      name: "John Doe",
      email: "john@gmail.com",
      text : "You",
    },
    {
      img: require("../../img/user.png"),
      name: "Adam Hollingworth",
      email: "adam@gmail.com",
      text: "Pending", 
    },
    {
      img: require("../../img/Adam.png"),
      name: "Adam Hollingworth",
      email: "adam@gmail.com",
      text: "Pending",
    },
    {
      img: require("../../img/Adam.png"),
      name: "Adam Hollingworth",
      email: "adam@gmail.com",
      text: "Pending",
    },
    {
      img: require("../../img/Adam.png"),
      name: "Adam Hollingworth",
      email: "adam@gmail.com",
      text: "Pending",
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        addStyle={styles.changebgcHeader}
        title="Add Delegates"
        style={styles.headerText}
        color="#000"
        onPress={() => navigation.goBack()}
      />
      <StepScreensInfo
        style={styles.stepScreensInfo}
        Delegates="Delegates"
        Moreinfo="More info"
        imgEnable={true}
        imgEnable1={false}
        imgEnable2={false}
        imgEnable3={false}
        titcolor={styles.titncolor}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.textstyle}>Add event delegates</Text>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            style={styles.inputStyle}
            placeholder='Enter Phone or Email address'
            placeholderTextColor="#7A828A"
          />
          <AppButton title="Add" style={styles.addButton} />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default AddDelegates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F1F6",
  },
  changebgcHeader: {
    // ... your styles
  },
  headerText: {
    color: '#000',
  },
  stepScreensInfo: {
    backgroundColor: "#F2F1F6",
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    lineHeight: 24,
    paddingHorizontal: 2,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  inputStyle: {
    width: "70%",
    paddingHorizontal: 16,
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    alignItems: "center",
  },
  addButton: {
    width: "25%",
  },
  delegateItem: {
    flexDirection:"row"
  },
  delegateImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  delegateInfoContainer: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"85%"
  },
  pendingText: {
    color: "#F6A531",
  },
  titncolor: {
    tintColor: "blue",
  },
});
