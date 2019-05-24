<template>
    <header>
        <div class="content clearfix">
            <router-link to="/" class="goHome">TodoList</router-link>
            <input type="text" placeholder="搜索">
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data () {
        return {

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
