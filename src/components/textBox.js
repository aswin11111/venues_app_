import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const TextBox = (props) => {
  return (
    <>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        style={[styles.textBox, props.style]}
        onChangeText={props.onChangeText}
        value={props.value}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        placeholderTextColor={'black'}
      />
      {props.icon && <MaterialIcons
        name="mail" // Adjust the icon name based on the desired icon
        size={24}
        color="black" // Adjust the icon color
        style={styles.icon}
      />}
    </View>
     {props.error && <Text style={styles.error}>{props.error}</Text>}
     </>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  placeHolder: {
    fontSize: 14,
    color: 'black',
  },
//   textBox: {
//     borderColor: '#eee',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     // paddingHorizontal: 12,
//     // paddingVertical: 8,
//     fontSize: 16,
//     borderRadius: 5,
//     marginTop: 8,
//     marginBottom: 16,
//     flex:1,
    
//   },
  error: {
    color: 'red',
    marginTop: -16,
    marginBottom: 8,
    fontSize: 12,
  },
  mandatory: {
    fontSize: 14,
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1, // You can add borderBottom to the whole container for a separation line
    borderColor: '#eee', // Adjust the border color
    marginTop: 8,
    marginBottom: 5,
    padding:8,
    borderRadius:10
  },
  textBox: {
    flex: 1,
    // padding: 10,
     paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
    // borderRadius: 5,
    
  },
  icon: {
    paddingRight: 20, // Adjust the spacing between the text input and the icon
  },

});
