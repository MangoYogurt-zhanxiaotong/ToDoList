<template>
    <header>
        <div class="content clearfix">
            <router-link to="/" class="goHome">TodoList</router-link>
            <input type="text" placeholder="搜索" v-model="text" @keyup.enter="find">
        </div>
    </header>
</template>
<script>
import { search } from '../data/axios'
export default {
    name: 'Header',
    data () {
        return {
            text: ''
        }
    },
    methods: {
        find() {
            let status = this.$route.name == 'Home' ? 0 : 1;
            search(this.text, status).then(result => {
                console.log(result);
            }, error => {
                console.log(error);
            });
        }
    }
}
</script>
<style scoped>
    header{
        background-color: #000;
        color: #fff;
        font-size: 14px;
        padding: 5px;
    }
    header div.content {
        width: 60%;
        margin: 0 auto;
    }
    header div.content:after {
        content: '';
        display: block;
    }
    .goHome {
        width: 100px;
        line-height: 50px;
        color: #ddd;
        cursor: pointer;
        font-size: 24px;
    }
    input {
        width: 60%;
        height: 30px;
        margin-top: 10px;
        border-radius: 5px;
        border: none;
        float: right;
        padding: 0 1rem;
    }
</style>
