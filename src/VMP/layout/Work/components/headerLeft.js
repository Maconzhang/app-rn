import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image
} from 'react-native'
import { setSpText, autoWidth, autoHeight } from '../../../utils/layout'
export default class HeaderLeft extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }
    _changeOrderStatus () {
        console.log('xxx');
        this.navigation.push('AutoOrderSet');
    }
    render() {
        return (
            <View style={headerStyle.container}>
                <TouchableNativeFeedback onPress={ () => this._changeOrderStatus()}>
                    <Text style={{
                        fontSize: setSpText(14),
                        width: 33 + '%',
                        paddingLeft: autoWidth(15),
                        color: '#000000'
                    }}>自动派件中</Text>
                </TouchableNativeFeedback>
                
                <Text style={{
                    width: 33 + '%',
                    textAlign: 'center',
                    fontSize: setSpText(20)
                    }}>工作台</Text>
                <TouchableNativeFeedback>
                    <View style={{
                        width: 33 + '%',
                        flexDirection: 'row-reverse',
                    }}>
                    <Image style={{
                        width: autoWidth(20),
                        height: autoHeight(16),
                        marginRight: autoWidth(21) }}  
                        source={require('../../../img/news.png')}></Image>
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
        height: autoHeight(56),
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