import React, {
    Component
} from 'react'
import {
    View,
    Text
} from 'react-native'

import Home22 from '../../../page/home/home'
export default class First extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header:null,
        // gesturesEnabled: true,
        // tabBarVisible: true,
        // tabBarLabel: 'home',
        headerTitleStyle: {
            borderColor: 'red'
        }
    })
    render() {
        return (
            <View>
                <Text>First</Text>
                <Home22></Home22>
            </View>
        )
    }
}