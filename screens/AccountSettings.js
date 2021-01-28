import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import Settings from '../components/Settings'
import { Appbar } from 'react-native-paper';

const AccountSettings = ({navigation}) => {
    return (
    <View>
      <Appbar.Header style={{backgroundColor:'white'}}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Settings and Privacy"/>
      </Appbar.Header>

      <Settings/>
    </View>
      
    );
};

export default AccountSettings

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',

    }
})