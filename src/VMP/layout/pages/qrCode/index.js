import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native'
// import { Button, Switch, List  } from 'antd-mobile-rn';
import { setSpText, autoWidth, autoHeight } from '../../../utils/layout'
// import { QRScannerView } from 'ac-qrcode';
// import BarcodeScanner from 'react-native-barcodescanner';
// import {   RNCamera   } from 'react-native-camera'
// var Camera = require('react-native-camera');
// console.log('Camera', FaceDetector);
import { NativeModules } from 'react-native'
const CameraManager = NativeModules.CameraManager || NativeModules.CameraModule;

console.log('NativeModules: ', CameraManager);
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
      header: null,
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
                <Text>扫码</Text>
                
            </View>
        )
    }
}

const orderContainer = StyleSheet.create({
    container: {
        width: '100%',
        height: autoHeight(600),
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    txt: {
        lineHeight: autoHeight(44),
        height: autoHeight(44),
        fontSize: setSpText(14)
    }
})

