import React, { Component } from 'react'
import { StyleSheet, Alert, ViewPropTypes, Text  } from 'react-native'
import { MapView } from 'react-native-amap3d'
import HeaderLeft from './HeaderLeft'
import { setSpText, autoWidth, autoHeight } from './../../../utils/layout'
export default class MultiPointExample extends Component {
  constructor() {
    super();
  }
  
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: (
      <HeaderLeft navigation={navigation} />
    ),
    headerLeftContainerStyle: {
      width: 100 + '%',
    },
    headerStyle: {
        backgroundColor: '#2196F3'
    }
  })

  _points = Array(1000).fill(0).map(() => ({
    latitude: 39.5 + Math.random(),
    longitude: 116 + Math.random(),
  }))

  _onItemPress = point => {
    console.log('e', point, this._points.indexOf(point).toString());
  }

  _onDragEvent = point => {
    console.log('e', point, this._points.indexOf(point).toString());
  }

  _onInfoWindowPress = point => {
    console.log('e', point, this._points.indexOf(point).toString());
  }

  render() {
    return (
      <MapView zoomLevel={12} style={StyleSheet.absoluteFill}>
        <MapView.MultiPoint 
          style={MainStyle.icon}
          image="bike_battery2"
          points={this._points}
          onItemPress={this._onItemPress}
        >
        </MapView.MultiPoint>
      </MapView>
    )
  }
}
const MainStyle = StyleSheet.create({
  icon: {
    width: 10,
    height: 10
  },
  container: {
    width: 10,
    height: 10
  }
})
