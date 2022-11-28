<template>
    <div>
        <h1 style="border-top: 1px solid #ccc;height: 50px;line-height: 50px;">我是vue子应用Home页面</h1>
        <el-button type="primary" plain @click="jampRouter()">跳转到vue子应用路由首页</el-button>
        <h1><img src="../assets/house.png" width="40%" height="250"/></h1>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                data: ""
            }
        },
        methods: {
            jampRouter() {
                this.$router.push({path: "/"})
            },
        }
    }
</script>

<style scoped>

</style>
