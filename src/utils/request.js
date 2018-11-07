
const request = (params) => {
    const { method = "", headers = {}, body = "", url = '', baseUrl = "https://www.baidu.com/" } = params;
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}url`, {
                method: method || "POST",
                headers: Object.assign({}, {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }, headers),
                body
            })
            .then(response =>
                response.json() //把数据解析成json格式,然后取出
            )
            .then(result => {
                resolve(result); //表示完成
            })
            .catch(error => {
                reject(error); //表示失败
            })
    })
}

module.exports = {
    request
}