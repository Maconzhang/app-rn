/** @format */

// import babelHelpers from 'babel-helpers';
// import applyDecoratedDescriptor from '@babel/runtime/helpers/esm/applyDecoratedDescriptor';

// import initializerDefineProperty from '@babel/runtime/helpers/esm/initializerDefineProperty';

// Object.assign(babelHelpers, { applyDecoratedDescriptor, initializerDefineProperty });

import {AppRegistry} from 'react-native';
// import App from './App';

//now
// import App from './src/layout/index';

//vmp
import App from './src/VMP/layout/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
