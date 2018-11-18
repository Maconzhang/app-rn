//https://api.seniverse.com/v3/weather/now.json?key=p40tdqqulcnjnhkj&location=beijing&language=zh-Hans&unit=c

const apiKey = 'p40tdqqulcnjnhkj';
import { request } from './request'
const location = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.seniverse.com/v3/weather/now.json?key=${apiKey}&location=宁波&language=zh-Hans&unit=c`)
        .then(response => {
            // response.json() //把数据解析成json格式,然后取出
            console.log('re', response);
            return response.json();
        })
        .then(result => {
            console.log('result', result);
            return resolve(result.results); //表示完成
        })
        .catch(error => {
            console.log('error', error);
            return reject(error); //表示失败
        })
    })
}
// let baseUrl = `https://api.seniverse.com/v3/weather/daily.json?key=p40tdqqulcnjnhkj&location=beijing&language=zh-Hans&unit=c&start=-1&days=15`

const daily = (area) => {
    var area = area || 'ningbo';
    const params = {
        url: `https://api.seniverse.com/v3/weather/daily.json?key=${apiKey}&location=${area}&language=zh-Hans&unit=c&start=-1&days=5`,
    }
    return request(params);
}

const life = () => {
    const params = {
        url: `https://api.seniverse.com/v3/life/suggestion.json?key=p40tdqqulcnjnhkj&location=ningbo&language=zh-Hans`,
    }
    return request(params);
}

module.exports = {
    location,
    daily,
    life
}

