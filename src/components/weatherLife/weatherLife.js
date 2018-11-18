import React, { Component } from 'react'
import { View, Text, StyleSheet, Slider, Picker } from 'react-native'
export default class weatherLife extends Component {
    constructor(props) {
        super(props);
        console.log('props', props, this)
        this.state = {
            suggestType: [
                { label: '穿衣', prop: 'dressing' },
                { label: '紫外线强度', prop: 'uv' },
                { label: '洗车', prop: 'car_washing' },
                { label: '旅游', prop: 'travel' },
                { label: '感冒', prop: 'flu' },
                { label: '运动', prop: 'sport' },
            ],
            language: ''
        }
    }

    render() {
        return (
            <View style={lifeStyle.container}>
                { 
                    this.state.suggestType.map(item => {
                        return (
                            <View key={item.label} style={lifeStyle.containerItem}>
                                <Text>{item.label}指数</Text>
                                <Text>{this.props.lifeInfo.suggestion[item.prop]['brief']}</Text> 
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const lifeStyle = StyleSheet.create({
    container: {
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    containerItem: {
        width: '50%',
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        height: 100,
        display: 'flex',
        padding: 10,
        backgroundColor: 'white'
    }
})