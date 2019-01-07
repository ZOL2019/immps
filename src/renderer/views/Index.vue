<template>
    <div>
        <el-container>
            <el-header class="container-header">
                <el-container>
                <el-header class="header" style="height: 60px;">
                    <div class="text-left logo">
                        <div class="logo-img"></div>
                        <div class="logo-text">综合监控管理平台</div>
                    </div>
                    <div class="text-left menu">
                        <el-menu :default-active="activeIndex"
                                 class="el-menu-demo"
                                 mode="horizontal"
                                 @select="handleSelect"
                                 background-color="#545c64"
                                 text-color="#fff"
                                 active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title" class="el-submenu-title" style="padding: 0 5px">宏观分析</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">区域分析</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">专题分析</template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">报告中心</template>
                                <el-menu-item index="4-1">选项1</el-menu-item>
                                <el-menu-item index="4-2">选项2</el-menu-item>
                                <el-menu-item index="4-3">选项3</el-menu-item>
                            </el-submenu>
                            <!--<a href="" target="_blank"></a>-->
                            <el-submenu index="5">
                                <template slot="title">数据目录</template>
                                <el-menu-item index="5-1">选项1</el-menu-item>
                                <el-menu-item index="5-2">选项2</el-menu-item>
                                <el-menu-item index="5-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="6" class="margin-item">
                                <i class="el-icon-loading"></i>
                                <span slot="title">控制台</span>
                            </el-menu-item>
                            <el-submenu index="7">
                                <template slot="title"><i class="el-icon-setting"></i>{{user}}</template>
                                <el-menu-item index="7-1">选项1</el-menu-item>
                                <el-menu-item index="7-2">选项2</el-menu-item>
                                <el-menu-item index="7-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </div>
                </el-header>
            </el-container>
            </el-header>
            <el-main class="container-main">
                <el-container>
                    <el-main class="main">
                        <div class="v-charts">
                            <macroanalysis/>
                        </div>
                    </el-main>
                </el-container>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Macroanalysis from './macroanalysis/Macroanalysis'
    export default {
      name: 'Index',
      components: {Macroanalysis},
      data () {
        return {
          activeIndex: '1',
          user: '系统管理员',
          search: ''
        }
  },
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>
<style>
    @import "../../../static/index/css/index.scss";
</style>
<style scoped lang="scss">
    .container-header{
        background-color: #545c64;
        overflow: hidden;
    }
    .container-main{
        background-color: #fff;
        overflow: hidden;
    }
    .text-left{
        text-align: left;
        float: left;
    }
    .header{
        margin: 0 auto;
        width: 1200px;
        line-height: 42px;
        height: 42px;
        .logo{
        width: 320px;
        display: block;
        cursor: pointer;
        .logo-img{
            width: 120px;
            margin-top: 8px;
            height: 42px;
            float: left;
            background: url("../../../static/index/logo.png") no-repeat;
            background-size: 120px 42px;
        }
        .logo-text{
            float: left;
            font-size: 22px;
            line-height: 60px;
            height: 60px;
            color: #fff;
            font-weight: bold;
        }
    }
        .menu{
            display: block;
            line-height: 60px;
            height: 60px;
            .margin-item{
                margin-left: 80px;
            }
        }
    }
    .main{
        margin: 0 auto;
        width: 1200px;
        .v-charts{
            width: 600px;
            height: 400px;
        }
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