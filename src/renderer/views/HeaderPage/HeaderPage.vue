<template>
    <div>
        <el-container>
            <el-header class="header" style="height: 60px;">
                <div class="text-left logo">
                    <div class="logo-img"></div>
                    <div class="logo-text">综合监控管理平台</div>
                </div>
                <div class="text-left menu">
                    <el-menu :default-active="$route.path"
                             router
                             class="el-menu-demo"
                             mode="horizontal"
                             @select="handleSelect"
                             background-color="#545c64"
                             text-color="#fff"
                             active-text-color="#ffd04b">
                        <el-menu-item index="1" class="margin-item-one">
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title" class="el-submenu-title" style="padding: 0 5px">宏观分析</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">区域分析</template>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">专题分析</template>
                            <el-menu-item index="4-1">选项1</el-menu-item>
                            <el-menu-item index="4-2">选项2</el-menu-item>
                            <el-menu-item index="4-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">报告中心</template>
                            <el-menu-item index="5-1">选项1</el-menu-item>
                            <el-menu-item index="5-2">选项2</el-menu-item>
                            <el-menu-item index="5-3">选项3</el-menu-item>
                        </el-submenu>
                        <!--<a href="" target="_blank"></a>-->
                        <el-menu-item index="6" class="margin-item-two">
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
    </div>
</template>

<script>
    export default {
      name: 'HeaderPage',
      data () {
        return {
          activeIndex: '1',
          user: '系统管理员'
        }
      },
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
          console.error(this.$route.name)
        }
      }
    }
</script>

<style scoped lang="scss">
    .text-left{
        text-align: left;
        float: left;
    }
    .header{
        text-align: center;
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
                background: url("../../../../static/index/logo.png") no-repeat;
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
            .margin-item-one{
                margin-left: 20px;
            }
            .margin-item-two{
                margin-left: 80px;
            }
        }
    }
</style>