<template>
    <div id="fruitcomp">
        <el-button @click='increment'>{{ num }}</el-button> {{name | capitalizes}}
    </div>
</template>

<script>
    export default {
        name: "fruitcomp",
        props: {
            name: String,
            initNum: Number,
            },
        data(){
            this.$emit('increment', this.initNum);
            return {
                num: this.initNum
            }
        },
        methods:{
            increment: function(){
                this.num += 1;
                this.$emit("increment",1);
            }
        }
    }
</script>

<style scoped>

</style>