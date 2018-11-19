import React, {
    Component
} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }

    _handlePress() {
        console.log('Pressed!', "this.props");
        this.props.navigation.navigate('Detail')
    }
    render() {
        return (
            <View>
                <Text>Search</Text>
                <Button 
                title={'Mine'}
                color="red"
                onPress={ () => this._handlePress() }></Button>
            </View>
        )
    }
}