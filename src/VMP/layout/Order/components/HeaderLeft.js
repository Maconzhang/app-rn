import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator, ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import { setSpText, autoWidth, autoHeight } from './../../../utils/layout'
export default class HeaderLeft extends Component {
    constructor(props) {
      super(props);
      this.navigation = props.navigation;
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
          <View style={Nav.container}>
                <Image style={Nav.LeftIcon} source={require("../../../img/delete_black.png")}></Image>
                <Text style={Nav.txt}>抢单</Text>
                <Text style={Nav.txt2}>筛选</Text>
          </View>
      )
    }
  }

  const Nav = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingTop: autoHeight(8),
      paddingBottom: autoHeight(8),
      paddingLeft: autoWidth(16),
      paddingRight: autoWidth(16),
      lineHeight: autoHeight(56),
      height: autoHeight(56),
      width: '100%',
    },
    LeftIcon: {
      width: autoWidth(20),
      height: autoHeight(15),
      marginTop: autoHeight(16),
    },
    txt: {
      textAlign: 'center',
      height: autoHeight(40),
      fontSize: setSpText(20),
      marginLeft: autoWidth(41),
      marginTop: autoHeight(8)
    },
    txt2: {
      position: 'absolute',
      right: autoWidth(16),
      top: autoHeight(25),
      fontSize: setSpText(14)
    },
  })
  