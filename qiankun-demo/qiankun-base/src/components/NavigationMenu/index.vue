<template>
    <div style="width: 100%;height: 100%">
        <el-row class="tac" style="width: 100%;height: 100%;overflow-x: hidden">
            <el-col :span="3" style="width: 100%;height: 100%">
                <el-menu style="width: 100%;height: 100%"
                         :default-active="$route.path"
                         router
                         class="el-menu-vertical-demo"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>基座应用</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="/Home1">基座应用页面1</el-menu-item>
                            <el-menu-item index="/Home2">基座应用页面2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/child/vue1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Vue子应用一</span>
                    </el-menu-item>
                    <el-menu-item index="/child/vue2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Vue子应用二</span>
                    </el-menu-item>
                    <el-menu-item index="/child/static">
                        <i class="el-icon-document"></i>
                        <span slot="title">静态页面一</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {}
    }
</script>

<style scoped>
    .el-submenu .el-menu-item {
        min-width: 0;
    }
</style>
