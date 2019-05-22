import axios from 'axios'
const qs = require('qs');
const baseURL = 'http://127.0.0.1:3000';

let $axios = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

function $fetchData(method, params, data){
    return new Promise((resolve,reject) => {
        $axios({
            method: method,
            url: params,
            data: qs.stringify(data)
        }).then(res => {
            let data = res.data;
            if(data.code == 200){
                resolve(data);
            }
        }).catch(err => {
            reject(err);
        });
    });
}

// 首页所有项目列表
export const getAllProjects = () => $fetchData('get','getProjects');

// 发布项目
export const release = (title, description, creator, money, deadLine) => $fetchData('post','release',{title, description, creator, money, deadLine});
