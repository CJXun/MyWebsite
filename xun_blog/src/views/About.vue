<template>
	<div class="about">
		<el-row class="main" type="flex" justify="center">
			<el-col :span="16" style="margin-top: 60px; margin-bottom: 60px;">
				<h5 class="aboutTitle">{{$t('about.aboutMe')}}</h5>
				<el-card class="box" shadow="always">
					<div class="boxs">
						<div class="item">一个热衷于前端的初学者</div>
					</div>
				</el-card>
				<h5 class="aboutTitle">{{$t('about.contact')}}</h5>
				<el-card class="box" shadow="always">
					<dl class="dl-blog">
						<div class="item">{{$t('about.email')}}：cjxun2000@foxmail.com</div>
						<div class="item">QQ：2935383593</div>
					</dl>
				</el-card>
				<h5 class="aboutTitle"></i>{{$t('about.aboutBlog')}}</h5>
				<el-card class="box" shadow="always">
					<dl class="dl-blog">
						<dt>{{$t('about.technology')}}</dt>
						<dd>Element-ui、Vue、Vue-cli、Vue-ui、Vue-Lazyload、Vue-Router、Vue-i18n</dd>
					</dl>
				</el-card>
					
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'about',
	}
</script>

<style scoped>
	.dl-blog dd {
		margin-left: 40px;
	}
	
	.aboutTitle {
		color: #000;
		margin-top: 40px;
	}
	.box{
		margin-top: 20px;
	}
	.boxs {
		padding: 5px;
	}
</style>
