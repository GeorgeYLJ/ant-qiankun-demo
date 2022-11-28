<template>
    <div id="app">
        <views></views>
    </div>
</template>

<script>
    import views from './views/index'

    export default {
        components: {views}
    }
</script>
<style lang="scss">
    body, html {
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
