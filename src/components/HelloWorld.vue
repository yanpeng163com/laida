<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    
     <input v-if="question">
     <button  @click='open'>123</button>
     <p>{{ answer }}</p>
     <iframe :src="iframeUrl"  id="box1"  style="width:100%;height:calc(100vh);"></iframe> -->
      <div id="canvas" ></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iframeUrl:'../../static/text.html',
      question:false,
      answer:'gogogog',
      question:false,
      xmlStr:``
    }
  },
  created() {
    window.parent["vvvh"] = (a) => {
      this.app(a);
    };
  },
  mounted() {
    // console.log(this.xmlStr)
  },
  methods: {
    
    app(res){
      console.log(res)
    },
    open(){
      console.log(this.$store.state.isShow)
    },
    
  },
  
  watch:{
    question: function (newQuestion, oldQuestion) {
      this.answer = this.question
    }
  }
}
</script>


<style>
  
</style>
