import React, { Component } from 'react'
import { StyleSheet, Alert, ViewPropTypes, Text  } from 'react-native'
import { MapView } from 'react-native-amap3d'

export default class MultiPointExample extends Component {
  constructor() {
    super();
    console.log('eee', { ...ViewPropTypes }, StyleSheet);
    
  }
  static navigationOptions = {
    title: '海量点',
  }

  _points = Array(1000).fill(0).map(() => ({
    latitude: 39.5 + Math.random(),
    longitude: 116 + Math.random(),
  }))

  _onItemPress = point => {
    console.log('e', point, this._points.indexOf(point).toString());
    // Alert.alert(this._points.indexOf(point).toString())
  }

  _onDragEvent = point => {
    console.log('e', point, this._points.indexOf(point).toString());
    // Alert.alert(this._points.indexOf(point).toString())
  }

  _onInfoWindowPress = point => {
    console.log('e', point, this._points.indexOf(point).toString());
    // Alert.alert(this._points.indexOf(point).toString())
  }

  render() {
    return (
      <MapView zoomLevel={12} style={StyleSheet.absoluteFill}>
        {/* <MapView.MultiPoint 
          style={MainStyle.icon}
          image="bike_battery2"
          points={this._points}
          onItemPress={this._onItemPress}
        >
        </MapView.MultiPoint> */}
       { 
         this._points.map(item => {
          <MapView.Marker
            active
            draggable
            title="一个可拖拽的标记"
            // description={this.state.time.toLocaleTimeString()}
            onDragEnd={this._onDragEvent}
            onInfoWindowPress={this._onInfoWindowPress}
            coordinate={this._points[0]}
          />
        })
      }
        
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
