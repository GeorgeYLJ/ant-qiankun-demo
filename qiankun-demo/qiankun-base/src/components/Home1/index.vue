<template>
    <div>
        <el-card class="box-card">
            <h1>我是基座应用Home1</h1>
            <el-calendar v-model="value">
            </el-calendar>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                value: new Date()
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    /deep/ .el-calendar-day {
        height: 60px;
    }
</style>
