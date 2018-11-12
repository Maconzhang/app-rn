//https://api.seniverse.com/v3/weather/now.json?key=p40tdqqulcnjnhkj&location=beijing&language=zh-Hans&unit=c

const apiKey = 'p40tdqqulcnjnhkj';

const location = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.seniverse.com/v3/weather/now.json?key=${apiKey}&location=beijing&language=zh-Hans&unit=c`)
        .then(response => {
            // response.json() //把数据解析成json格式,然后取出
            console.log('re', response);
            response.json();
        })
        .then(result => {
            console.log('result', result);
            resolve(result); //表示完成
        })
        .catch(error => {
            console.log('error', error);
            reject(error); //表示失败
        })
    })
}

module.exports = {
    location
}