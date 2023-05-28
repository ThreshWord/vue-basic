/**
 * 表格操作按钮
 * @param {String|boolean} fixed [操作列对其方式同element-plus]
 * @param {String} width [操作列宽度]
 * @param {String} width [操作列名称]
 * @param {String} icon [操作按钮Icon]
 * @param {string} contents [操作按钮提提示文字]
 * @param {void} method [操作按钮对应方法]
 * @param {string} color [操作按钮颜色]
 * @param {void} disabled [操作按钮是否隐藏返回布尔值]
 */
export interface HandleOption {
    fixed:string|boolean,
    width:number,
    label:string,
    option:{
        icon:string,
        contents:string,
        method:()=>void,
        color:string,
        disabled:()=>boolean
    }[]
}
/**
 * 表格列配置字段
 * @param {number} width [当且列宽度，默认自适应]
 * @param {string} label [当且列宽label名称]
 * @param {string} prop [当且列所属子段名]
 * @param {Object}  status [当前开启状态颜色展示,不填及不开启状态颜色展示]
 * */ 
export interface Column {
    width?:number,
    label:string,
    prop:string,
    status?:{color:string,value:string}[],
}