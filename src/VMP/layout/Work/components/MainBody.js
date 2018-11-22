import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image
} from 'react-native'

export default class MainBody extends Component {
    render() {
        return (
            <View style={ MainStyle.container }>
                <View style={[ MainStyle.box, { width: 38 + '%' }]}>
                    <Text style={ MainStyle.boxHeader }>2</Text>
                    <Text style={ MainStyle.boxFooter }>今日接单</Text>
                </View>
                <View style={[ MainStyle.box, { width: 62 + '%' }]}>
                    <Text style={ MainStyle.boxHeader }>501.60</Text>
                    <Text style={ MainStyle.boxFooter }>今日收入（元）</Text>
                </View>
                <View style={ MainStyle.total }>
                    <Text style={{height: 66, lineHeight: 66,marginLeft: 21, fontSize: 21}}>本月信息汇总</Text>
                    <Image style={ MainStyle.rightPng } source={require('../../../img/forward_grey.png')}></Image>
                </View>
                <View style={ [MainStyle.total, { marginTop: 21 }] }>
                    <Text style={{ height: 66, lineHeight: 66, fontSize: 21, width: 50 + '%', paddingLeft: 21 }}>本月信息汇总</Text>
                    <View style={{ height: 66, lineHeight: 66, width: 50 + '%'}}>
                        <Text style={{ textAlign: 'right', height: 66, lineHeight: 66, marginRight: 50, fontSize: 19, color: '#A4A4A4'}}>查看全部订单</Text>
                        <Image style={ MainStyle.rightPng } source={require('../../../img/forward_grey.png')}></Image>
                    </View>
                </View>
                <View style={ MainStyle.orderItem}>
                    <View style={ MainStyle.orderDetail1}>
                        <Text style={{ fontSize: 30, lineHeight: 66, height: 66}}>已接单</Text>
                        <Text style={{ fontSize: 30, lineHeight: 66, height: 66}}>·换电</Text>
                        <Image style={ MainStyle.rightPng } source={require('../../../img/forward_grey.png')}></Image>
                    </View>
                    <View style={ MainStyle.orderDetail2 }>
                        <Text style={[ MainStyle.orderDetail2Item]}>剩余时间</Text>
                        <Text style={[ MainStyle.orderDetail2Item]}>15分钟</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const MainStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5F5F5'
    },
    box: {
        height: 144,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxHeader: {
        fontSize: 48,
    },
    boxFooter: {
        color: '#A4A4A4',
        fontSize: 16
    },
    total: {
        height: 66,
        width: 100 + '%',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    rightPng: {
        position: 'absolute',
        right: 21,
        top: 18,
        height: 32,
        width: 15,
    },
    orderItem: {
        width: 92 + '%',
        marginLeft: 4 + '%',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        height: 306,
        backgroundColor: 'white',
        marginTop: 21,
        paddingTop: 0
    },
    orderDetail1: {
        height: 66, 
        flexDirection: 'row',  
        borderBottomColor: '#E5E5E5', 
        borderBottomWidth: 1, 
        paddingLeft: 22,
        paddingRight: 22
    },
    orderDetail2: {
        height: 60, 
        marginLeft: 22, 
        marginRight: 22 , 
        borderBottomColor: '#E5E5E5', 
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderDetail2Item: {
        lineHeight: 60,
        height: 60,
       fontSize: 21,
    },
    


})