<template>
    <div class="item clearfix">
        <input type="checkbox" class="checkbox" :checked="checked" v-on:click.prevent="changeStatus"/>
        <p class="content">{{title}}</p>
        <div class="remove" v-on:click.prevent="remove">x</div>
        <div class="isTop" v-on:click.prevent="toggleTop" v-if="this.$route.path == '/'">📌</div>
     </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'list-item',
    props: ['id', 'title', 'flagTop', 'status'],
    data () {
        return {
            checked: false
        }
    },
    computed: {

    },
    created() {
        // 每个组件私有数据放在 data 中
        this.checked = !!this.status;
    },
    methods: {
        ...mapActions([
            'removeItem', 'toggleTopItem', 'changeItemStatus'
        ]),
        remove() {
            this.removeItem(this.id).then(result => {
                console.log('删除成功');
                this.$emit("getAllList");
            },error => {
                console.log(error);
            });
        },
        toggleTop() {
            
            this.toggleTopItem({id: this.id, flagTop: this.flagTop}).then(result => {
                console.log('更新成功');
                this.$emit("getAllList");
            },error => {
                console.log(error);
            });
        },
        changeStatus() {
            this.checked = !this.checked;
            this.changeItemStatus({id: this.id, checked: this.checked}).then(result => {
                console.log('更新成功');
                this.$emit("getAllList");
            },error => {
                console.log(error);
            });
        }
    }
}
</script>
<style scoped>
    .item {
        height: 44px;
        line-height: 44px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        padding: 0 45px;
        border-radius: 3px;
        border-left: 5px solid #629A9C;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    }
    .item .checkbox {
        position: absolute;
        width: 22px;
        height: 22px;
        top: 50%;
        transform: translateY(-50%);
        left: 14px;
        cursor: pointer;
    }
    .item .content {
        width: 60%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #000;
    }
    .item .remove {
        position: absolute;
        top: 50%;
        right: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #ababab;
        font-size: 20px;
        cursor: pointer;
    }
    /* .item .edit {
        position: absolute;
        top: calc(50% + 3px);
        right: 40px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #ababab;
        font-size: 14px;
    } */
    .item .isTop {
        position: absolute;
        top: calc(50% + 3px);
        right: 40px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #ababab;
        font-size: 14px;
    }
</style>
