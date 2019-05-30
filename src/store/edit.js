import { addMemo, getMemo, updateMemo } from '../data/axios'
import router from '../router'

export default {
    state: {
        title: '',
        desc: '',
        options: {
            placeholder: ''
        }
    },
    mutations: {
        // 填充 title desc 数据
        memoInfo(state, info) {
            state.title = info.title || '';
            state.desc = info.description || '';
        },
        // 填充 desc 数据
        updateDesc(state, desc) {
            state.desc = desc;
        },
        // 填充 title 数据
        updateTitle(state, title) {
            state.title = title;
        }
    },
    actions: {
        // 添加新事项
        addItem({ commit, state }, id) {
            if (state.title && !id) {
                // 添加新事项
                addMemo(state.title,state.desc).then(res => {
                    console.log('添加成功');
                    // 跳转回首页
                    setTimeout(function(){
                        router.push('/');
                    }.bind(this),2000);
                });
            }
        },
        // 修改
        updateItem({ commit, state }, id) {
            if (state.title && id) {
                // 编辑旧事项
                updateMemo(id, state.title, state.desc).then(res => {
                    console.log('修改成功');
                    // 跳转回首页
                    setTimeout(function(){
                        router.push('/');
                    }.bind(this),2000);
                });
            }
        },
        // 获取单条事项info
        getSingleItem({ commit, state }, id) {
            getMemo(id).then(result => {
                commit('memoInfo', result.data[0]);
            },error => {
                console.log(error);
            });
        }
        
    }
};