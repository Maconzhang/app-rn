// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
// import { Navigation } from 'react-native-navigation';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {

//     constructor(props) {
//         super(props);
//             this.state = {
//                 text: 'Useless Placeholder',
//                 pic: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
//                 username: '',
//                 password: ''
//             };
//      }

//     _handlePress() {
//         fetch('https://www.baidu.com').then(res => {
//           console.log('res', res);
//         }).catch(e => {
//           console.log('e', e);
          
//         })
//         console.log('Pressed!');
//     }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>Login</Text>
//         <TextInput
//             style={styles.loginInput}
//             placeholder={'请输入登录账号12'}
//             onChangeText={(text) => this.setState({text})}
//             value={this.state.username}
//           />
//         <TextInput
//             style={styles.loginInput}
//             placeholder={'请输入登录密码'}
//             secureTextEntry={true}
//             onChangeText={(text) => this.setState({text})}
//             value={this.state.password}
//           />
//         <View style={styles.loginBtn}>
//             <Button
//                 title={'登录账号'}
//                 color="#FCE74E"
//                 onPress={() => this._handlePress()}>
//             </Button>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   loginInput: {
//     width: 90 + "%",
//     height: 40,
//     width: 80 + '%',
//     borderColor: 'gray',
//     justifyContent:'center',
//     alignItems:'center',
//     borderWidth: 1,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   loginBtn: {
//     color: 'black',
//     fontSize: 20,
//     width: 80 + '%',
//     backgroundColor: '#E6E6FA',
//     borderColor: '#E6E6FA',
//     borderRadius: 5,
//     borderWidth: 1,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginTop: 10
//   }
// });
