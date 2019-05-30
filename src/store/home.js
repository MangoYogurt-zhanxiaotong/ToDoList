import { getOnGoingList, deleteMemoBatch } from '../data/axios'

export default {
    state: {
        onGoingList: [],
        topList: [],
        notTopList: [],
        status: 0
    },
    mutations: {
        // 置顶列表
        getTopList(state) {
            state.topList = state.onGoingList.filter(item => {
                return item.flagTop == 1;
            });
        },
        // 非置顶列表
        getNotTopList(state) {
            state.notTopList = state.onGoingList.filter(item => {
                return item.flagTop == 0;
            });
        },
        // 填充列表数据
        updateAllList(state, data) {
            state.onGoingList = data;
        }
    },
    actions: {
        // 获取所有进行中的事项
        getAllList({ commit }) {
            getOnGoingList().then(res => {
                commit('updateAllList', res.data);
                commit('getTopList');
                commit('getNotTopList');
            });
        },
        // 批量删除
        clearAll({ state, diapatch }) {
            deleteMemoBatch(state.status).then(res => {
                console.log('删除成功');
                diapatch('getAllList');
            });
        }
    }
};