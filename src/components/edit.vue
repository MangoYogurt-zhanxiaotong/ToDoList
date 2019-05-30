<template>
    <div class="edit">
        <form action="">
            <label for="title">标题（必填项）</label>
            <input type="text" placeholder = "请输入标题" name="title" v-model="title">
            <label for="title">描述</label>
            <quill-editor 
                v-model="desc" 
                ref="myQuillEditor"
                :options="options">
            </quill-editor>
            <div class="add" v-on:click="update" v-if="this.id">更新</div>
            <div class="add" v-on:click="add" v-else>添加</div>
        </form>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'edit',
    props: ['id'],
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState({
            'options': state => state.edit.options
        }),
        title: {
            get() {
                return this.$store.state.edit.title
            },
            set(title) {
                this.$store.commit('updateTitle', title);
            }
        },
        desc: {
            get() {
                return this.$store.state.edit.desc
            },
            set(desc) {
                this.$store.commit('updateDesc', desc);
            }
        }
    },
    created() {
        if(this.id) {
            this.getSingleItem(this.id);
        }
    },
    methods: {
        ...mapActions([
            'addItem', 'updateItem', 'getSingleItem'
        ]),
        add() {
            this.addItem(this.id);
        },
        update() {
            this.updateItem(this.id);
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
