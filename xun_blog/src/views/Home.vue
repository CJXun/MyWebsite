<template>
	<div class="home">
		<el-row type="flex" justify="space-around" style="margin-top: 60px;">
			<el-col :span="5">
				<div class="items">
					<tag></tag>
				</div>
				<div class="items">
					<calendar></calendar>
				</div>
			</el-col>
			
			<el-col class="blog" :span="17">
				
				<el-row class="blog-item">
					<el-card shadow="hover">
						<h5>欢迎来到我的个人网站</h5>
						<el-row>
							<div><i class="el-icon-time"></i>：2021-9-21</div>
							<div><i class="el-icon-price-tag">：</i>
								<el-tag class="main-tag" size="mini">vue</el-tag>
								<el-tag size="mini" type="success">JavaScript</el-tag>
							</div>
						</el-row>
						<el-row class="blog-main">
							<div class="blog-mainImg"><img class="blog-Img" v-lazy="imgs.src"></div>
							<div class="blog-abstract">
								<div class="abstract">
									初次搭建个人网站，还没想好要写什么，日后再记录工作遇到的问题
								</div>
								<div class="readmore">
									<router-link to="/home" tag="span">
										<el-button @click="myFunction()">{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="num"><i class="el-icon-view"></i>0</div>
								</div>
							</div>
						</el-row>
					</el-card>
					<img class="top-tag" v-lazy="imgs.src1" />
				</el-row>
				
				<el-row class="blog-item">
					<el-card shadow="hover">
						<h5>标题</h5>
						<el-row>
							<div><i class="el-icon-time"></i>：2021-9-19</div>
							<div><i class="el-icon-price-tag">：</i>
								<el-tag class="main-tag" size="mini">vue</el-tag>
								<el-tag size="mini" type="success">JavaScript</el-tag>
							</div>
						</el-row>
						<el-row class="blog-main">
							<div class="blog-mainImg"><img class="blog-Img" v-lazy="imgs.src"></div>
							<div class="blog-abstract">
								<div class="abstract">
									暂无内容
								</div>
								<div class="readmore">
									<router-link to="/article" tag="span">
										<el-button>{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="num"><i class="el-icon-view"></i>0</div>
								</div>
							</div>
						</el-row>
					</el-card>
				</el-row>
				
				<el-row class="blog-item">
					<el-card shadow="hover">
						<h5>测试</h5>
						<el-row>
							<div><i class="el-icon-time"></i>：2021-9-19</div>
							<div><i class="el-icon-price-tag">：</i>
								<el-tag class="main-tag" size="mini">vue</el-tag>
								<el-tag size="mini" type="success">JavaScript</el-tag>
							</div>
						</el-row>
						<el-row class="blog-main">
							<div class="blog-mainImg"><img class="blog-Img" v-lazy="imgs.src"></div>
							<div class="blog-abstract">
								<div class="abstract">
									暂无内容
								</div>
								<div class="readmore">
									<router-link to="/home" tag="span">
										<el-button @click="myFunction()">{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="num"><i class="el-icon-view"></i>0</div>
								</div>
							</div>
						</el-row>
					</el-card>
				</el-row>
				
				<div class="pagination">
					<el-pagination  layout="prev, pager, next" :total="1">
					</el-pagination>
				</div>
				
			</el-col>
			
			
			
		</el-row>

	</div>
</template>

<script>
	import tag from '../views/Home_tag.vue'
	import calendar from '../views/Home_calendar.vue'
	export default {
		name: 'home',
		data(){
			return {
				imgs:{
					src: require('@/assets/vue.jpg'),
					src1: require('@/assets/new.png')
				}
			}
		},
		components: {
			tag,
			calendar
		},
		methods: {
			myFunction()
			{
			    alert("暂无内容！");
			}
		}
	}
</script>

<style>
	.home{
		overflow: hidden;
	}
	
	.main-tag {
		margin-right: 10px;
	}
	
	.items{
		padding-top: 80px;
	}
	
	.blog{
		padding-top: 10px;
	}
	
	.blog-item {
		margin-bottom: 25px;
	}
	
	.blog-item>.top-tag {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
		right: 0;
	}
	
	img.tag {
		width: 16px;
		height: 16px;
	}
	.blog-main {
		display: flex;
		padding: 10px 0;
	}
	
	.blog-mainImg {
		height: 150px;
		width: 250px;
		overflow: hidden;
		margin-right: 10px;
	}
	
	img.blog-Img {
		width: 100%;
		height: 100%;
		transition: all 0.6s;
	}
	
	img.blog-Img:hover {
		cursor: pointer;
	}
	
	.blog-abstract {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.abstract {
		flex: 1;
		color: #aaa;
	}
	
	.readmore {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.readmore .num {
		color: #aaa;
	}
	h5{
		font-size: 20px;
	}
	.pagination {
		/* background-color: #fff; */
	}
</style>