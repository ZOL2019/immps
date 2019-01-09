<template>
    <div>
        <el-container>
            <el-header class="container-header">
                <header-page/>
            </el-header>
            <el-main class="container-main">
                片区
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import HeaderPage from '../HeaderPage/HeaderPage'
    export default {
      name: 'District',
      components: {HeaderPage}
    }
</script>

<style>
    @import '../../assets/css/common.scss';
</style>
<style scoped>

</style>
