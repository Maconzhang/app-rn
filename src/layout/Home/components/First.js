import React, {
    Component
} from 'react'
import {
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native'

import Home   from '../../../page/home/home'
export default class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            loadingTitle: '加载中...'
        }
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        header:null,
        // gesturesEnabled: true,
        // tabBarVisible: true,
        // tabBarLabel: 'home',
        headerTitleStyle: {
            borderColor: 'red'
        }
    })

    _onRefresh = () => {
        this.setState({
            refreshing: true
        })
    }

    render() {
        return (
            <View>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        title={this.state.loadingTitle}
                        colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }>  
                    <Home></Home>
                </ScrollView>
            </View>
        )
    }
}