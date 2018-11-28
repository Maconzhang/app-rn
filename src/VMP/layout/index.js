import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator, ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Switch
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
import { setSpText, autoWidth, autoHeight } from '../utils/layout'
class Test extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    console.log('props', this.navigation);
  }

  _onGoPath (path) {
    if (path == 'Order') {
      this.navigation.navigate(path);
    } else {
      console.log('xxx');
      this.navigation.push(path);
    }
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
                    <Text style={{marginTop: autoHeight(30), textAlign: 'center',}}>抢单</Text>
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
    paddingTop: autoHeight(5),
    paddingBottom: autoHeight(15),
    height: autoHeight(50),
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
    width: autoWidth(30),
    height: autoHeight(30),
    marginBottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  centerImg: {
    position: 'absolute', 
    width: autoWidth(56),
    height: autoHeight(56),
    top: autoHeight(-29),
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius:  autoWidth(30)
  }
})

const BottomTab = createBottomTabNavigator({
  Work: {
    screen: Work,
    // navigationOptions: () => ({
    //   header: null
    // })
  },
  My: {
    screen: My
  },
}, {
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarComponent:  props =>
    <Test {...props}/>,
  initialRouteName: 'Work',
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
import AutoOrderSet from './pages/orderSet/index'
const App = createStackNavigator({
  BottomTab: {
    screen: BottomTab,
    navigationOptions: () => ({
      header: null
    })
  },
  AutoOrderSet: {
    screen: AutoOrderSet
  },
  Order: {
    screen: Order
  },
}, {
  lazy: true
})

/**
 * 自定义默认Text样式
 * @param customProps
 */
// const setCustomText = customProps => {
//   const TextRender = Text.prototype.render;
//   const initialDefaultProps = Text.prototype.constructor.defaultProps;
//   Text.prototype.constructor.defaultProps = {
//       ...initialDefaultProps,
//       ...customProps
//   };
//   Text.prototype.render = function render() {
//       let oldProps = this.props;
//       this.props = {
//           ...this.props,
//           style: [customProps.style, this.props.style]
//       };
//       try {
//           return TextRender.apply(this, arguments);
//       } finally {
//           this.props = oldProps;
//       }
//   };
// };

console.log('text', Text);

export default App;
