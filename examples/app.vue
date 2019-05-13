<template>
    <div class="container">
        <ul>
            <li><router-link to="/icon">Icon</router-link></li>
            <li><router-link to="/button">Button</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style lang="less">
    @import "../src/styles/index";
</style>
