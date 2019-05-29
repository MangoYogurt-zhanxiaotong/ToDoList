<template>
  <div>
      <Header></Header>
      <div class="container">
        <div class="title">
          <p class="status">正在进行</p>
          <p class="clear" v-on:click="clearAll">clear</p>
          <p class="number">{{onGoingList.length || 0}}</p>
        </div>
        <p class="flagTop" v-if="topList.length > 0">已置顶</p>
        <div class="list" v-for="item in topList" :key="item.ID">
           <router-link :to="{ path: 'edit', query: {id: item.ID}}">
            <list-item :id="item.ID" :title="item.title" :flagTop="item.flagTop" @getAllList="getAllList"></list-item>
           </router-link>
        </div>
        <div class="gap" v-if="topList.length > 0"></div>
        <!-- 单个条目 -->
        <div class="list" v-for="item in notTopList" :key="item.ID">
           <router-link :to="{ path: 'edit', query: {id: item.ID}}">
            <list-item :id="item.ID" :title="item.title" :flagTop="item.flagTop" @getAllList="getAllList"></list-item>
           </router-link>
        </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/base/header'
  import ListItem from '@/base/list-item'
  import Footer from '@/base/footer'
  import { getOnGoingList, deleteMemoBatch } from '../data/axios'

  export default {
    name: 'Home',
    components: {
      'Header': Header,
      'list-item': ListItem,
      'Footer': Footer
    },
    data () {
      return {
        onGoingList: [],
        topList: [],
        notTopList: []
      }
    },
    created () {
      this.getAllList();
    },
    methods: {
      // 获取所有正在进行中的事项
      getAllList() {
        getOnGoingList().then(res => {
          console.log(res);
          this.onGoingList = res.data;
          this.topList = this.onGoingList.filter(item => {
            return item.flagTop == 1;
          });
          this.notTopList = this.onGoingList.filter(item => {
            return item.flagTop == 0;
          });
        });
      },
      // 批量删除
      clearAll() {
        deleteMemoBatch(0).then(res => {
          console.log('删除成功');
          this.getAllList();
        });
      }
    },
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
  .flagTop {
    color: gray;
    font-size: 14px;
    margin-bottom: 12px;
  }
  .gap {
    height: 3px;
    width: 100%;
    background-color: gray;
    margin-bottom: 10px;
  }
</style>
