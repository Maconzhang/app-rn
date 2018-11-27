import React, { Component } from 'react'
import { Alert, StyleSheet, Text,
    ImageBackground, TouchableOpacity, View, PixelRatio,
    Image
 } from 'react-native'
import { MapView } from 'react-native-amap3d'

const styles = StyleSheet.create({
  customIcon: {
    width: 40,
    height: 40,
  },
  customInfoWindow: {
    backgroundColor: 'rgba(0,0,0,1.0)',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#689F38',
    marginBottom: 5,
  },
  customMarker: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    width: 40,
    height: 50    
  },
  markerText: {
    color: 'black',
    zIndex: 99,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default class MarkerExample extends Component {
    constructor() {
        super()
        console.log('log', PixelRatio.get());
        
    }
  static navigationOptions = {
    title: '添加标记',
  }

  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.mounted = true
    setInterval(() => {
      if (this.mounted) {
        this.setState({ time: new Date() })
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.mounted = false
  }

  _coordinates = [
    {
      latitude: 39.806901,
      longitude: 116.397972,
    },
    {
      latitude: 39.806901,
      longitude: 116.297972,
    },
    {
      latitude: 39.906901,
      longitude: 116.397972,
    },
    {
      latitude: 39.706901,
      longitude: 116.397972,
    },
  ]

  _points = Array(100).fill(0).map(() => ({
    latitude: 39.5 + Math.random(),
    longitude: 116 + Math.random(),
  }))

  

  _onMarkerPress = () => Alert.alert('onPress')
  _onInfoWindowPress = () => Alert.alert('onInfoWindowPress')
  _onDragEvent = ({ nativeEvent }) => Alert.alert(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)
  _onItemPress = point => Alert.alert(this._points.indexOf(point).toString())
  render() {
    return (
            // <View style={styles.customMarker}>
            //    <ImageBackground source={require('../../../img/bike_battery2.png')} style={{flex: 1, alignItems: 'center',
            //         justifyContent: 'center', width: 40, height: 40 }}>
            //         <Text style={styles.markerText}>100%</Text>
            //    </ImageBackground>
            // </View>
      <MapView style={StyleSheet.absoluteFill}>
      { this._points.map(item => {
         return ( 
            <MapView.Marker
            title="自定义 View"
            icon={() => (
              <View style={styles.customMarker}>
                 <ImageBackground source={require('../../../img/bike_battery2.png')} style={{flex: 1, alignItems: 'center',
                      justifyContent: 'center', width: 40, height: 40 }}>
                      <Text style={styles.markerText}>100%</Text>
                 </ImageBackground>
              </View>
             )}
            coordinate={item}
          /> 
         )
      })}
        {/* <MapView.Marker
            active
          image="bike_battery1"
          title="自定义图片"
          onPress={this._onMarkerPress}
          coordinate={this._coordinates[2]}
        >
        </MapView.Marker>
        <MapView.Marker color="green" coordinate={this._coordinates[1]} >
          <TouchableOpacity activeOpacity={0.9} onPress={this._onInfoWindowPress}>
            <View style={styles.customInfoWindow}>
              <Text>自定义信息窗口</Text>
              <Text>{this.state.time.toLocaleTimeString()}</Text>
            </View>
          </TouchableOpacity>
        </MapView.Marker>*/}
        <MapView.Marker
          title="自定义 View"
          icon={() => (
            <View style={styles.customMarker}>
               <ImageBackground source={require('../../../img/bike_battery2.png')} style={{flex: 1, alignItems: 'center',
                    justifyContent: 'center', width: 40, height: 40 }}>
                    <Text style={styles.markerText}>100%</Text>
               </ImageBackground>
            </View>
           )}
          coordinate={this._coordinates[3]}
        /> 
      </MapView>
    )
  }
}