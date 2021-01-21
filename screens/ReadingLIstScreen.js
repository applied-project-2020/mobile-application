import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const ReadingScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <Text>Reading</Text>
      </View>
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