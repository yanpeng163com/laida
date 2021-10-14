import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 600000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        //console.log('request token')
        // console.log(store.getters.token)
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            // config.headers['X-Token'] = getToken()
            // config.headers['X-Access-Token'] = getToken()
        }

        // config.headers['X-Access-Token'] = getToken()
        //console.log('request headers token')
        //console.log(config.headers['X-Access-Token'])
        for (var key in config.params) {
            if (config.params[key] == "") {
                config.params[key] = null
            }
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
            // console.log(res)
            // console.log(response)
            // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 200) {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
        } else {
            return res
        }
    },
    error => {
        // console.log('err', error) // for debug
        if (error.response.status === 500) {
            if (error.response.headers.tokeninvalid) {
                store.dispatch('user/resetToken').then(() => {
                    location.reload()
                })
            }
        }
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service