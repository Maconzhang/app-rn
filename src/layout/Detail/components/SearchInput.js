import React, { Component } from 'react'
import { 
    View,
    TextInput
 } from 'react-native'

export default class SearchInput extends Component {
    constructor(props) {
        super(props)
    }

    _changeValue (e) {
        console.log('c_value',  e.nativeEvent.text, this.props);
        this.props.inputValue =  e.nativeEvent.text
    }
    render() {
        return (
                <TextInput 
                autoFocus={true}
                selectionColor={'white'}
                placeholder="搜索"
                placeholderTextColor={'white'}
                style={{ width: 90 + '%',color: 'white'}}
                onChange={(e) => this._changeValue(e)}></TextInput>
        )
    }
}