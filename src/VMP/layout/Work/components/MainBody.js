import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    ScrollView
} from 'react-native'
import { setSpText, autoWidth, autoHeight } from '../../../utils/layout'
import {Dimensions, PixelRatio} from 'react-native';
export default class MainBody extends Component {
    constructor() {
        super();
        // console.log('Dimensions', layoutUtils);
        console.log('-----------', setSpText(32));
        
    }
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
                    <Text style={{height: autoHeight(40), lineHeight: autoHeight(40),marginLeft: autoWidth(15), fontSize: setSpText(16)}}>本月信息汇总</Text>
                    <Image style={ MainStyle.rightPng } source={require('../../../img/forward_grey.png')}></Image>
                </View>
                <View style={ [MainStyle.total, { marginTop: 21 }] }>
                    <Text style={{ height: autoHeight(40), lineHeight: autoHeight(40), fontSize: setSpText(16), width: 50 + '%', paddingLeft: autoWidth(15) }}>本月信息汇总</Text>
                    <View style={{ height: autoHeight(40), lineHeight: autoHeight(40), width: 50 + '%'}}>
                        <Text style={{ 
                            textAlign: 'right', height: autoHeight(40), lineHeight: autoHeight(40), marginRight: autoWidth(39), fontSize: setSpText(14), color: '#A4A4A4'}}>
                            查看全部订单</Text>
                        <Image style={ MainStyle.rightPng } source={require('../../../img/forward_grey.png')}></Image>
                    </View>
                </View>
                <View style={ MainStyle.orderItem}>
                    <View style={ MainStyle.orderDetail1}>
                        <Text style={{ fontSize: setSpText(16), lineHeight: autoHeight(40), height: autoHeight(40)}}>已接单</Text>
                        <Text style={{ fontSize: setSpText(16), lineHeight: autoHeight(40), height: autoHeight(40)}}>·换电</Text>
                        <Image style={ MainStyle.rightPng } source={require('../../../img/forward_grey.png')}></Image>
                    </View>
                    <View style={ MainStyle.orderDetail2 }>
                        <Text style={[ MainStyle.orderDetail2Item]}>车辆</Text>
                        <Text style={[ MainStyle.orderDetail2Item]}>15分钟</Text>
                    </View>
                    <View style={ MainStyle.orderDetail2 }>
                        <Text style={[ MainStyle.orderDetail2Item]}>车辆编号</Text>
                        <Text style={[ MainStyle.orderDetail2Item]}>574100078</Text>
                    </View>
                    <View style={ MainStyle.orderDetail2 }>
                        <Text style={[ MainStyle.orderDetail2Item]}>车牌号</Text>
                        <Text style={[ MainStyle.orderDetail2Item]}>宁YC3965</Text>
                    </View>
                    <View style={ MainStyle.orderDetail2 }>
                        <Text style={[ MainStyle.orderDetail2Item]}>车辆位置</Text>
                        <Text style={[ MainStyle.orderDetail2Item]}>鄞州科技信息孵化园</Text>
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
        height: autoHeight(88),
        borderColor: '#E5E5E5',
        borderRightWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxHeader: {
        fontSize: setSpText(39),
        color: '#000000'
    },
    boxFooter: {
        color: '#A4A4A4',
        fontSize: setSpText(14)
    },
    total: {
        height: autoHeight(40),
        width: 100 + '%',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    rightPng: {
        position: 'absolute',
        right: autoWidth(13),
        top: autoWidth(15),
        height: autoHeight(13),
        width: autoWidth(8),
    },
    orderItem: {
        width: 92 + '%',
        marginLeft: 4 + '%',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        height: autoHeight(204),
        backgroundColor: 'white',
        marginTop: autoHeight(16),
        paddingTop: autoWidth(0),
        borderRadius: 5
    },
    orderDetail1: {
        height: autoHeight(44), 
        flexDirection: 'row',  
        borderBottomColor: '#E5E5E5', 
        borderBottomWidth: autoWidth(1), 
        paddingLeft: autoWidth(16),
        paddingRight: autoWidth(22)
    },
    orderDetail2: {
        height: autoHeight(40), 
        marginLeft: autoWidth(16), 
        marginRight: autoWidth(16), 
        borderBottomColor: '#E5E5E5', 
        borderBottomWidth: autoWidth(1),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderDetail2Item: {
        lineHeight: autoHeight(40),
        height: autoHeight(40),
       fontSize: setSpText(14),
    },
    


})