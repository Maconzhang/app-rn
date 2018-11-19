import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import MineGroup from './MineGroup'
const mine        = require('../../img/profile.png')
const mine_active = require('../../img/profile-actived.png')
class LogoTitle extends React.Component {
    render() {
      return (
        <Text>1232131</Text>
      );
    }
  }
import HeadLeft from './detail/HeadLeft'
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        headerStyle: {
            backgroundColor:'#fff',
            borderBottomWidth:0,
            elevation: 0,
            width: 50
        },
        header: null,
        headerTitle: "我的11",
        headerRightContainerStyle: {
            padding: 20,
            backgroundColor: 'red'
        },
        tabBarLabel: '我的',
        headerLeft: (
            <HeadLeft navigation={navigation} />
        ),
        // gesturesEnabled: true,
        // tabBarVisible: true,
        // tabBarLabel: 'Mine',
        // title: 'mineminemine',
        tabBarIcon: (({ tintColor, focused }) => {
            return (
                <Image
                    source={!focused ? mine : mine_active}
                    style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
                />
            )
        }),
    })

    _handlePress() {
        this.props.navigation.navigate('MineDetail')
        console.log('Pressed!', this.props);
    }

    render() {
        return (
            <View style={{ width: 100 + "%" }}>
                <Text>mine</Text>
                <Button 
                title={'Mine'}
                color="red"
                onPress={ () => this._handlePress() }></Button>
                <MineGroup></MineGroup>
            </View>
        )
    }
}