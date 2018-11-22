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
  import HeaderLeft from './components/headerLeft'

class Work extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        headerLeft: (
            <HeaderLeft navigation={navigation} />
        ),
    })

    render() {
        return (
            <View>
                <Text>Work</Text>
            </View>
        )
    }
}
export default MainWork = createStackNavigator({
    Work: {
        screen: Work,
    }
})
