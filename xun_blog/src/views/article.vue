<template>
	<div class="article">
		<div class="test">文章主页</div>
		<div class="test" @click="top()">文章主页</div>
	</div>
</template>

<script>
	export default{
		data(){
			
		},
		methods:{
			top:function(){
				// console.log(document.documentElement)
				// console.log()
				let btn = event.target
				btn.scrollIntoView({
				  behavior: "smooth", // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
				  block: "center", // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
				  inline: "nearest" // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
				})
				// document.body.scrollTop = document.documentElement.scrollTop = 0;
			}
		}
	}
</script>

<style>
	.article{
		padding-top: 60px;
		background-color: #ccc;
	}
	.test{
		height: 1200px;
	}
</style>
