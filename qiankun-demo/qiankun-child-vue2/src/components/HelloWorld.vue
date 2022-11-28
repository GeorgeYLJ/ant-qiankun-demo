<template>
    <div style="display: flex;justify-content: space-between;padding-top: 20px">
        <el-card class="box-card" style="width: 49%;">
            <div slot="header" class="clearfix">
                <span>操作</span>
            </div>
            <div>
                <ul>
                    <!--input输入框-->
                    <li>
                        输入框：
                        <el-input style="width: 221.4px;" v-model="input" placeholder="请输入内容"></el-input>
                    </li>
                    <!--select选择器-->
                    <li>
                        选择器：
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <!--弹出框-->
                    <li>
                        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

                        <el-dialog
                                title="提示"
                                :visible.sync="dialogVisible"
                                width="30%">
                            <span>这是一段信息</span>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </li>
                    <!--按钮-->
                    <li>
                        <el-button type="primary" plain @click="butClick">点击向父应用发送消息</el-button>
                    </li>
                </ul>
            </div>
        </el-card>
        <el-card class="box-card" style="width: 49%;">
            <div slot="header" class="clearfix">
                <span>数据</span>
            </div>
            <div>
                <ul>
                    <li>输入内容：{{input}}</li>
                    <li>选择内容：{{value}}</li>
                    <li>
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="姓名"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="gender"
                                    label="性别"
                                    width="180">
                            </el-table-column>
                        </el-table>
                    </li>
                    <li>
                        主应用基座传递过来的数据：<span v-html="data"></span>
                    </li>

                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
    import actions from './../actions' //导入actions实例

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                input: '',
                options: [{
                    value: '选项1',
                    label: '西瓜'
                }, {
                    value: '选项2',
                    label: '香蕉'
                }],
                value: '',
                data: "",
                dialogVisible: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    gender: '男'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    gender: '男'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    gender: '男'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    gender: '男'
                }],
            }
        },
        methods: {
            butClick() {
                actions.setGlobalState({
                    msg: '我是子应用传给主应用的数据'
                })
                history.pushState(null, 'Home2', '/Home2') //跳转到主应用Home2
            }
        },
        mounted() {
            actions.onGlobalStateChange((state) => {
                //监听全局状态
                console.log("我是子应用，我检测到数据了：", state);
                this.data = state.msg;
            }, true); //onGlobalStateChange的第二个参数设置为true，则会立即触发一次观察者函数
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    ul {
        li {
            margin-bottom: 10px;
        }
    }
</style>
