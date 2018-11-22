import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image
} from 'react-native'

export default class HeaderLeft extends Component {

    _changeOrderStatus () {
        console.log('xxx');
    }
    render() {
        return (
            <View style={headerStyle.container}>
                <TouchableNativeFeedback onPress={ () => this._changeOrderStatus()}>
                    <Text style={{
                        fontSize: 21,
                        width: 33 + '%',
                        paddingLeft: 21
                    }}>自动派件中</Text>
                </TouchableNativeFeedback>
                
                <Text style={{
                    width: 33 + '%',
                    textAlign: 'center',
                    fontSize: 24
                    }}>工作台</Text>
                <TouchableNativeFeedback>
                    <View style={{
                        width: 33 + '%',
                        flexDirection: 'row-reverse',
                    }}>
                    <Image style={{width: 40, height: 40, marginRight: 21 }}  source={require('../../../img/news.png')}></Image>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const headerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 100 + '%',
        height: 84,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E5E5E5'
    },
    headerItem: {
        width: 33 + '%',
        textAlign: 'center',
        
    }
})