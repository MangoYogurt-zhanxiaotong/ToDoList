import { deleteMemo, updateTop, updateStatus } from '../data/axios'

export default {
    state: {
        
    },
    mutations: {

    },
    actions: {
        // 删除
        removeItem({ commit }, id) {
            return deleteMemo(id);
        },
        // 置顶 与 取消置顶
        toggleTopItem({ commit, state }, payLoad) {
            return updateTop(payLoad.id, !payLoad.flagTop);
        },
        // 改变状态
        changeItemStatus({ commit,state }, payLoad) {
            return updateStatus(payLoad.id, payLoad.checked);
        }
    }
}