import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'
import NotificationScreen from './NotificationScreen'
import AccountSettings from './AccountSettings'
import ReadingList from './ReadingLIstScreen'

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ReadingStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      style={{ backgroundColor: 'white' }}
      tabBarColor="white"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'white',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home-outline" color='black' size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'white',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search-outline" color="black" size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        
        options={{
          tabBarOptions:{
            //other properties
            pressColor: 'gray',//for click (ripple) effect color
            style: {
              backgroundColor: 'white',
            }
          },
          tabBarLabel: '',
          tabBarColor:'white',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications-outline" color="black" size={26} />
          ),
        }}
      />    

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'white',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person-outline" color="black" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
          headerTintColor:'black',
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} 
        options={{
          headerTitleStyle: { alignSelf: 'center' },

          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
              backgroundColor="white"
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}/>
    </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
        headerTitleStyle:{
          alignSelf:'center',
        }
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen}
         options={{
           title:"",
         }}
      // options={{
      //   title:"",
      //   headerLeft: () => (
      //     <Icon.Button name="ios-menu" size={25}
      //       backgroundColor="white"
      //       color="black"
      //       onPress={() => navigation.openDrawer()}
      //     />
      //   ),
      //   headerRight: () => (
      //     <Icon.Button name="ios-search-outline" size={25}
      //       backgroundColor="white"
      //       color="black"
      //       onPress={() => navigation.openDrawer()}
      //     />
      //   ),
      
      // }}
      />
  </ProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator screenOptions={{
        headerTitleStyle:{
          alignSelf:'center',
        }
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen}/>
  </ExploreStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator screenOptions={{
          headerTitleStyle:{
            alignSelf:'center',
          }
        }}>
        <NotificationStack.Screen name="Activity" component={NotificationScreen}/>
    </NotificationStack.Navigator>
  );

  const SettingsStackScreen = ({navigation}) => (
    <SettingsStack.Navigator screenOptions={{
          headerTitleStyle:{
            alignSelf:'center',
          }
        }}>
        <SettingsStack.Screen name="Settings" component={AccountSettings}
        options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
              backgroundColor="white"
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          )
        }}/>
    </SettingsStack.Navigator>
  );

  const ReadingStackScreen = ({navigation}) => (
    <ReadingStack.Navigator screenOptions={{
          headerTitleStyle:{
            alignSelf:'center',
          }
        }}>
        <ReadingStack.Screen name="Reading" component={ReadingList}
        options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
              backgroundColor="white"
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          )
        }}/>
    </ReadingStack.Navigator>
  );