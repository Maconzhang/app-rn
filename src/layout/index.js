import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator, ScrollView,
  TextInput } from 'react-native'
import Home from './Home/Home'
import My from './My/My'
import Search from './Search/Search'
import {
  Platform
} from 'react-native'
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createMaterialBottomTabNavigator
} from 'react-navigation';

const home_inactive = require('../img/home.png');
const home_active = require('../img/home-actived.png');
const search_inactive = require('../img/search.png');
const search_active = require('../img/search-actived.png');
const profile_inactive = require('../img/profile.png');
const profile_active = require('../img/profile-actived.png');

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
      tabBarIcon: (({ tintColor, focused }) => {
          return (
              <Image
                  source={!focused ? home_inactive : home_active}
                  style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
              />
          )
      }),
    })
  },
  Search: {
    screen: Search,
    navigationOptions: () => ({
      tabBarIcon: (({ tintColor, focused }) => {
          return (
              <Image
                  source={!focused ? search_inactive : search_active }
                  style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
              />
          )
      }),
    }) 
  },
  My: {
    screen: My,
    navigationOptions: () => ({
      tabBarIcon: (({ tintColor, focused }) => {
          return (
              <Image
                  source={!focused ? profile_inactive : profile_active }
                  style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
              />
          )
      }),
    })
  },
}, {
  tabBarPosition: 'bottom',
  lazy: true,
  initialRouteName: 'Search',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    indicatorStyle: {
      height: 0,
    },
    style: {
      color: 'black',
      backgroundColor: 'white',
      borderColor: 'gray',
    }
  }
})

import Detail from './Detail/Detail'
const App = createStackNavigator({
  BottomTab: {
    screen: BottomTab,
    navigationOptions: () => ({
      header: null
    })
  },
  Detail: {
    screen: Detail
  }
}, {
  lazy: true
})


export default App;
