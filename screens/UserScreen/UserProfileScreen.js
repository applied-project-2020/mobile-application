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
import UserProfile from '../../components/User/UserProfile'
import { Appbar } from 'react-native-paper';

const UserProfileScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Appbar.Header style={{backgroundColor:'white'}}>
            <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
            <Appbar.Content title="Jonjo Shelvey"/>
            <Appbar.Action icon="magnify" />
        </Appbar.Header>
        <UserProfile/>
      </View>
  );
};

export default UserProfileScreen;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
    }
})