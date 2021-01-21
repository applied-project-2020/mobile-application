import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen'
import {DrawerContent} from './screens/DrawerContent'
import ReadingList from './screens/ReadingLIstScreen'
import Settings from './screens/AccountSettings';
import Profile from './screens/ProfileScreen';
import Contributors from './screens/ContributorsScreen';

const Drawer = createDrawerNavigator();

const App = () =>{
  return(
    <NavigationContainer style={{backgroundColor:"white"}}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
        <Drawer.Screen name="Reading" component={ReadingList}/>
        <Drawer.Screen name="Settings" component={Settings}/>
        <Drawer.Screen name="Contributors" component={Contributors}/>
        <Drawer.Screen name="Profile" component={Profile}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
