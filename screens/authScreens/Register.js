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

const RegisterScreen = ({navigation}) => {
  return (
      <Appbar.Header style={{backgroundColor:'white'}}>
        <Appbar.BackAction onPress={() => navigation.navigate("Landing")} />
        <Appbar.Content title="Join"/>
      </Appbar.Header>
  );
};

export default RegisterScreen;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
    }
})