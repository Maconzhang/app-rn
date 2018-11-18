import React, { Component } from 'react'
import { View, Text, Button, Slider, Picker, Switch, ScrollView, Modal,
    ProgressBarAndroid,
    RefreshControl,
    ToolbarAndroid,
    TouchableHighlight,
    CameraRoll,
    DatePickerAndroid
 } from 'react-native'
import HeadLeft from './HeadLeft'

 export default class mineDetail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        hearder: null,
        headerStyle: {
            backgroundColor:'#fff',
            borderBottomWidth:0,
            elevation: 0
        },
        headerRightContainerStyle: {
            padding: 20,
            backgroundColor: 'red'
        },
        tabBarLabel: 'mineDetail',
        headerLeft: (
            <HeadLeft navigation={navigation} />
        ),
        
    })
     render() {
         return(
             <Text>mineDetail</Text>
         )
     }
 }