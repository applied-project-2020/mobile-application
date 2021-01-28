import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import { Appbar } from 'react-native-paper';

const _handleSearch = () => console.log('Searching');

const ForumScreen = ({navigation}) => {
  return (

      <Appbar.Header style={{backgroundColor:'white'}}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Forums"/>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      </Appbar.Header>
  );
};

export default ForumScreen;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
    }
})