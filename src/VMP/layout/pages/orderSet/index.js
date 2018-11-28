import React, { Component } from 'react'
import {
    View,
    Text,
    Switch,
    StyleSheet
} from 'react-native'

import { setSpText, autoWidth, autoHeight } from '../../../utils/layout'
export default class AutoOrderSett extends Component{
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            swicth: !true
        }
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "自动接单设置",
    })


    _swicthChange() {
        this.setState({
            swicth: !this.state.swicth
        })
    }

    render() {
        return (
            <View style={orderContainer.container}>
                <Text style={orderContainer.txt}>换点接单</Text>
                <Switch value={this.state.swicth} onValueChange={() => this._swicthChange() } 
                // thumbColor={ this.state.swicth ? 'red' : 'black' }
                // trackColor='black'
                ></Switch>
            </View>
        )
    }
}

const orderContainer = StyleSheet.create({
    container: {
        marginTop: autoHeight(20),
        height: autoHeight(44),
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: autoWidth(15),
        paddingRight: autoWidth(15)
    },
    txt: {
        lineHeight: autoHeight(44),
        height: autoHeight(44)
    }
})

