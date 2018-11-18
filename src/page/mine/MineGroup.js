import React, { Component } from 'react'
import { 
    View, 
    Text, 
 } from 'react-native'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';
  // const rnnav = require('react-navigation');

  class First extends Component {
    render() {
        return(
            <View>
                <Text>First</Text>
            </View>
        )
    }
  }

  class Second extends Component {
    render() {
        return(
            <View>
                <Text>Second</Text>
            </View>
        )
    }
  }

  const MineGroup = createMaterialTopTabNavigator(
    {
        First: { screen: First },
        Second: { screen: Second }
    }, {
        tabBarPosition: 'top',
    }
  )


  export default MineGroup