<template>
    <div class="edit">
        <form action="">
            <label for="title">标题（必填项）</label>
            <input type="text" placeholder = "请输入标题" name="title" v-model="title">
            <label for="title">描述</label>
            <!-- <textarea name="desc" id="" cols="30" rows="10" placeholder="请输入描述" v-model="desc"></textarea> -->
            <quill-editor 
                v-model="desc" 
                ref="myQuillEditor"
                :options="options"
                @blur="onEditorBlur($event)">
            </quill-editor>
            <div class="add" v-on:click="update" v-if="this.id">更新</div>
            <div class="add" v-on:click="add" v-else>添加</div>
        </form>
    </div>
</template>
<script>
import { addMemo, getMemo, updateMemo } from '../data/axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'

export default {
    name: 'edit',
    props: ['id'],
    data () {
        return {
            title: '',
            desc: '',
            options: {
                placeholder: ''
            }
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
                addMemo(this.title,JSON.stringify(this.desc)).then(res => {
                    console.log('添加成功');
                    // 跳转回首页
                    setTimeout(function(){
                        this.$router.push('/');
                    }.bind(this),2000);
                });
            }
        },
        update() {
            if (this.title && this.id) {
                // 编辑旧事项
                updateMemo(this.id, this.title, this.desc).then(res => {
                    console.log('修改成功');
                    // 跳转回首页
                    setTimeout(function(){
                        this.$router.push('/');
                    }.bind(this),2000);
                });
            }
        },
        onEditorBlur(editor) {
            console.log(this.desc);
        }
    }
}
</script>
<style scoped>
    .edit {
        width: 70%;
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
        box-sizing: border-box;
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
        margin: 5rem auto 0 auto;
        padding: 5px 20px;
        border-radius: 20px;
        text-align: center;
    }
    .quill-editor {
        height: 300px;
        background-color: #fff;
        border-radius: 10px;
    }
    .quill-editor .ql-container {
        height: 200px;
    }
    .limit {
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-align: right;
    }
    .limit span {
        color: #ee2a7b;
    }
    .ql-snow .ql-editor img {
        max-width: 480px;
    }
    .ql-editor .ql-video {
        max-width: 480px;
    }
</style>
