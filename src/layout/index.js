import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator, ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Home from './Home/Home'
import My from './My/My'
import Search from './Search/Search'
 
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
import {BoxShadow, BorderShadow, Shadow} from 'react-native-shadow'

class Test extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    
  }
  render() {
    const shadowOpt = {
      width: 540,
      height: 45,
			color:"#A8A8A8",
			border:1,
      opacity: 0.5,
			x:0,
			y:-1,
			style:{marginVertical:5}
		}
    return (
        <View style={BottomNav.container}>
              <View style={BottomNav.containerItem}>
                <Text style={BottomNav.containerItemTxt}>工作台</Text>
              </View>
              <View style={BottomNav.containerItem}>
                <View style={{ 
                  position: 'absolute', 
                  width: 50,
                  height: 50,
                  top: -28, 
                  borderColor: 'white',
                  backgroundColor: 'yellow',
                  borderWidth: 5,
                  borderRadius: 26,
                  marginBottom: 0,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center',}}>抢</Text>
                </View>
                
                <Text style={{marginTop: 20, textAlign: 'center',}}>抢单</Text>
              </View>
              <View style={BottomNav.containerItem}>
                <Text style={BottomNav.containerItemTxt}>我的</Text>
              </View>
        </View>
    )
  }
}

const BottomNav = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    height: 50,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  containerItem: {
    width: 33 + '%',
  },
  containerItemTxt: {
    textAlign: 'center',
  }
})

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
  // tabBarComponent:  props =>
  // <Test {...props}/>,
  initialRouteName: 'Work',
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

import SearchDetail from './Detail/SearchDetail'
const App = createStackNavigator({
  BottomTab: {
    screen: BottomTab,
    navigationOptions: () => ({
      header: null
    })
  },
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: () => ({
      // headerBackground: 'red',
      // headerTransparent: false
    })
  }
}, {
  lazy: true
})


export default App;
