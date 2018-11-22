import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator, ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import Order from './Order/Order'
import My from './My/My'
import Work from './Work/Work'
 
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createMaterialBottomTabNavigator
} from 'react-navigation';

// const home_inactive = require('../../../img/home.png');
// const home_active = require('../../../img/home-actived.png');
// const search_inactive = require('../../../img/search.png');
// const search_active = require('../../../img/search-actived.png');
// const profile_inactive = require('../../../img/profile.png');
// const profile_active = require('../../../img/profile-actived.png');
import {BoxShadow, BorderShadow, Shadow} from 'react-native-shadow'

class Test extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    console.log('props', this.navigation);
  }

  _onGoPath (path) {
    this.navigation.navigate(path);
    console.log('path', this.props.navigation.state);
  }

  shouldComponentUpdate (nextProps,nextState) {
    return true
  }
  render() {
    return (
        <View style={BottomNav.container}>
                <View style={BottomNav.containerItem} >
                    <TouchableOpacity onPress={ () => this._onGoPath('Work')}>
                        <Image 
                        style={BottomNav.sideItem} 
                        source={ this.props.navigation.state['index'] !== 0 ? require('../img/desk0.png') : require('../img/desk1.png')}></Image>
                        <Text style={BottomNav.containerItemTxt}>工作台</Text>
                    </TouchableOpacity>
                </View>
              
              
              <View style={BottomNav.containerItem}>
                <TouchableOpacity onPress={ () => this._onGoPath('Order')}>
                    <Image 
                    style={BottomNav.centerImg}  
                    source={require('../img/qiang.png')}></Image>
                    <Text style={{marginTop: 40, textAlign: 'center',}}>抢单</Text>
                </TouchableOpacity>
              </View>
              <View style={BottomNav.containerItem}>
                <TouchableOpacity onPress={ () => this._onGoPath('My')}>
                    <Image 
                    style={BottomNav.sideItem} 
                    source={  this.props.navigation.state['index'] !== 2 ?require('../img/mine0.png') : require('../img/mine1.png')}></Image>
                    <Text style={BottomNav.containerItemTxt}>我的</Text>
                </TouchableOpacity>
              </View>
        </View>
    )
  }
}

const BottomNav = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    height: 75,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  containerItem: {
    width: 33 + '%',
  },
  containerItemTxt: {
    textAlign: 'center',
  },
  sideItem: {
    width: 40,
    height: 40,
    marginBottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  centerImg: {
    position: 'absolute', 
    width: 73,
    height: 73,
    top: -38,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 35
  }
})

const BottomTab = createBottomTabNavigator({
  Work: {
    screen: Work
  },
  Order: {
    screen: Order
  },
  My: {
    screen: My
  },
}, {
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarComponent:  props =>
  <Test {...props}/>,
  initialRouteName: 'My',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    indicatorStyle: {
      height: 0,
    },
    style: {
      color: 'black',
      backgroundColor: 'white',
      borderColor: 'gray',
    }
  }
})

const App = createStackNavigator({
  BottomTab: {
    screen: BottomTab,
    navigationOptions: () => ({
      header: null
    })
  }
}, {
  lazy: true
})


export default App;
