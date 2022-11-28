<template>
    <div id="app">
        <el-menu :default-active="$route.path"
                 router class="el-menu-demo" mode="horizontal">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
        </el-menu>
        <router-view/>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            }
        }
    }
</script>
<style lang="scss">

</style>
