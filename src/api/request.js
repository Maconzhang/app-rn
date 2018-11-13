const request = (params) => {
    const { url, method = '', body = '', headers = {}, parseType = 'json' } = params;
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: method || 'GET',
            headers: Object.assign({}, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, ),
            body: body
        })
        .then(response => {
            // response.json() //把数据解析成json格式,然后取出
            console.log('re', response);
            switch (parseType) {
                case 'json':
                    return response.json();
                case 'text':
                    return response.text();
                default:
                    break;
            }
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

module.exports = {
    request
}