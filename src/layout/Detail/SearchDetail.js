import React, {
    Component
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from 'react-native'
import Back from './components/Back'
import SearchInput from './components/SearchInput'
import SearchStore from './store/SearchStore'
import { inject, Provider, observer } from 'mobx-react';
import {observable} from 'mobx';

class HeadLeft extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={{ width: 100 + '%', flexDirection: 'row'}}>
                <Back navigation={this.props.navigation}/>
                <SearchInput/>
            </View>
        )
    }    
}

@observer
export default class Detail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        gesturesEnabled: true,
        tabBarVisible: true,
        headerLeft: (
            <HeadLeft navigation={navigation} />
        ),
        headerLeftContainerStyle: {
            width: 100 + '%',
        },
        headerStyle: {
            backgroundColor: '#2196F3'
        }
    })

    render() {
        return (
            <Provider SearchStore={SearchStore}>
                <View>
                    <Text>{ SearchStore.inputValue }</Text>
                    <View style={{ 
                        borderColor: 'black',
                        borderWidth: 4,
                        position: 'relative',
                        top: 100 + '%'
                    }}>
                        <Text>1234</Text>
                    </View>
                </View>
            </Provider>
        )
    }
}

