<template>
    <div>
        <el-container>
            <el-main class="main">
                <div class="content">
                    <div class="v-charts">
                        <macroanalysis/>
                    </div>
                    <div class="v-charts">
                        <macroanalysis/>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Macroanalysis from './Macroanalysis/Macroanalysis'
    export default {
      name: 'MainPage',
      components: {Macroanalysis}
    }
</script>

<style scoped lang="scss">
    .text-left{
        text-align: left;
        float: left;
    }
    .main{
        text-align: center;
        .content{
            margin: 0 auto;
            width: 1200px;
        }
    }
</style>