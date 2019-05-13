<template>
    <button :class="classes" @click="handleClick">
        <Icon :type="icon" v-if="icon"></Icon>
        <slot></slot>
    </button>
</template>

<script>
    import Icon from '../icon'
    import { oneOf } from '@/utils/assist'

    const prefixCls = "fine-btn";

    export default {
        name: "Button",

        components: { Icon },

        props: {
            level: {
                validator(value) {
                    return oneOf(value, ["common", "success", "warning", "ignore", "error"])
                },
                default: "common"
            },

            disabled: {
                type: Boolean,
                default: false
            },

            block: {
                type: Boolean,
                default: false
            },

            icon: {
                type: String,
                default: ""
            },

            plain: {
                type: Boolean,
                default: false
            },

            ghost: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.level}`+ (this.plain ? "-plain" : ""),
                    {
                        [`${prefixCls}-${this.level}-ghost`]: this.ghost,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-not-plain-disabled`]: this.disabled && !this.plain,
                    }
                ];
            }
        },

        methods: {
            handleClick(){
                this.$emit("click");
            }
        }
    }
</script>
