<template>
    <div>
        <el-container :style="containerHeight">
            <el-header v-show="flag">
                <Header></Header>
            </el-header>
            <el-container>
                <!--           <el-aside width="200px">
                           </el-aside>-->
                <el-main>
                    <el-card class="box-card">
                        <h1>我是vue子应用1</h1>
                        <ul style="display: flex;justify-content: flex-start;flex-wrap:wrap">
                            <li>
                                <el-button type="primary" plain @click="jampRouter(1)">跳转到主应用基座首页</el-button>
                            </li>
                            <li>
                                <el-button type="primary" plain @click="jampRouter(2)">跳转到vue子应用路由Home页面</el-button>
                            </li>
                            <li>
                                <el-button type="primary" plain @click="jampRouter(6)">跳转到静态页面一子应用</el-button>
                            </li>
                            <li>
                                <el-button type="primary" plain @click="jampRouter(7)">跳转到vue子应用二</el-button>
                            </li>
                        </ul>
                        <ul style="display: flex;justify-content: flex-start;flex-wrap:wrap">
                            <li>
                                <el-button type="success" plain @click="jampRouter(3)">打开vue子应用一</el-button>
                            </li>
                            <li>
                                <el-button type="success" plain @click="jampRouter(5)">打开vue子应用二</el-button>
                            </li>
                            <li>
                                <el-button type="success" plain @click="jampRouter(4)">打开静态页面一应用</el-button>
                            </li>
                        </ul>
                        <router-view/>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Header from '../components/Header/index'

    export default {
        name: "index",
        components: {Header,},
        data() {
            return {
                qianKun: true,
                flag: null,
                containerHeight: {
                    height: ""
                }
            };
        },
        created() {
            //动态调整左侧菜单栏高度
            var docHeight = document.documentElement.clientHeight;
            this.containerHeight.height = docHeight + "px";
        },
        mounted() {
            this.flag = this.$qiankunFlag
            console.log('我是否在qiankun框架下运行', this.$qiankunFlag)
        },
        watch: {
            $route() {
                if (window.location.href.indexOf('/child')) {
                    this.qianKun = true;
                } else {
                    this.qianKun = false;
                }
            }
        },
        methods: {
            jampRouter(n) {
                if (n == 1) {
                    window.location.href = 'http://localhost:8080'
                } else if (n == 2) {
                    this.$router.push({path: "/vueHome"})
                } else if (n == 3) {
                    window.open('http://localhost:8081/', '_blank');
                } else if (n == 4) {
                    window.open('http://localhost:3002/', '_blank');
                } else if (n == 5) {
                    window.open('http://localhost:8082/', '_blank');
                } else if (n == 6) {
                    history.pushState(null, 'staticApp', '/child/static')
                } else if (n == 7) {
                    history.pushState(null, 'vueApp2', '/child/vue2')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        list-style: none;
    }

    .el-header {
        padding: 0;
    }


    ul {
        margin: 0;
        padding: 0;

        li {
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }

</style>
