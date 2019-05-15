<template>
    <div class="btn-example">
        <div class="btn-line">
            <Button>一般按钮</Button>
            <Button level="success">表示成功状态的按钮</Button>
            <Button level="warning">表示警告状态的按钮</Button>
            <Button level="error">表示错误状态的按钮</Button>
            <Button level="ignore">表示忽略状态的按钮</Button>
            <Button :disabled="true">普通灰化按钮</Button>
            <Button level="ignore" :disabled="true">忽略状态灰化按钮</Button>
        </div>
        <div class="btn-line">
            <Button :plain="true">一般文字按钮</Button>
            <Button level="success" :plain="true">表示成功状态的文字按钮</Button>
            <Button level="warning" :plain="true">表示警告状态的文字按钮</Button>
            <Button level="error" :plain="true">表示错误状态的文字按钮</Button>
            <Button level="ignore" :plain="true">表示忽略状态的文字按钮</Button>
            <Button :plain="true" icon="guanbi">带有图标一般文字按钮</Button>
            <Button :disabled="true" :plain="true">普通灰化文字按钮</Button>
            <Button level="ignore" :disabled="true" :plain="true">忽略状态灰化文字按钮</Button>
        </div>
        <div class="btn-line">
            <Button :ghost="true">一般按钮</Button>
            <Button level="success" :ghost="true">表示警告状态的幽灵按钮</Button>
            <Button level="warning" :ghost="true">表示警告状态的幽灵按钮</Button>
            <Button level="error" :ghost="true">表示错误状态的幽灵按钮</Button>
            <Button level="ignore" :ghost="true">表示忽略状态的按钮</Button>
            <Button :ghost="true" :disabled="true">表示忽略状态的按钮</Button>
        </div>
        <div class="btn-line">
            <Button icon="guanbi">一般按钮</Button>
        </div>
        <div class="btn-line">
            <Button icon="guanbi" width="25" height="25"/>
        </div>
    </div>
</template>

<script>
    import Button from '../../src/components/button'

    export default {
        name: "button-example",

        components: {
            Button
        }
    }
</script>

<style lang="less" scoped>
    .btn-example {
        & .btn-line {
            margin: 20px 0px;
        }
    }

</style>
