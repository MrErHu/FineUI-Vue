<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
    import "assets/font/iconfont.css"

    export default {
        name: "Icon",
        props: {
            type: {
                type: String,
                required: true
            },

            size: {
                type: [Number, String],
                default: 16
            },

            width: {
                type: [Number, String],
                default: 16
            },

            height: {
                type: [Number, String],
                default: 16
            },

            color: String
        },

        computed: {
            classes(){
                return `x-icon iconfont icon-${this.type}`;
            },

            styles(){
                const styles = {
                    display: "inline-block",
                    width: `${this.width}px`,
                    height: `${this.height}px`,
                    "text-align": "center",
                    "font-size": `${this.size}px`,
                    "line-height": `${this.height}px`
                };

                if(this.color){
                    styles.color = this.color;
                }

                return styles;
            }
        },

        methods: {
            handleClick(event){
                this.$emit("click", event);
            }
        }
    }
</script>
