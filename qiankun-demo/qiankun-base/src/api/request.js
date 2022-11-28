import axios from 'axios'

const baseURL = '/'

export function request(config) {
    const instance = axios.create({
        baseURL,
        timeout: 30000,
        withCredentials: true,
        headers: {
            // 'Authorization': 'Bearer ' + getToken()
        }
    });

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        // console.log('拦截器')
        console.log(res)
        return res.data
    }, error => {
        console.log(error)
    })

    return instance(config)
}
