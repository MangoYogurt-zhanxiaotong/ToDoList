<template>
    <div class="edit">
        <form action="">
            <label for="title">标题</label>
            <input type="text" placeholder = "请输入标题" name="title">
            <label for="title">描述</label>
            <textarea name="desc" id="" cols="30" rows="10" placeholder="请输入描述"></textarea>
            <div class="add">添加</div>
        </form>
    </div>
</template>
<script>
import { addMemo } from '../data/axios'
export default {
    name: 'edit',
    data () {
        return {

        }
    },
    created () {
        //this.add();
    },
    methods: {
        // add(){
        //     addMemo('remind1','desc1').then(res => {
        //         console.log(res);
        //     });
        // }
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
