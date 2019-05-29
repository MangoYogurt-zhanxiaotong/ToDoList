<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="title">
            <p class="status">正在进行</p>
            <p class="clear" v-on:click="clearAll">clear</p>
            <p class="number">{{finishedList.length || 0}}</p>
            </div>
            <!-- 单个条目 -->
            <div class="list" v-for="item in finishedList" :key="item.ID">
                <list-item :id="item.ID" :title="item.title" :flagTop="item.flagTop" @getAllList="getAllFinishedList"></list-item>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/base/header'
import ListItem from '@/base/list-item'
import Footer from '@/base/footer'
import { getFinishedList, deleteMemoBatch } from '../data/axios'

    export default {
        name: 'FinishList',
        components: {
            'Header': Header,
            'list-item': ListItem,
            'Footer': Footer
        },
        data () {
            return {
                finishedList: []
            }
        },
        created () {
            this.getAllFinishedList();
        },
        methods: {
            // 获取所有已完成的事项
            getAllFinishedList() {
                getFinishedList().then(res => {
                    console.log(res);
                    this.finishedList = res.data;
                });
            },
            // 批量删除
            clearAll() {
                deleteMemoBatch(1).then(res => {
                    console.log('删除成功');
                    this.getAllFinishedList();
                });
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 60%;
        margin: 0 auto;
        padding: 20px 0;
    }
    .title {
        margin-bottom: 20px;
        position: relative;
    }
    .title .status {
        font-size: 24px;
        color: #000;
        font-weight: 600;
        display: inline-block;
    }
    .title .clear {
        background-color: cadetblue;
        color: #fff;
        border-radius: 4px;
        display: inline-block;
        padding: 2px 3px;
        margin-left: 10px;
        cursor: pointer;
    }
    .title .number {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #E6E6FA;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
</style>
