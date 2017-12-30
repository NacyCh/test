<template>
  <div id="sec_comp">
      <fieldset>
        <legend>a fieldset</legend>
        <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="(article, index) in articles"
      :key='index'
      class="text item">
        {{article.title}}<span class="origin_name">{{ article.original_title }}</span>
      </div>
    </el-card>
        <ul>
          <li v-for='(article, index) in articles' :key='index'>
            <div>{{ article.title }}<span class="origin_name">{{ article.original_title }}</span></div>
            <div><img :src="article.images.small" alt=""></div>
          </li>
        </ul>
        <span>haha <input type='text' v-model='input_init' /></span>
        <p>{{ input_init }}</p>
        <button @click='clickon'>点击</button>
      </fieldset>
  </div>
</template>
<script>
  export default{
    name: 'sec_comp',
    data(){
      return {
        input_init: 'please input some thing',
        articles: [],
      }
    },
    mounted:function() {
      //do something after mounting vue instance
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=12',
       {

       },
       {
        headers:{

        },
        emulateJSON: true
      }).then(function(response){
        this.articles = response.data.subjects
      },function(response) {
        console.log(response)
      }).catch(function(response) {
        console.log(response)
      });
    },
    methods: {
      clickon(){
        this.input_init = this.input_init.split('').reverse().join('')
      },
    }
  }
</script>
