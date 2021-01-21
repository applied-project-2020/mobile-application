import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const ContributorsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <Text>Contributors</Text>
      </View>
    );
};

export default ContributorsScreen

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }
})