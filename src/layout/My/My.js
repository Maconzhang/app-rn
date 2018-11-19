import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';

class My extends Component {
    render() {
        return (
            <View>
                <Text>My</Text>
            </View>
        )
    }
}

export default MyHome = createStackNavigator({
    My: {
        screen: My,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: "我",
            headerStyle: {
                backgroundColor: '#2196F3',
                
            },
            headerTitleStyle: {
                width: 100 + '%',
                textAlign: 'center',
                color: 'white'
            }
        })
    }
})
