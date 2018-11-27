import React, { Component } from 'react'
import {
    View,
    Text,
    UIManager
} from 'react-native'
import { MapView, Marker, Polyline, Location } from 'react-native-amap3d'
// import { MapView } from 'react-native-maps'
// import { MapView } from 'react-native-baidumap-sdk'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';
import Example from './conponents/example'
class Order extends Component {
    constructor() {
        super();
        console.log('MapView', Location);
        this.state = {
            x: '',
            time: new Date(),
        }
        // Location.init()
        // Location.addLocationListener(location => {
        //     console.log('location', location);
            
        // })
        // Location.start()
        _onDragEvent = ({ nativeEvent }) => Alert.alert(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)

        _onInfoWindowPress = () => Alert.alert('onInfoWindowPress')
            
        _onDragEvent = ({ nativeEvent }) => Alert.alert(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)
        
        _coordinates = [
            {
            latitude: 39.806901,
            longitude: 116.397972,
            },
            {
            latitude: 39.806901,
            longitude: 116.297972,
            },
            {
            latitude: 39.906901,
            longitude: 116.397972,
            },
            {
            latitude: 39.706901,
            longitude: 116.397972,
            },
        ]
    }
    render() {
        return (
            <View>
                <MapView style={{ width: 540, height: 100 + '%' }}
                    coordinate={{
                        latitude: 39.91095,
                        longitude: 116.37296,
                    }}>
                    <Marker
                        active
                        draggable
                        title="一个可拖拽的标记"
                        description={this.state.time.toLocaleTimeString()}
                        onDragEnd={this._onDragEvent}
                        onInfoWindowPress={this._onInfoWindowPress}
                        coordinate={{
                            latitude: 39.91095,
                            longitude: 116.37296,
                        }}
                        />
                </MapView>          
                 
            </View>
        )
    }
}

export default MainOrder = createStackNavigator({
    Order: {
        screen: Example,
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
