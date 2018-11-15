import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import { location, daily, life } from '../../api/weather'
import { openLock, closeLock } from '../../api/index'
import { request } from '../../api/request'
import DashBoard from '../../components/dashboard/index.js'
const mine        = require('../../img/home.png')
const mine_active = require('../../img/home-actived.png');
const img_arr = [require('../../img/weather/0.png'),require('../../img/weather/1.png'),require('../../img/weather/2.png')]

import WeatherLife from '../../components/weatherLife/weatherLife'
import Example from '../../components/example/example'

var mydate = new Date();
var myddy = mydate.getDay();//获取存储当前日期
var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputChange = this._inputChange.bind(this);
        this._fetchWeather = this._fetchWeather.bind(this);
        this._renderImage = this._renderImage.bind(this);
        this.state = {
            customNo: '98765411111111111111',
            locationInfo: '',
            dailyInfo: '',
            lifeInfo: '',
            suggestType: [
                { label: '穿衣', prop: 'dressing' },
                { label: '紫外线强度', prop: 'uv' },
                { label: '洗车', prop: 'brief' },
                { label: '旅游', prop: 'travel' },
                { label: '感冒', prop: 'brief' },
                { label: '运动', prop: 'sport' },
            ],
            day: weekday[myddy],
            showLoading: true
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

    getIntialStaet() {
        // this._fetchWeather();
        // this._fetchWeather();
    }
    componentWillMount () {
         
    }
    async componentDidMount () {
        const localInfo = await location();
        if (!localInfo) return
        const dailyInfo = await daily();
        const lifeInfo = await life();
        this.setState({ 
            locationInfo: localInfo,
            dailyInfo: dailyInfo[0],
            lifeInfo: lifeInfo[0],
            showLoading: false
        })
    }
    componentWillReceiveProps (nextProps) {
    }
    shouldComponentUpdate (nextProps,nextState) {
       return true
    }
    componentWillUpdate (nextProps,nextState) {
    }
    componentDidUpdate (prevProps,prevState) {
        // return false
    }
    
    _fetchWeather() {
        location().then(res => {
            console.log('rrr', res, this.state);
            if (!res) return
            this.setState({ locationInfo: res })
            console.log('rrr2', res, this.state);
        });
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

    _renderImage(id, style) {
        var pic 
        // const id = this.state.locationInfo[0]['now']['code'];
        switch (parseInt(id)) {
            case 0:
                pic = require('../../img/weather/0.png');
                break;
            case 1:
                pic = require('../../img/weather/1.png');
                break;
            case 2:
                pic = require('../../img/weather/2.png');
                break;
            case 3:
                pic = require('../../img/weather/3.png');
                break;
            case 4:
                pic = require('../../img/weather/4.png');
                break;
            case 5:
                pic = require('../../img/weather/5.png');
                break;
            case 6:
                pic = require('../../img/weather/6.png');
                break;
            case 7:
                pic = require('../../img/weather/7.png');
                break;
            default:
                pic = require('../../img/weather/8.png');
                break;
        }
        const image =  Object.assign({}, {
            width: 100,
            height: 100,
            justifyContent: 'flex-end'
        }, style)
        return (
            <Image source={pic} style={image}></Image>
        )
    }

    render() {
       
        return (
            <View style={newStyle.container}>
             {  this.state.showLoading
                ?   <View>
                        <ActivityIndicator size="large" color="red" />
                        <ActivityIndicator size="small" color="#00ff00" />
                        <ActivityIndicator size="large" color="#0000ff" />
                        <ActivityIndicator size="small" color="#00ff00" />
                    </View> 
                :  <View>
                        <View style={newStyle.containerHeader}>
                            <View>
                                <Text style={[newStyle.txt1, newStyle.bigTxt]}>
                                    { this.state.locationInfo[0]['location']['name'] }
                                </Text>
                                <Text style={newStyle.txt1}> 上次更新: {this.state.locationInfo[0]['last_update']}</Text> 
                                <View style={{ flex: 1,flexDirection: 'row', marginTop: 20 }}>
                                    <View style={{ flex: 1, height:100, flexDirection: 'row-reverse'}}>
                                        { this._renderImage(this.state.locationInfo[0]['now']['code'], {}) }
                                    </View>
                                    <View style={{ flex: 1, height:100, paddingTop: 20}}>
                                        <Text style={{fontSize: 50, color: 'white', height: 50, lineHeight: 50}}>
                                            {this.state.locationInfo[0]['now']['temperature']}°C
                                        </Text>
                                        <Text style={{fontSize: 20, color: 'white', height: 20, lineHeight: 20}}>
                                            {this.state.locationInfo[0]['now']['text']}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginTop: 120 }}>
                                    <Text style={{fontSize: 20, color: 'white', height: 20, lineHeight: 20}}>{this.state.day}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            marginTop: -25,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 4,
                            paddingBottom: 10
                        }}>
                        { 
                            this.state.dailyInfo.daily.map((item, index) => {
                                return(
                                    <View style={{ 
                                            flexDirection: 'row', 
                                            marginTop: 10, 
                                            boxSize: 'box-content', 
                                            padding: 10, 
                                            borderBottomColor: '#F1F3F4', 
                                            borderBottomWidth: 2,
                                            marginLeft: 10,
                                            marginRight: 10
                                        }} key={index}> 
                                        <Text style={{ width: '50%' }}>{item.date}</Text>
                                        <View style={{ width: '30%' }}> 
                                            { this._renderImage(item.code_day, {width: 40, height: 20}) } 
                                        </View>
                                        <Text style={{ width: '12%' }}>{item.high}/{item.low}°C</Text>
                                        <Text style={{ width: '8%' }}>{item.text_day}</Text>
                                    </View>
                                )
                            })
                        }
                        </View>
                        <WeatherLife lifeInfo={this.state.lifeInfo}></WeatherLife>
                        <Example></Example>
                    </View>
             }
            </View>
        )
    }
}

const newStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9'
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
        display: 'flex',
        
    }
})