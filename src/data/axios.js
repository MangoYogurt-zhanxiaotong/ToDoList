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

// 正在进行的事项列表
export const getOnGoingList = () => $fetchData('get','getOnGoingList');

// 已完成列表
export const getFinishedList = () => $fetchData('get','getFinishedList');

// 添加新事项
export const addMemo = (title, description) => $fetchData('post','addMemo',{title, description});

// 编辑
export const editMemo = (id, title, description) => $fetchData('post','editMemo',{id, title, description});
