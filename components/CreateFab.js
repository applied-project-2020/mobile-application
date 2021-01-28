import * as React from 'react';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const CreateFab = ({navigation}) => (
  <FAB
    style={styles.fab}
    medium
    icon="plus"
    onPress={() => navigation.navigate("Home")}
  />
);

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'green',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default CreateFab;