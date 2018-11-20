import React, { Component } from 'react'
import { 
    View,
    Image,
    TouchableNativeFeedback,
    Button
 } from 'react-native'

export default class Back extends Component {
    constructor(props) {
        super(props);
        console.log('props', this.props);
        this._goBack = this._goBack.bind(this);
    }

    _goBack() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View 
            style={{width: 40, height: 40, justifyContent:'center', alignContent: 'center', alignSelf: 'center'}}>
            <TouchableNativeFeedback  
                onPress={ () => this._goBack()}
                >
                <Image style={{width: 35, height: 35, marginLeft: 10}} source={require('../../../img/arrow-left.png')}></Image>
            </TouchableNativeFeedback>
                
            </View>
        )
    }
}