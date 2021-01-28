import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text, View} from 'react-native'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'
import NotificationScreen from './NotificationScreen'
import AccountSettings from './AccountSettings'
import ReadingList from './ReadingLIstScreen'
import Forum from './ForumScreen'
import{
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper'
import ForumScreen from './ForumScreen';
import UserProfileScreen from './UserScreen/UserProfileScreen';
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ReadingStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ForumsStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{ backgroundColor: 'white' }}
      shifting={true}

    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'black',

          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? "home" : "home-outline"}
              color='white' size={26} />
          ),
        }}
      />

     <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        title=""
        options={{
          tabBarLabel: '',
          tabBarColor:'black',
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? "search" : "search-outline"}
              color="white" size={26} />
          ),
        }}
      /> 

    <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'black',
          tabBarIcon: ({ color }) => (
            <Icon 
              name={"notifications-outline"}
              color="white" size={26} />
          ),
        }}
      />
 
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
          headerTintColor:'black',
          headerStyle: { elevation: 0, backgroundColor: 'black' },
          cardStyle: { backgroundColor: 'black' }
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} 

        options={{
          title:"Home",
          headerTitleStyle: { textAlign:'left' , flex:1, fontSize:30, color:'white'},

          // headerLeft: () => (
          //   <Icon.Button name="menu-outline" size={25}
          //     backgroundColor="white"
          //     color="black"
          //     onPress={() => navigation.openDrawer()}
          //   />
          // ),
          headerRight: () => (
            <Avatar.Image
              marginRight={10}
              source={{
              uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'
              }}
              size={35}

              onPress={() => {navigation.navigate('Profile')}}

            />
          ),
        }}/>
    </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
        headerStyle: { elevation: 0, backgroundColor: 'white'},
        cardStyle: { backgroundColor: 'black' },
        headerTitleStyle:{
          alignSelf:'center',
        }
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen}
        options={{
          title:"",
          headerRight: () => (
            <View style={{flexDirection:'row', marginTop:15, justifyContent:'center',}}>
              <Icon.Button name="settings-outline" size={25}
                backgroundColor="black"
                color="black"
                onPress={() => {navigation.navigate('AccountSettings')}}
              />
            </View>
          ),
        }}
      />
  </ProfileStack.Navigator>
);

const UserProfileStackScreen = ({navigation}) => (
  <UserProfileStack.Navigator screenOptions={{
        headerStyle: { elevation: 0, backgroundColor: 'white'},
        cardStyle: { backgroundColor: '#fff' },
        headerTitleStyle:{
          alignSelf:'center',
        }
      }}>
      <UserProfileStack.Screen name="UserProfile" component={UserProfileScreen}
        options={{
          title:"",
          headerRight: () => (
            <View style={{flexDirection:'row', marginTop:15, justifyContent:'center',}}>
              <Icon.Button name="person-add-outline" size={25}
                backgroundColor="white"
                color="black"
                onPress={() => {navigation.navigate('UserProfile')}}
              />
            </View>
          ),
        }}
      />
  </UserProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator screenOptions={{
        headerStyle: { elevation: 0, backgroundColor: 'black'},
        headerTitleStyle: {textAlign:'left', fontSize:30, color:'white'},
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
  </ExploreStack.Navigator>
);

const ForumStackScreen = ({navigation}) => (
  <ForumStack.Navigator screenOptions={{
        headerTitleStyle:{
          alignSelf:'center',
        }
      }}>
      <ForumStack.Screen name="Forums" component={ForumScreen}/>
  </ForumStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator screenOptions={{
          headerStyle: { elevation: 0 , backgroundColor: 'black'},
          headerTitleStyle: {fontSize:30, color:'white'},
          cardStyle: { backgroundColor: 'black' },
   
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
        <SettingsStack.Screen name="Settings" component={AccountSettings}/>
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