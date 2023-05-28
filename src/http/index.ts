import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"; 
import QS from "qs"
import { ERROR,FORBIDDEN,UNAUTHORIZED,NOTFOUND,SUCCESS } from "./statusCode";
import { useRouter } from "vue-router";
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API
axios.defaults.timeout = 30000 //30s

// axios.defaults.withCredentials = true
const router = useRouter() 
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"

axios.defaults.transformRequest = data => QS.stringify(data)

// 请求
axios.interceptors.request.use((request:InternalAxiosRequestConfig<any>) => {

    let token = localStorage.getItem('token') 
    token && (request.headers.Authorization = token)
    return request
}, error => {
    return Promise.reject(error) // 返回错误
})
// 响应
axios.interceptors.response.use((response: AxiosResponse<any, any>) => {
    switch (response.status) {
        case SUCCESS:
            Promise.resolve(response)
            break;
        case NOTFOUND || ERROR:
            router.push({
                path:'/404'
            })
            break;
        case FORBIDDEN || UNAUTHORIZED:
            router.push({
                path:'/login'
            })
        break;
        default:
            break;
    }
    return response.data
}, error => {
    return Promise.reject(error)
})


export default axios