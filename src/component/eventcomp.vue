<template>
  <div id='event_comp'>
    <form @submit.prevent="addDinos">
      <el-button @click='addDinos' >Add {{amount}} Dinosaurs</el-button>
      <el-input v-model="amount" class='addinput'></el-input>
      <!-- @keyup.enter.native="addDinos" -->
    </form>
   <p>You have {{total}} dinosaurs!</p>
  </div>
</template>

<script>
  export default {
    name: 'event_comp',
    data(){
      return {
        total: 0,
        amount: null
      }
    },
    methods:{
      addDinos: function(){
        this.total += parseInt(this.amount);
      }
    }
  }
</script>

<style scoped>
.addinput{
  width: 200px;
}
</style>
