import {format as formatUrl} from 'url'

const businessURL = "http://localhost:3000"
const Uri = {
    Members : '/member',
    Products:'/products',
    Orders:'/orders/O2333',
    OrderItems: '/orderItems'
}

const get = (uri, data, options) => fetchApi('get', uri, data, options)
const post = (uri, data, options) => fetchApi('post', uri, data, options)
const patch = (uri, data, options) => fetchApi('patch', uri, data, options)
const put = (uri, data, options) => fetchApi('put', uri, data, options)

const fetchApi = function (method, uri, data, options) {
    data = data || {}
    options = options || {}

    if (!uri.match(/^(http(s)?:)?\/\//)) {
        uri = businessURL + uri
    }
 
    return fetch(method === 'get' ? uri + formatUrl({query: data}) : uri,
        {
            method: method.toUpperCase(),
            headers: {
                'Content-Type': 'application/json'
            },
            body: method === 'get' ? undefined : JSON.stringify(data)
        });
}

export {Uri, get, post, put, patch}