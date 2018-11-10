import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
const mine        = require('../../img/profile.png')
const mine_active = require('../../img/profile-actived.png')

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        header:null,
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'home',
        tabBarIcon: (({ tintColor, focused }) => {
            return (
                <Image
                    source={!focused ? mine : mine_active}
                    style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
                />
            )
        }),
    })
    _handlePress() {
        this.props.navigation.navigate('Home')
        console.log('Pressed!', this.props);
    }
    render() {
        return (
            <View style={{ width: 100 + "%" }}>
                <Text>mine</Text>
                <Button 
                title={'Mine'}
                color="red"
                onPress={ () => this._handlePress() }></Button>
            </View>
        )
    }
}