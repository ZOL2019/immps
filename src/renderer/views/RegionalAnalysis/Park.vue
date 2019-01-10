<template>
    <div>
        <el-container>
            <el-header class="container-header">
                <header-page/>
            </el-header>
            <el-main class="container-main">
                园区
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import HeaderPage from '../HeaderPage/HeaderPage'
    export default {
      name: 'Park',
      components: {HeaderPage}
    }
</script>

<style>
    @import '../../assets/css/common.scss';
</style>
<style scoped>

</style>
