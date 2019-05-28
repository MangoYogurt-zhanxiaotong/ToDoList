<template>
  <div>
      <Header></Header>
      <div class="container">
        <div class="title">
          <p class="status">正在进行</p>
          <p class="clear">clear</p>
          <p class="number">12</p>
        </div>
        <!-- 单个条目 -->
        <div class="list" v-for="item in onGoingList" :key="item.id">
          <list-item :id="item.id" :title="item.title"></list-item>
        </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/base/header'
  import ListItem from '@/base/list-item'
  import Footer from '@/base/footer'
  import { getOnGoingList } from '../data/axios'

  export default {
    name: 'Home',
    components: {
      'Header': Header,
      'list-item': ListItem,
      'Footer': Footer
    },
    data () {
      return {
        onGoingList: []
      }
    },
    created () {
      getOnGoingList().then(res => {
        console.log(res);
        this.onGoingList = res.data;
      });
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
