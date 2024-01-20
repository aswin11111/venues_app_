// Import necessary React Native components and libraries
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import CommonAppBar from './src/components/commonAppBar';
import CategoryRow from './src/components/categoryRow';
import NearByView from './src/components/nearByView';
import ListVenues from './src/components/listVenues';
import axios from 'axios';
import { baseUrl,venuesEndponit } from './src/constants/constant';


const App = () => {
  // State variables
  const [venues, setVenues] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetching venue data from the API amd sorting it based on distance

  const fetchVenues = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseUrl + venuesEndponit}`);
      const fetchedVenues = response.data;
      const sortedVenues = fetchedVenues.sort((a, b) => a.kilometres - b.kilometres);
      setVenues(sortedVenues);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching venue data:', error);
      setError(true);
      setIsLoading(false);
    }
  };

  //call the api to fetch venues
  useEffect(() => {
    fetchVenues();
  }, []);

  // Render venue listing screen

  return isLoading == true ? (
  <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center' }}>
    <ActivityIndicator />
  </View>
  ) : error == true ? (
  <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center' }}>
    <Text style={{ alignSelf: 'center', }} >Something Went Wrong</Text>
    <Button title='try again' style={{ alignSelf: 'center', }} />
  </View>
  ) : venues.length==0 ? (
  <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center' }}><Text>No data</Text></View>
  ) : (

    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: 'white' ,position:'relative'}}>
      <CommonAppBar />
      <CategoryRow />
      <NearByView data={venues} />
      <ListVenues data={venues} />
    </View>


  );
};

export default App;

