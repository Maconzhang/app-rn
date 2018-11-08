import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
// import nav from 'react-navigation' 
const nav = require('react-navigation');

export default class Mine extends Component<Props> {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: 'Mine22',
        headerStyle: {
            borderBottomColor:'#f2f2f2',
            borderColor:'#f2f2f2',
            elevation: 0
        },
        headerTitleStyle: {
            fontSize: 20,
            color: 'black'
        },
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'Mine',
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