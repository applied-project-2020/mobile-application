import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { Appbar } from 'react-native-paper';

const _handleSearch = () => console.log('Searching');

const ReadingScreen = ({navigation}) => {
    return (
      <Appbar.Header style={{backgroundColor:'white'}}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Reading List"/>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      </Appbar.Header>
    );
};

export default ReadingScreen

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }
})