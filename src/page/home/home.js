import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'


export default class Home extends Component<{}> {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: 'All',
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
        tabBarLabel: 'Home',
    })

    _handlePress() {
        this.props.navigation.navigate('Mine')
        console.log('Pressed!', this.props);
    }

    render() {
        return (
            <View>
                <Text>home</Text>
                <Button 
                title={'Home'}
                color="#FCE74E"
                onPress={ () => this._handlePress() }></Button>
            </View>
        )
    }
}