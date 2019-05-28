<template>
    <div class="item clearfix">
       <input type="checkbox" class="checkbox"/>
       <p class="content">{{title}}</p>
       <div class="remove">x</div>
       <!-- <a href="#" class="edit">📝</a> -->
       <a href="#" class="isTop">📌</a>
     </div>
</template>

<script>
export default {
    name: 'list-item',
    props: ['id', 'title'],
    data () {
        return {

        }
    }
}
</script>
<style scoped>
    .item {
        height: 44px;
        line-height: 44px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        padding: 0 45px;
        border-radius: 3px;
        border-left: 5px solid #629A9C;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    }
    .item .checkbox {
        position: absolute;
        width: 22px;
        height: 22px;
        top: 50%;
        transform: translateY(-50%);
        left: 14px;
    }
    .item .content {
        width: 60%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item .remove {
        position: absolute;
        top: 50%;
        right: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #ababab;
        font-size: 20px;
    }
    /* .item .edit {
        position: absolute;
        top: calc(50% + 3px);
        right: 40px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #ababab;
        font-size: 14px;
    } */
    .item .isTop {
        position: absolute;
        top: calc(50% + 3px);
        right: 40px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #ababab;
        font-size: 14px;
    }
</style>
