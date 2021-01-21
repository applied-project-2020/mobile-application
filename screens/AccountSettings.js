import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const AccountSettings = ({navigation}) => {
    return (
      <View style={styles.container}>
      <Text>Settings</Text>
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