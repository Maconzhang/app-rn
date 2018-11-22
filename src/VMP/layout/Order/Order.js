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

class Order extends Component {
    render() {
        return (
            <View>
                <Text>Order</Text>
            </View>
        )
    }
}

export default MainOrder = createStackNavigator({
    Order: {
        screen: Order,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: "Order",
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
