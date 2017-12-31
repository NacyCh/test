<template>
    <div id="fruitshow">
        <strong>{{name | capitalizes}}</strong> | {{season}}
    </div>
</template>

<script>
    export default {
        name: "fruitshow",
        props:["name","season"]
    }
</script>

<style scoped>

</style>