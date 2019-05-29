<template>
    <div class="edit">
        <form action="">
            <label for="title">标题（必填项）</label>
            <input type="text" placeholder = "请输入标题" name="title" v-model="title">
            <label for="title">描述</label>
            <textarea name="desc" id="" cols="30" rows="10" placeholder="请输入描述" v-model="desc"></textarea>
            <div class="add" v-on:click="add">添加</div>
        </form>
    </div>
</template>
<script>
import { addMemo, getMemo, updateMemo } from '../data/axios'
export default {
    name: 'edit',
    props: ['id'],
    data () {
        return {
            title: '',
            desc: ''
        }
    },
    created() {
        // 编辑获得之前的信息
        if(this.id) {
            getMemo(this.id).then(result => {
                this.title = result.data[0].title;
                this.desc = result.data[0].description;
            },error => {
                console.log(error);
            });
        }
    },
    methods: {
        add() {
            if (this.title && !this.id) {
                // 添加新事项
                addMemo(this.title,this.desc).then(res => {
                    console.log('添加成功');
                    // 跳转回首页
                    setTimeout(function(){
                        this.$router.push('/')
                    }.bind(this),2000);
                });
            } else if (this.title && this.id) {
                // 编辑旧事项
                updateMemo(this.id, this.title, this.desc).then(res => {
                    console.log('修改成功');
                    // 跳转回首页
                    setTimeout(function(){
                        this.$router.push('/')
                    }.bind(this),2000);
                });
            }
        }
    }
}
</script>
<style scoped>
    .edit {
        width: 60%;
        margin: 0 auto;
        padding: 20px 0;
    } 
    label {
        display: block;
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    input {
        display: block;
        height: 2.5rem;
        margin-bottom: 30px;
        width: 100%;
        border-radius: 3px;
        padding: 0 10px;
        font-size: 16px;
        color: #000;
    }
    textarea {
        font-size: 16px;
        width: 100%;
        outline: 0;
        border: none;
        border-radius: 3px;
        padding: 10px;
        color: #000;
    }
    .add {
        width: 50px;
        line-height: 30px;
        height: 30px;
        color: #ddd;
        cursor: pointer;
        font-size: 22px;
        background-color: cadetblue;
        margin: 3rem auto 0 auto;
        padding: 5px 20px;
        border-radius: 20px;
        text-align: center;
    }
</style>
