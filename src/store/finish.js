import { getFinishedList, deleteMemoBatch } from '../data/axios'

export default {
    state: {
        finishedList: [],
        status: 1
    },
    mutations: {
        // 填充数据
        updateList(state, data) {
            state.finishedList = data;
        }
    },
    actions: {
        // 获取所有已完成的事项
        getAllFinishedList({ commit, state }) {
            getFinishedList().then(res => {
                commit('updateList', res.data);
            });
        },
        // 批量删除
        clearAll({ dispatch, state }) {
            deleteMemoBatch(state.status).then(res => {
                console.log('删除成功');
                dispatch('getAllFinishedList');
            });
        }
    }
};