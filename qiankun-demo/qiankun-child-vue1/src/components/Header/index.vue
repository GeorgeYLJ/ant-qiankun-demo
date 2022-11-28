<template>
    <div>
        <el-menu
                class="el-menu-demo header"
                background-color="#545c64"
                text-color="#fff">
            <el-menu-item><img src="../../assets/logo.png" height="45" width="280"/></el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .header {
        border-bottom: 1px solid #ccc;
        height: 60px;
        z-index: 99;
    }


</style>
