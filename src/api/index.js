import {
    request
} from "../utils/request"
// import { log } from "util";
// ${baseUrl}/vmp-region/task/vehicle/${no}/openlock
const idleVehicle = 'http://idle.erp.xlgxapp.com';
const baseUrl = "http://rebattery.erp.xlgxapp.com"
const b = `http://rebattery.erp.xlgxapp.com/`;
const openLock = (no) => {
    // const url = `${idleVehicle}/idle/report/info/region`
    var params = {
        method: 'Post',
        headers: Object.assign({}, {
            Accept: "application/json",
            "Content-Type": "application/json"
        }),
    }

    fetch(`${b}/vmp-region/task/vehicle/${no}/openlock`, params)
        .then(response => {
            // response.json() //把数据解析成json格式,然后取出
            console.log('re', response);
            return response.json()
        })
        .then(result => {
            // resolve(result); //表示完成
            console.log('result', result);
        })
        .catch(error => {
            // reject(error); //表示失败
            console.log('error', error);

        })
}

const closeLock = (no) => {
    var params = {
        method: 'Post',
        headers: Object.assign({}, {
            Accept: "application/json",
            "Content-Type": "application/json"
        }),
    }
    fetch(`${b}/vmp-region/task/vehicle/${no}/closelock`, params)
        .then(response => {
            // response.json() //把数据解析成json格式,然后取出
            console.log('re', response);
            return response.json()
        })
        .then(result => {
            // resolve(result); //表示完成
            console.log('result', result);
        })
        .catch(error => {
            // reject(error); //表示失败
            console.log('error', error);

        })
}

module.exports = {
    openLock,
    closeLock
}