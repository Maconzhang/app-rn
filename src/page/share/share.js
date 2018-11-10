import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
const share        = require('../../img/star.png')
const share_actived = require('../../img/star-actived.png')
export default class Share extends Component {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        header:null,
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'share',
        tabBarIcon: (({ tintColor, focused }) => {
            return (
                <Image
                    source={!focused ? share : share_actived}
                    style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
                />
            )
        }),
    })

    _handlePress() {
        this.props.navigation.navigate('Mine');
        console.log('Pressed!', this.props);
    }
    render() {
        return (
            <View style={{ width: 100 + "%" }}>
                <Text>Share</Text>
                <Button 
                title={'Share'}
                color="red"
                onPress={ () => this._handlePress() }></Button>
            </View>
        )
    }
}