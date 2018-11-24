import React, { Component } from 'react'
import {
    View,
    Text,
    UIManager
} from 'react-native'
import { MapView, Marker, Polyline} from 'react-native-amap3d'
// import { MapView } from 'react-native-maps'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';

class Order extends Component {
    constructor() {
        super();
        console.log('MapView', MapView);
    }
    render() {
        return (
            <View>
                <Text>Order</Text>
                <MapView />
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
