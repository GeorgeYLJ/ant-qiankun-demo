<template>
    <div>
        <el-container :style="containerHeight">
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <NavigationMenu></NavigationMenu>
                </el-aside>
                <el-main>
                    <div id="vueApp">
                        <!--我是子应用容器-->
                    </div>
                    <router-view v-show="qianKun"/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Header from '../components/Header/index'
    import NavigationMenu from '../components/NavigationMenu/index'

    export default {
        name: "index",
        components: {Header, NavigationMenu},
        data() {
            return {
                qianKun: true,
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
        watch: {
            $route() {
                if (window.location.href.indexOf('/child')) {
                    this.qianKun = true;
                } else {
                    this.qianKun = false;
                }
            }
        }
    }
</script>

<style scoped>
    .el-header {
        padding: 0;
    }
</style>
