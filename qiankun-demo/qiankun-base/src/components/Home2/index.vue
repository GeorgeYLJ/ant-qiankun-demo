<template>
    <el-card class="box-card">
        <h1>我是基座应用Home2</h1>
        <el-descriptions title="用户信息">
            <el-descriptions-item label="用户名">George</el-descriptions-item>
            <el-descriptions-item label="手机号">15225851386</el-descriptions-item>
            <el-descriptions-item label="居住地">杭州市</el-descriptions-item>
            <el-descriptions-item label="备注">
                <el-tag size="small">软通</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">杭州市西湖区西投创智</el-descriptions-item>
            <el-descriptions-item label="操作">
                <el-tag size="small" @click="sendData" style="cursor: pointer">向Vue子应用二发送数据</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="数据">
                {{data}}
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
</template>

<script>
    import actions from "./../../qiankun";
    import {getData} from '@/api/portal'

    export default {
        name: "index",
        data() {
            return {
                count: 0,
                data: '',
            }
        },
        methods: {
            sendData() {
                getData().then((res) => {
                    this.data = res
                    console.log('接口获取的数据', res)
                    console.log('向Vue子应用二发送数据')
                    actions.setGlobalState(this.data); //通过setGlobalState改变全局状态
                    history.pushState(null, 'vueApp2', '/child/vue2') //跳转到Vue子应用二
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            // 需要在mounted钩子函数中注册qiankun的观察者函数
            // 注册一个观察者函数
            // 一旦修改actions的内容就会触发这个onGlobalStateChange监听函数
            actions.onGlobalStateChange((state, prevState) => {
                // state为变更后的状态，prevState为变更前的状态
                console.log("主应用观察者，改变前的state为：", prevState);
                console.log("主应用观察者，改变后的state为：", state);
                this.data = state.msg
            }, true);
        },
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
</style>
