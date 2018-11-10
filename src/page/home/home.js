import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native'
import { openLock, closeLock } from '../../api/index'
import DashBoard from '../../components/dashboard/index.js'
const mine        = require('../../img/home.png')
const mine_active = require('../../img/home-actived.png')
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputChange = this._inputChange.bind(this);
        this.state= {
            customNo: '987654'
        }
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
        this.props.navigation.navigate('Share');
        console.log('Pressed!', this.props);
    }

    _inputChange(e) {
        console.log('text', e, this);
        this.setState({
            customNo: e
        })
    }

    _openLock() {
        console.log('_openLock', this.state.customNo);
        // openLock(this.state.customNo);
        Alert.alert('_openLock', this.state.customNo);
    }

    _closeLock() {
        console.log('_closeLock');
        // closeLock(this.state.customNo);
    }

    render() {
        return (
            <View style={newStyle.container}>
                <Text>home1</Text>
                <Button 
                    title={'Home'}
                    color="#FCE74E"
                    onPress={ () => this._handlePress() }>
                </Button>
            </View>
        )
    }
}

const newStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    btnClass: {
        width: 30 + "%",
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 5
    },
    btn: {
        margin: 10,
    }
})