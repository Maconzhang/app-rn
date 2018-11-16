import React, { Component } from 'react'
import { View, Text, Button, Slider, Picker, Switch, ScrollView, Modal,
    ProgressBarAndroid,
    RefreshControl,
    ToolbarAndroid,
    TouchableHighlight,
    CameraRoll,
    DatePickerAndroid
 } from 'react-native'

export default class example extends Component {
    constructor(props) {
        super(props);
        console.log('props', props, this)
        this.state = {
            suggestType: [
                { label: '穿衣', prop: 'dressing' },
                { label: '紫外线强度', prop: 'uv' },
                { label: '洗车', prop: 'car_washing' },
                { label: '旅游', prop: 'travel' },
                { label: '感冒', prop: 'flu' },
                { label: '运动', prop: 'sport' },
            ],
            language: '',
            switchValue: false,
            modalVisible: false,
            refreshing: false,
            photos: ''
        }
        this.switchToggle = this.switchToggle.bind(this);
    }

    switchToggle(e) {
        console.log('e', e)
        this.setState({ switchValue: e })
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        })
      }
    
    onActionSelected = (position) => {
        if (position === 0) { // index of 'Settings'
          showSettings();
        }
    }

    _openCameraRoll()  {
        console.log('_openCameraRoll');
        var _that = this;   
        //  CameraRoll.getPhotos(
        //      {first:5}//参数 获取最近五张图片
        //      ).done( 
        //      function (data) { //成功的回调     
        //          console.log('alldata', data);    
        //         //  var edges = data.edges;   
        //         //  var photos = [];     
        //         //  for (var i in edges) { 
        //         //      photos.push(edges[i].node.image.uri);  
        //         //  }         
        //         //  _that.setState({ 
        //         //      //通过打印的object，找到如下图片路径   
        //         //      photoSource: {uri: data.edges[3].node.image.uri}  
        //         // });        
        //      },         
        //      function (error) { //失败的回调
        //          console.log(error.message);       
        //      } 
        //  )
         
    }

    async _openDatePicker () {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              // 要设置默认值为今天的话，使用`new Date()`即可。
              // 下面显示的会是2020年5月25日。月份是从0开始算的。
              date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }

    render() {
        return(
            <View style={{ marginBottom: 220, height: 200 }}>
                 
                <View style={{ marginBottom: 40, height: 200 }}>
                    <Text>Slider1</Text>
                    <Slider style={{ width: 200 }}></Slider>
                    <Text>Picker</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker> 
                    <Text>Button</Text>
                    {/* <Button
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    /> */}
                    <Text>Switch</Text>
                    <Switch onValueChange={(e) => this.switchToggle(e)} 
                    value={this.state.switchValue}></Switch>
                    <Text>Modal</Text>
                    
                    <Text>ProgressBarAndroid</Text>
                    <ProgressBarAndroid
                    styleAttr="Horizontal"
                    progress={0.5}
                    />
                    <Text>ToolbarAndroid 工具栏目1231</Text>
                    {/* <Button onPress={ this._openCameraRoll.bind(this) } title={'xxx'}></Button> */}
                    <Text>TouchableHighlight</Text>
                    <TouchableHighlight style={{height: 30, width: 200, backgroundColor: 'pink'}} >
                        <Text>TouchableHight</Text>
                    </TouchableHighlight>
                    <Text>DatePickerAndroid  Android 日期选择器</Text>
                    <Button onPress={ this._openDatePicker.bind(this) } title={'DatePicker'} style={{ height: 20}}></Button>
                </View>
            </View>
        )
    }
}