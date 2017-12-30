<template>
  <div id='event_comp'>
    <el-card class="my-card">
    <form @submit.prevent="addDinos">
      <el-button @click='addDinos' >Add {{amount}} Dinosaurs</el-button>
      <el-input v-model="amount" class='addinput'></el-input>
      <!-- @keyup.enter.native="addDinos" -->
    </form>
   <p>You have {{total}} dinosaurs!</p>
    <el-checkbox v-model="checked" id='checkbox'>
      <label for="checkbox">this box is {{checked? 'checked':"unckecked"}}</label>
    </el-checkbox>
    <hr/>
    <ul>
      <li v-for="(dino, index) in dinos" :key="index">
        <el-radio v-model="chosenDino" :label='dino'>
          {{dino}}
        </el-radio>
      </li><br/>
      <p>Favorite: {{chosenDino}}</p>
    </ul>
    <hr/>
    <p>Select period value: {{selectPeriods}}</p>
    <el-select v-model="selectPeriods" multiple>
      <el-option
      v-for="(period, index) in periods"
      :key="index"
      :label="period.name"
      :value='period.value'>
        {{period.name}}
      </el-option>
    </el-select>
    <hr/>
    <ul>
      <li v-for="(fruit, i) in fruits" :key="i" class='fruit'>
        <fruitcomp :name='fruit.name'
        :initNum='fruit.num'
        @increment='incrementTotal'></fruitcomp>
      </li>
    </ul>
    <p>Total fruits: {{ftotal}}</p>
    </el-card>
  </div>
</template>

<script>
  import fruitcomp from './fruitcomp.vue'
  export default {
    name: 'event_comp',
    data(){
      return {
        total: 0,
        ftotal: 0,
        amount: null,
        checked: false,
        chosenDino: '',
        input:'',
        selectPeriods: '',
        dinos:[
          "Triceratops", "Velociraptor", "Tyrannosaurus"
        ],
        periods:[
          {name:'Triassic', value:1},
          {name:'Jurassic', value:2},
          {name:'Cretaceous', value:3}
        ],
        fruits:[
          {name:"apple", num:5},
          {name:'grape', num:6},
          {name:"orange", num:3},
          {name:"lemon", num:5},
          {name:"peach", num:10}
        ]
      }
    },
    methods:{
      addDinos: function(){
        this.total += parseInt(this.amount);
      },
      incrementTotal:function(num){
        this.ftotal += num;
      }
    },
    components:{
      fruitcomp,
    }
  }
</script>

<style scoped>
.addinput{
  width: 200px;
}
.my-card{
  width: 600px;
  margin: auto;
  text-align: left;
}
.fruit{
  height: 50px;
}
</style>
