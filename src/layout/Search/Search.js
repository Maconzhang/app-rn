import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createMaterialBottomTabNavigator
  } from 'react-navigation';
import SearchHeader from './components/SearchHeader'
import SearchContainer from './components/container'

export default SearchPage = createMaterialTopTabNavigator({
    SearchContainer: {
        screen: SearchContainer,
        navigationOptions: ({ navigation, screenProps }) => ({
            tabBarComponent: SearchHeader,
            headerStyle: {
                backgroundColor: '#2196F3',
            },
            headerTitleStyle: {
                width: 100 + '%',
                textAlign: 'center',
                color: 'white'
            }
        })
    }
})