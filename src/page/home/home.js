import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import DashBoard from '../../components/dashboard/index.js'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputChange = this._inputChange.bind(this);
        this.state= {
            customNo: 123451
        }
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: 'All',
        headerStyle: {
            borderBottomColor:'#f2f2f2',
            borderColor:'#f2f2f2',
            elevation: 0
        },
        headerTitleStyle: {
            fontSize: 20,
            color: 'black'
        },
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'Home',
    })

    _handlePress() {
        this.props.navigation.navigate('Mine')
        console.log('Pressed!', this.props);
    }

    _inputChange(e) {
        console.log('text', e, this);
        this.setState({
            customNo: e
        })
    }

    render() {
        return (
            <View>
                <Text>home</Text>
                <Button 
                title={'Home'}
                color="#FCE74E"
                onPress={ () => this._handlePress() }></Button>
                <DashBoard number={this.state.customNo}></DashBoard>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={this._inputChange}
                    value={this.state.customNo}
                    defaultValue={this.state.customNo}></TextInput>
            </View>
        )
    }
}