import React, { Component } from 'react'
import { 
    View,
    TextInput
 } from 'react-native'

 import SearchStore from '../store/SearchStore'
 import { inject, Provider, observer } from 'mobx-react';

@observer
export default class SearchInput extends Component {
    
    _changeValue (e) {
        SearchStore._changeInputValue(e.nativeEvent.text);
    }
    render() {
        return (
                <TextInput 
                value={SearchStore.inputValue}
                autoFocus={true}
                selectionColor={'white'}
                placeholder="搜索"
                placeholderTextColor={'white'}
                style={{ width: 90 + '%',color: 'white'}}
                onChange={(e) => this._changeValue(e)}></TextInput>
        )
    }
}