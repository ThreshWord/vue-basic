import {get,post} from './http'

// 登录相关
export const authorityRequest = {
    getKey:(data:any)=>{get('a',data)},
    login:(data:any)=>(get('a',data)),
    logout:(data:any)=>(get('b',data))
}
// 菜单相关
export const menuRequest = {
    add:(data:any) => (post('a',data))
}