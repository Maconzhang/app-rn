import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native'
import { location } from '../../api/weather'
import { openLock, closeLock } from '../../api/index'
import DashBoard from '../../components/dashboard/index.js'
const mine        = require('../../img/home.png')
const mine_active = require('../../img/home-actived.png');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputChange = this._inputChange.bind(this);
        this.state = {
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

    componentWillMount() {
        this._fetchWeather();
        console.log('123456');
        
    }
    
    _fetchWeather() {
        location().then(res => {
            console.log('res22', res);
        })
    }

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
                <View style={newStyle.containerHeader}>
                    <Text style={[newStyle.txt1, newStyle.bigTxt]}>Canberra</Text>
                    <Text style={newStyle.txt1}>Parly cloudy</Text>
                    <View style={{ flex: 1,flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ flex: 1, height:100, flexDirection: 'row-reverse'}}>
                            <Image style={newStyle.img}
                            source={require('../../img/weather/1.png')}
                            />
                        </View>
                        <View style={{ flex: 1, height:100, paddingTop: 20}}>
                            <Text style={{fontSize: 50, color: 'white', height: 50, lineHeight: 50}}>0.8°</Text>
                            <Text style={{fontSize: 20, color: 'white', height: 20, lineHeight: 20}}>Feels like -1.5</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginTop: 120 }}>
                        <Text style={{fontSize: 20, color: 'white', height: 20, lineHeight: 20}}>Today Mon 27 JUN</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, boxSize: 'box-content', padding: 10 }}> 
                    <Text style={{ width: '60%' }}>Tomorrow</Text>
                    <Text style={{ width: '20%' }}>Tomorrow</Text>
                    <Text style={{ width: '10%' }}>-2</Text>
                    <Text style={{ width: '10%' }}>12</Text>
                </View>
            </View>
        )
    }
}

const newStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerHeader: {
        height: 250,
        backgroundColor: '#353553',
        padding: 10,
        width: "100%"
    },
    txt1: {
        textAlign: 'center',
        color: 'white'
    },
    bigTxt: {
        fontSize: 20
    },
    img: {
        width: 100,
        height: 100,
        justifyContent: 'flex-end'
    },
    btnClass: {
        width: 30 + "%",
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 5
    },
    btn: {
        margin: 10,
    },
    weatherItem: {
        flex: 1,
        display: 'flex'
    }
})