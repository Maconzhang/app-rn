import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'

const HeaderLeft = ({ navigation }) =>{
    const onPress = () =>{
        // navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
                <Text>首页</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
                <Text>前端</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
                <Text>产品</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:20,
        marginTop:20,
        flexDirection: 'row' 
    }
})

export default HeaderLeft