<template>
    <div>
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
                             active-text-color="#ffd04b" v-for="item in menus" v-if="!item.hidden">
                        <el-submenu :index="item.index" v-text="item.name">
                            <template slot="title"></template>
                            <template v-for="child in item.children" v-if="!child.hidden">
                                <router-link :to="child.path" :key="child.name" style="text-decoration:none">
                                    <el-menu-item :index="child.index" v-text="child.name"></el-menu-item>
                                </router-link>
                            </template>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-header>
        </el-container>
    </div>
</template>

<script>
    import menu from '@/config/menu-config'
    export default {
      name: 'HeaderPage',
      data () {
        return {
          activeIndex: '1',
          user: '系统管理员',
          menus: menu
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
            .margin-item{
                margin-left: 80px;
            }
        }
    }
</style>
