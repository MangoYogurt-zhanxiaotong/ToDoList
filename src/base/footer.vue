<template>
    <footer>
        <div class="content clearfix">
            <router-link to="/finishList" class="finished">已完成</router-link>
            <router-link to="/edit" class="add">添加</router-link>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data () {
        return {

        }
    }
}
</script>
<style scoped>
    footer{
        background-color: #000;
        color: #fff;
        font-size: 14px;
        padding: 5px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    footer div.content {
        width: 60%;
        margin: 0 auto;
    }
    footer div.content:after {
        content: '';
        display: block;
    }
    .finished {
        width: 100px;
        line-height: 50px;
        color: #ddd;
        cursor: pointer;
        font-size: 22px;
        background-color: cadetblue;
        margin: 0 auto;
        padding: 5px 20px;
        border-radius: 20px;
    }
    .add {
        color: #ddd;
        cursor: pointer;
        font-size: 22px;
        background-color: cadetblue;
        margin: 0 auto;
        border-radius: 20px;
        float: right;
        height: 40px;
        width: 80px;
        vertical-align: middle;
        line-height: 40px;
        text-align: center;
    }
</style>
