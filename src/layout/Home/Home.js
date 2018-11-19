import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createMaterialBottomTabNavigator
} from 'react-navigation';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
export default HomeStack = createMaterialTopTabNavigator({
    First: {
      screen: First,
      navigationOptions: () => ({
        tabBarLabel: '首页'
      })
    },
    Second: {
      screen: Second,
      navigationOptions: () => ({
        tabBarLabel: '前端'
      })
    },
    Third: {
      screen: Third,
      navigationOptions: () => ({
        tabBarLabel: '产品'
      })
    },
  }, {
    tabBarPosition: 'top',
    tabBarOptions: {
      upperCaseLabel: false,
      style: {
        borderBottomColor: 'red',
        color: 'black',
      },
      tabStyle: {
        width: 80,
        borderBottomColor: 'red',
      },
      inactiveTintColor: '#EDEEEE',
      activeTintColor: 'white', // label和icon的前景色 活跃状态下（选中） 。
      showIcon: false, // 是否显示图标，默认关闭。
      labelStyle: {
        padding: 0,
        fontSize: 16,
        width: 50
      }, // label的样式。
      indicatorStyle: {
        height: 3,
        backgroundColor: 'white',
        // width: 50,
        // marginLeft: 25
      }
    }
  })