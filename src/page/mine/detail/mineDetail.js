import React, { Component } from 'react'
import { View, Text, Button, Slider, Picker, Switch, ScrollView, Modal,
    ProgressBarAndroid,
    RefreshControl,
    ToolbarAndroid,
    TouchableHighlight,
    CameraRoll,
    DatePickerAndroid
 } from 'react-native'


 export default class mineDetail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header:null,
        headerTitle: 'ShareShare',
        title: 'tttttt',
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'mineDetail',
        tabBarIcon: (({ tintColor, focused }) => {
            return (
                <Image
                    source={!focused ? mine : mine_active}
                    style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
                />
            )
        }),
    })
     render() {
         return(
             <Text>mineDetail</Text>
         )
     }
 }