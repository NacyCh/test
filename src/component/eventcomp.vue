<template>
  <div id='event_comp'>
    <el-card class="my-card">
    <form @submit.prevent="addDinos">
      <el-button @click='addDinos' >Add {{amount}} Dinosaurs</el-button>
      <el-input v-model="amount" class='addinput' debounce=300></el-input>
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
    <el-card>
      <div slot="header">{{fruitView | capitalizes}}
        <el-button class="headButton" size="mini"
        @click="fruitToggle">{{ toggleLabel }}</el-button>
      </div>
    <ul>
      <li v-for="(fruit, i) in fruits" :key="i" class='fruit'>
        <keep-alive>
        <component :is="fruitView"
        :name='fruit.name'
        :initNum='fruit.num'
        :season='fruit.season'
        @increment='incrementTotal'></component>
        </keep-alive>
      </li>
    </ul>
    <p v-show="fruitView =='fruit edit'">Total fruits: {{ftotal}}</p>
    </el-card>
    </el-card>
  </div>
</template>

<script>
  import fruitcomp from './fruitcomp.vue'
  import fruitshow from './fruitshow.vue'
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
        fruitView: 'fruit edit',
        dinos:[
          "Triceratops", "Velociraptor", "Tyrannosaurus"
        ],
        periods:[
          {name:'Triassic', value:1},
          {name:'Jurassic', value:2},
          {name:'Cretaceous', value:3}
        ],
        fruits:[
          {name:"apple", num:5, season: "autumn, winter"},
          {name:'grape', num:6, season: "autumn"},
          {name:"orange", num:3, season: "autumn"},
          {name:"lemon", num:5, season: "spring"},
          {name:"peach", num:10, season: "summer"}
        ]
      }
    },
    methods:{
      addDinos: function(){
        this.total += parseInt(this.amount);
      },
      incrementTotal:function(num){
        this.ftotal += num;
      },
      fruitToggle: function(){
        this.fruitView = this.fruitView == "fruit show" ? "fruit edit" : "fruit show";
      }
    },
    components:{
      "fruit edit":fruitcomp,
      "fruit show":fruitshow
    },
    computed:{
      toggleLabel: function(){
        return this.fruitView == "fruit show" ? "edit" : "show";
      }
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
.headButton{
  float: right;
}
</style>
