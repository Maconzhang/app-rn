import React, { Component,  PropTypes } from 'react'
import { View, Image, Text, Button } from 'react-native'


export default class DashBoard extends Component {

    render() {
        return (
            <View>
                <Text>车辆编号是：{this.props.number}</Text>
            </View>
        )
    }
}