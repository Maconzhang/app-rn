import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';
import HeaderLeft from './components/headerLeft'
import MainBody from './components/MainBody'
class Work extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        gesturesEnabled: true,
        tabBarVisible: true,
        // // tabBarLabel: 'home',
        header: (
            <HeaderLeft navigation={navigation} />
        ),
        headerLeftContainerStyle: {
            width: 100 + '%',
            backgroundColor: '#FF0000',
        },
        headerStyle: {
            backgroundColor: '#FF0000',
        },
        headerTitleStyle: {
            width: 100 + '%',
            textAlign: 'center',
            color: 'white'
        }
    })
    render() {
        return (
            <ScrollView>
                <MainBody/>
            </ScrollView>
        )
    }
}
export default MainWork = createStackNavigator({
    Work: {
        screen: Work,
        // navigationOptions: ({ navigation, screenProps }) => ({
        //     headerLeft: (
        //         <HeaderLeft navigation={navigation} />
        //     ),
        //     headerStyle: {
        //         backgroundColor: '#2196F3',
        //     },
        //     headerTitleStyle: {
        //         width: 100 + '%',
        //         textAlign: 'center',
        //         color: 'white'
        //     }
        // })
    }
})
