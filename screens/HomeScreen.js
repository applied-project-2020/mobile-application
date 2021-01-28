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
import Feed from '../components/Feed'

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Feed/>
      </View>
    </>
  );
};

export default HomeScreen;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
    }
})