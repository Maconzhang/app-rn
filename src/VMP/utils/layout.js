'use strict'
import {Dimensions, PixelRatio} from 'react-native';
const uiWidth = 360;//这里的值，是设计稿中的宽度，你们根据自己的设计稿改动，本人拿到的设计稿是iphone6的
const uiHeight = 640;//这里的值，是设计稿中的高度，你们根据自己的设计稿改动，本人拿到的设计稿是iphone6的
const pixel = 1 / PixelRatio.get();
const screenWidth = Dimensions.get('window').width; //设备宽度
const screenHeight = Dimensions.get('window').height; //设备高度
const pixelRatio = PixelRatio.get();//像素密度
const fontScale = PixelRatio.getFontScale();//字体缩放比例
const scale = Math.min(screenHeight / 640, screenWidth / 360);

module.exports = {

    /*宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：utils.autoWidth(50)*/
    autoWidth: function(value)  {
        return screenWidth * value / uiWidth;
    },
    /*高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：utils.autoheight(50)*/
    autoHeight: function (value) {
        return screenHeight * value / uiHeight;
    },
    /*字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：utils.setSpText(17)*/
    setSpText: function (number) {
        number = Math.round((number * scale + 0.5) * pixelRatio / fontScale);
        return number / PixelRatio.get();
    }
     
};