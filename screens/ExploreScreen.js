import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Searchbar from '../components/Searchbar'
import ExploreItems from '../components/ExploreItems'

const ExploreScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        {/* <Searchbar/> */}
        <ExploreItems/>
      </View>
    </>
  );
};

export default ExploreScreen;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
    }
})