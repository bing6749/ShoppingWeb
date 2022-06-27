<template>
  <div style="height:100%">
    <nav-top></nav-top>
    <el-container style="height:100%">
      <el-aside width="200px"><nav-left :navlist='navlist'></nav-left></el-aside>
      <el-container>
        <el-header><swiper :swiperlist='swiperlist'></swiper></el-header>
        <el-main><list></list></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import List from '../../components/List.vue';
import NavLeft from '../../components/NavLeft.vue';
import NavTop from "../../components/NavTop.vue";
import Swiper from '../../components/Swiper.vue';

export default {
  components: { NavTop, NavLeft, Swiper, List },
  name: "Home",
  data(){
    return{
      navlist:[],
      swiperlist:[]
    }
  },
  mounted(){
      this.$axios.get('http://mock-api.com/RzJx6rn9.mock/navlist')
      .then(res =>{
        this.navlist = res.data.navlist;
        console.log(res.data.navlist);
      })
      this.$axios.get('http://mock-api.com/RzJx6rn9.mock/swiperlist')
      .then(res =>{
        this.swiperlist = res.data.swiperlist;
        console.log(res.data);
      })
  }
};
</script>

<style scoped>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 300px!important;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
