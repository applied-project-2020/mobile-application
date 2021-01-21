import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

import Profile from '../components/Profile'

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Profile/>
      </View>
    );
};

export default ProfileScreen

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    }
})