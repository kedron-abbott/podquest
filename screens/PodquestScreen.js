import React, { useState } from 'react';
// import axios from 'axios';
import { Image, ScrollView, StyleSheet, Text} from 'react-native';
import RoundedTextInput from '../components/RoundedTextInput';
import RoundedButton from '../components/RoundedButton';
import { MaterialTopTabBar } from 'react-navigation';


export default function PodquestScreen(props) {
  const [departure, onChangeDeparture] = React.useState('');
  const [destination, onChangeDestination] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Image
          source={require('../assets/images/PodQuest-logo.png')}
        />
      <RoundedTextInput             
        onChangeText={text => onChangeDeparture(text)}
        value={departure}
        placeholder="Enter Departure Location"
        returnKeyType='next'
      />
      <RoundedTextInput             
        onChangeText={text => onChangeDestination(text)}
        value={destination}
        placeholder="Enter Destination Location"
        returnKeyType='done'
      />

      <RoundedButton
          onPress={() => handleLocations(departure, destination, props)}
          title="Quest"
          backgroundColor="#8B06BC"
          color="#fff"
      />
    </ScrollView>
  );
}

PodquestScreen.navigationOptions = {
  title: 'PodQuest',
};

function handleLocations(departure, destination, props){
  // Hey Matt, this is where you're going to add your stuff

  // const [departure_formatted_address, setDeparture] = React.useState('');
  // const [destination_formatted_address, setDestination] = React.useState('');

  //Calling Google Places for departure
  // axios.get('http://your-google-api-endpoint-here', {
  //   param1: 'something',
  //   param2: 'something else',
  //   key: 'blah'
  // })
  // .then(function (response) {
  //   console.log("Welp it worked if it got here!")
  //   setDeparture(data["whatever"]);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  //Calling Google Places for destination
  // axios.get('http://your-google-api-endpoint-here', {
  //   param1: 'something',
  //   param2: 'something else',
  //   key: 'blah'
  // })
  // .then(function (response) {
  //   console.log("Welp it worked if it got here!")
  //   setDestination(data["whatever"]);;
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  findTravelTime()
}


function findTravelTime(){
  //Calling Google Distance Matrix for destination
  // axios.get('http://your-google-api-endpoint-here', {
  //   param1: 'something',
  //   param2: 'something else',
  //   key: 'blah'
  // })
  // .then(function (response) {
  //   console.log("Welp it worked if it got here!")
  //   console.log(response["data"]) <<this would be the time it takes
  // })
  // .catch(function (error) {
  //   console.log(error);
  // }); 
  console.log("hi")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
