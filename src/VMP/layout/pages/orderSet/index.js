import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native'
// import { Button, Switch, List  } from 'antd-mobile-rn';
import { setSpText, autoWidth, autoHeight } from '../../../utils/layout'
export default class AutoOrderSett extends Component{
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            swicth: !!true,
            checked: !true,
            color: '#ffffff'
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

    _onSwitchChange = (value) => {
        this.setState({
          checked: !this.state.checked,
        });
      }

    render() {
        return (
            <View style={orderContainer.container}>
                <Text style={orderContainer.txt}>换点接单</Text>
                <Switch value={this.state.swicth} onValueChange={() => this._swicthChange() } 
                trackColor={{true:"black", false: 'red'}}
                //  thumbColor="#c14e46"
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
        paddingLeft: autoWidth(15),
        paddingRight: autoWidth(15),
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txt: {
        lineHeight: autoHeight(44),
        height: autoHeight(44),
        fontSize: setSpText(14)
    }
})

