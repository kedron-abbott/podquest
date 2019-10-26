import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RoundedButton(props) {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={[styles.roundedButton, {backgroundColor: props.backgroundColor}]}
    >
    <Text style={[styles.roundedButtonText, {color: props.color}]}>
      {props.title}
    </Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  roundedButton:{
    borderRadius: 30,
    paddingHorizontal: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  roundedButtonText:{
    fontSize: 15,
    fontWeight: "normal",
    paddingVertical: 15,
  },
});

