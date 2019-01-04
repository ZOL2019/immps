<template>
    <div>
        <el-container style="width: 1184px">
            <el-header class="header" style="height: 60px">
                <div class="text-left logo">
                    <div class="logo-text">综合监控管理平台</div>
                </div>
                <div class="text-right menu">
                    <el-menu :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3">消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
                    </el-menu>
                </div>
            </el-header>
            <el-main>
                <div>MAIN</div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
      name: 'Index',
      data () {
        return {
          activeIndex: '1'
        }
  },
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>

<style scoped lang="scss">
    .text-left{
        text-align: left;
        float: left;
    }
    .text-center{
        text-align: center;
        float: left;
    }
    .text-right{
        text-align: right;
        float: left;
    }
    .logo{
        width: 320px;
        display: block;
        background: url("../../../static/index/logo.png") no-repeat;
        background-size: 120px 42px;
        .logo-text{
            margin-left: 120px;
            font-size: 24px;
        }
    }
    .menu{
        width: 600px;
        display: block;
    }
    .system{
        width: 200px;
        display: block;
    }
    .header{
        background-color: #545c64;
        font-size: 14px;
        color: #fff;
        line-height: 42px;
        height: 42px;
    }
    .box {
        margin:10px 0 0 -6px;
        width: 1200px;
        height: 675px;
        background: rgba(255, 255, 255, 1);
        overflow: hidden;
        position: absolute;
        .inner-box {
            overflow-x: hidden;
            overflow-y: auto;
            height: 100%;
            cursor: pointer;
        }

        .inner-box::-webkit-scrollbar { /*滚动条整体样式*/
            width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 175px;
        }

        .inner-box::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0, 165, 251, 0.7);
            background: rgba(0, 165, 251, 0.7);
        }

        .inner-box::-webkit-scrollbar-track { /*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(6, 88, 211, 0.4);
            border-radius: 5px;
            background: rgba(6, 88, 211, 0.4);
        }
    }
</style>