import React, { Component } from 'react'
import { View, Text, Button, Slider, Picker, Switch, ScrollView, Modal } from 'react-native'

export default class example extends Component {
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
            language: '',
            switchValue: false,
            modalVisible: false
        }
        this.switchToggle = this.switchToggle.bind(this);
    }

    switchToggle(e) {
        console.log('e', e)
        this.setState({ switchValue: e })
    }

    render() {
        return(
            <View style={{ marginBottom: 40, height: 200 }}>
                <ScrollView style={{ marginBottom: 40, height: 200 }}>
                    <Text>Slider1</Text>
                    <Slider style={{ width: 200 }}></Slider>
                    <Text>Picker</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker> 
                    <Text>Button</Text>
                    {/* <Button
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    /> */}
                    <Text>Switch</Text>
                    <Switch onValueChange={(e) => this.switchToggle(e)} 
                    value={this.state.switchValue}></Switch>
                    <Text>Modal</Text>
                     
                </ScrollView>
            </View>
        )
    }
}