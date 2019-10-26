import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function RoundedTextInput(props) {
  return (
    <TextInput
    style={styles.roundedTextInput}
    onChangeText={props.onChangeText}
    value={props.value}
    placeholder={props.placeholder}
    secureTextEntry={props.secureTextEntry}
    returnKeyType={props.returnKeyType} />
  );

}

const styles = StyleSheet.create({
  roundedTextInput:{
    borderRadius: 30,
    paddingHorizontal: 30,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: "normal",
    paddingVertical: 15,
    backgroundColor: 'gray',
    color: 'black',
    textAlign: 'center',
  },
});

