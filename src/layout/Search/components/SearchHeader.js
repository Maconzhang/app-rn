import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from 'react-native'
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';

  export default class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this._onBlur = this._onBlur.bind(this);
    }
    _onBlur() {
        console.log('_onBlur', this.props);
        this.props.navigation.navigate('SearchDetail')
    }

    render() {
        return (
            <View style={SearchHeaderStyle.container}>
                <View style={SearchHeaderStyle.c_icon}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require('../../../img/searchBar.png')}
                    />
                </View>
                <TextInput 
                    style={SearchHeaderStyle.c_input}  
                    selectionColor={'white'}
                    placeholder="搜索"
                    placeholderTextColor={'white'}
                    onFocus={() => this._onBlur() }>
                </TextInput>
            </View>
        )
    }
  }

  const SearchHeaderStyle = StyleSheet.create({
      container: {
          height: 54,
          backgroundColor: '#2196F3',
          flexDirection: 'row',
      },
      c_icon: {
          width: 15 + '%',
          position: 'absolute',
          marginLeft: 5 + '%',
          marginTop: 15,
          zIndex: 99
      },
      c_input: {
          backgroundColor: 'rgba(255,255,255,0.2)',
          height: 38,
          margin: 7,
          marginLeft: 2 + "%",
          marginRight: 2 + "%",
          color: 'white',
          width: 96 + '%',
          paddingLeft: 50,
          borderRadius: 5
      }
  })

 
