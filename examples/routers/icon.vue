<template>
    <div class="icon-container">
        <ul>
            <li v-for="icon in icons" class="icon-cell-container">
                <icon :type="icon.type" class="icon-cell" width="100" height="100" size="42"/>
                <span class="icon-name">{{icon.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Icon from '../../src/components/icon'

    export default {
        name: "icon-example",

        data() {
            return {
                icons: [{
                    name: "BI-Logo",
                    type: "-"
                }, {
                    name: "返回",
                    type: "fanhui"
                }, {
                    name: "数值",
                    type: "icon-test"
                }, {
                    name: "时间",
                    type: "shijian"
                }, {
                    name: "分析表",
                    type: "fenxibiao"
                }, {
                    name: "数据库表",
                    type: "shujukubiao"
                }, {
                    name: "Excel表",
                    type: "Excelbiao"
                }, {
                    name: "添加表",
                    type: "tianjiabiao"
                }, {
                    name: "ABC",
                    type: "ABC"
                }, {
                    name: "Sql表",
                    type: "Sqlbiao"
                }, {
                    name: "编辑",
                    type: "normal"
                }, {
                    name: "表结构展示",
                    type: "normal1"
                }, {
                    name: "导出",
                    type: "normal2"
                }, {
                    name: "复制",
                    type: "normal3"
                }, {
                    name: "过滤",
                    type: "normal4"
                }, {
                    name: "居中",
                    type: "normal5"
                }]
            };
        },

        components: {
            Icon
        },

        methods: {
            handleClick: function () {
            }
        }
    }
</script>

<style lang="less" scoped>
    .icon-container {
        & ul {
            list-style: none;
            width: 960px;
            padding: 0px;
            margin: 0 auto;
        }

        & .icon-cell-container {
            display: inline-block;
            width: 100px;
            margin: 10px 20px 10px 0px;
            text-align: center;

            & .icon-cell {

            }

            & .icon-name {
                font-size: 12px;
            }
        }
    }
</style>
