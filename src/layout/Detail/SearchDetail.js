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
// import SearchStore from './store/SearchStore'
// import {observer} from 'mobx-react/native';
// import {observable, action} from 'mobx';

// @inject('SearchStore')
// @observer
class HeadLeft extends Component {
    constructor(props) {
        super(props);
        // this.SearchStore = new SearchStore
        console.log('xxx12345');
        
        // console.log('props', this.props, this.SearchStore)
        this.state = {
            inputValue: ''
        }

        console.log("this.SearchStore", this.SearchStore);
    }
    
    render() {
        return (
            <View style={{ width: 100 + '%', flexDirection: 'row'}}>
                <Back navigation={this.props.navigation}/>
                <SearchInput inputValue={this.state.inputValue}/>
            </View>
        )
    }
}

export default class Detail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        // gesturesEnabled: true,
        // tabBarVisible: true,
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
            <View>
                <Text>DetailDetail</Text>
            </View>
        )
    }
}

