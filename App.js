import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer  , DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider, 
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'
import MainTabScreen from './screens/MainTabScreen'
import {DrawerContent} from './screens/DrawerContent'
import ReadingList from './screens/ReadingLIstScreen'
import Settings from './screens/AccountSettings';
import Profile from './screens/ProfileScreen';
import Contributors from './screens/ContributorsScreen';
import ForumScreen from './screens/ForumScreen';
import Create from './components/Create';
import AccountSettings from './screens/AccountSettings';
import UserProfile from './screens/UserScreen/UserProfileScreen';

const Drawer = createDrawerNavigator();

const App = () =>{

  return(
    <PaperProvider>
    <NavigationContainer style={{backgroundColor:"white"}}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
        <Drawer.Screen name="Reading" component={ReadingList}/>
        <Drawer.Screen name="Settings" component={Settings}/>
        <Drawer.Screen name="Contributors" component={Contributors}/>
        <Drawer.Screen name="AccountSettings" component={AccountSettings}/>

        <Drawer.Screen name="UserProfile" component={UserProfile}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="Forums" component={ForumScreen}/>
        <Drawer.Screen name="Create" component={Create}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
