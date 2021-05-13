import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator'
import NotificationScreen  from './screens/NotificationScreen'

export default function App() {
  return (
    <AppContainer />
  );
}



const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},  
 AppTabNavigator:{screen: AppTabNavigator},
 NotificationScreen :{screen:NotificationScreen},
  
})

const AppContainer =  createAppContainer(switchNavigator);
