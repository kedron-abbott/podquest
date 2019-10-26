import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import RoundedButton from '../components/RoundedButton';
import {AuthSession} from 'expo'
console.log(AuthSession.getRedirectUrl())


export default function LoginScreen(props) {
  return (
    <View style={styles.pageContainer}>
      <Image
        source={
          require('../assets/images/back.png')
        }
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image
          source={
            require('../assets/images/PodQuest-logo.png')
          }
          style={styles.logo}
        />
      </View>

      <View style={styles.authButtonContainer}>
        <RoundedButton
          onPress={() => props.navigation.navigate('Podquest')}
          title="Login with Spotify"
          backgroundColor="#8B06BC"
          color="#fff"
        ></RoundedButton>

      </View>
    </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  background:{
    resizeMode: 'stretch',
    position: 'absolute',
    width: 600,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginTop: 10,
    marginBottom: 20,
    flex: 2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  logo: {
    resizeMode: 'contain',
    marginTop: 3,
  },
  authButtonContainer: {
    alignItems: 'stretch',
    marginHorizontal: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    width: 300,
  },
});
