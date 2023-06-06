<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>{{Object.values(obj)}}000</p>
    <p v-for="item in arr">{{item}}</p>
    <button v-on:click="change">change</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      obj: {
        name: 'xx',
        id:'2'
      },
    arr: [1,2,3,10,-1]
    }
  },
  computed:{
  },
  mounted(){
    // for(var i =1; i <5; i++){
    //   console.log(i,'i')
    // }
    // arr.forEach((item,index) => {
    //   console.log(it)
    // });
    console.log(Math.min(...this.arr)
    )
  },
  watch:{
    obj(newv,oldv){
      console.log(newv,oldv)
    },
  },
  methods:{
    change(){
      this.obj.newname = 'yy'
      // this.$set(this.obj,'newname','xx')
      this.$forceUpdate()
      this.arr.shift()
      console.log(this.obj,'objhome',this.arr)
    }
  },
  components: {
    HelloWorld
  }
}
</script>
