const baseUrl = 'https://mywebsite.com/endpoint/'


const request = (params) => {
    const { method, headers, body }
    return new Promise((resolve, reject) => {
        fetch("https://mywebsite.com/endpoint/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstParam: "yourValue",
                secondParam: "yourOtherValue"
            })
        });
    })
}