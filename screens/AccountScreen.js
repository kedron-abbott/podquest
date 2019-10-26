import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text> cool account stuff here </Text>
    </ScrollView>
  );
}

AccountScreen.navigationOptions = {
  title: 'Account',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
