<template>
  <div id = "blog">
   <!-- <el-menu :default-active='$route.path' class="blog-title" mode="horizontal" :router="true">
      <el-menu-item class="author">XUN</el-menu-item>
	  <el-submenu class="right" index=''>
	    <template slot="title">{{$t('header.language')}}</template>
	    <el-menu-item @click="toggleLang('zh')">中文</el-menu-item>
	    <el-menu-item @click="toggleLang('en')">英文</el-menu-item>
	  </el-submenu>
      <el-menu-item class="right" index="/about">{{$t('header.about')}}</el-menu-item>
      <el-menu-item class="right" index="/home">{{$t('header.home')}}</el-menu-item>
      
    </el-menu> -->
	<top></top>
    <!-- <router-view></router-view> -->
	<el-row type="flex" justify="center" id="content">
		<el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
			<router-view></router-view>
		</el-col>
	</el-row>
	<ffooter></ffooter>
  </div>
</template>

<script>
import "./style/main.css"

import top from './views/top.vue'
import ffooter from './views/ffooter.vue'

export default {
	data() {
		return {
			activeIndex: '/home'
		};
	},
	methods:{
		// toggleLang(lang) {
		//   if(lang === 'zh') {
		// 	localStorage.setItem('locale', 'zh')
		// 	this.$i18n.locale = localStorage.getItem('locale')
		// 	this.$message({
		// 	  message: '成功切换为中文！',
		// 	  type: 'success'
		// 	})
		//   } else if(lang === 'en') {
		// 	localStorage.setItem('locale', 'en')
		// 	this.$i18n.locale = localStorage.getItem('locale')
		// 	this.$message({
		// 	  message: 'Switch to English Successfully!',
		// 	  type: 'success'
		// 	})
		//   }
		// }
	},
	components:{
	  top,
	  ffooter
	}
}
</script>

<style scoped>
	.el-menu.el-menu--horizontal{
	  border: none;
	}

	#blog{
		background-color: #B0C4DE;
		/* background-color:black;
		background-image:
		radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
		radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
		radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
		radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
		background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
		background-position: 0 0, 40px 60px, 130px 270px, 70px 100px; */
		width: 100%;
		height: auto;
	}
	
	/deep/ .blog-title{
		width: 100%;
		position: fixed;
		z-index: 10;
		/* background:rgba(255, 255, 255, 0.3); */
	}
	
	.author{
		text-align: center;
		width: 200px;
		background: linear-gradient(-90deg, #57bdbf, #2f9de2) !important;
		color: #fff !important;     
	}
	
	.right {
		float: right !important;
		width: 100px;
		text-align: center;
		
	}

</style>
