import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native'
import { openLock, closeLock } from '../../api/index'
import DashBoard from '../../components/dashboard/index.js'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this._inputChange = this._inputChange.bind(this);
        this.state= {
            customNo: '987654'
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

    _openLock() {
        console.log('_openLock', this.state.customNo);
        // openLock(this.state.customNo);
        Alert.alert('_openLock', this.state.customNo);
    }

    _closeLock() {
        console.log('_closeLock');
        // closeLock(this.state.customNo);
    }

    render() {
        return (
            <View style={newStyle.container}>
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

                <View style={newStyle.btnClass}>
                    <View style={newStyle.btn}>
                        <Button title={'开锁'}
                        style={newStyle.btn}
                        color="black"
                        onPress={ () => this._openLock() }>
                        </Button>
                    </View>
                    <View style={newStyle.btn}>
                        <Button title={'关锁'}
                        style={newStyle.btn}
                        color="black"
                        onPress={ () => this._closeLock() }>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const newStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    btnClass: {
        width: 30 + "%",
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 5
    },
    btn: {
        margin: 10,
    }
})