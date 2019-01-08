<template>
    <div>
        <el-container class="main">
            <el-main style="margin: 0 auto">
                <div class="v-charts">
                <macroanalysis/>
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
<style>
    @import "../../../../static/main/css/main.scss";
</style>
<style scoped lang="scss">
    .text-left{
        text-align: left;
        float: left;
    }
    .main{
        margin: 0 auto;
        width: 1200px;
    }
    .el-main{
        padding: 0 auto;
    }
</style>