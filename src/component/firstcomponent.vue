<template>
  <div id="fir_comp">
    <el-card class='my-card'>
      <div slot="header"><span>{{title}}</span></div>
      <el-button :size='sizeToggle? "": "mini"' :style='styles'
      :round='isRound' :disabled='disabled'>Start Tour</el-button>
      <hr/>
      <h4>Options</h4>
      <ul class='items'>
        <li><input type="checkbox" v-model="sizeToggle"/>
        <label>Large</label></li>
        <li><input type="checkbox" id="round" v-model="isRound"/>
        <label for="round">Round</label></li>
        <li><input type="checkbox" v-model="disabled"/>
        <label>Disabled</label></li>
        <li><input type="text" v-model="backgroundColor"/>
        <label>BackgroundColor</label></li>
        <li><input type="text" v-model="fontColor"/>
        <label>Font Color</label></li>
        <li><input type="range" v-model="range" min="-80" max="80"/>
        <label>Position</label></li>
      </ul>
    </el-card>
  </div>
</template>
<script type="text/javascript">
  export default{
    name: "fir_comp",
    data () {
      return {
        title: "Style Bindings",
        sizeToggle: false,
        isRound: false,
        disabled: false,
        backgroundColor: '#CCC',
        fontColor: '#000',
        range: 0
      }
    },
    computed:{
      styles: function(){
        return {
          background: this.backgroundColor,
          color: this.fontColor,
          'margin-left': this.range+"%"
        }
      }
    }
  }
</script>
<style>
.items li{
  display: block;
  margin: 10px;
  text-align: left;
}
.my-card{
  width: 600px;
  margin: auto;
}
label{
  padding-left: 10px;
}
</style>
