<template>
<div id="ffooter">
	<el-main class="main">
		<el-row>
			<el-col>
				<div>
					<span id="day">正在获取信息中......</span>
				</div>
				<div>
					&copy;itxun.top | <a href="http://beian.miit.gov.cn/">粤ICP备2021043466号</a>
				</div>
			</el-col>
		</el-row>
	</el-main>
</div>
</template>

<script>
export default {
  name: 'ffooter',
  mounted(){
	  function secondToDate(second) {
	      if (!second) {
			  return 0;
		  }
		  var time = new Array(0, 0, 0, 0, 0);
		  //取年数
		  if (second >= 365 * 24 * 3600) {
			  time[0] = parseInt(second / (365 * 24 * 3600));
			  second %= 365 * 24 * 3600;
		  }
		  //取天数
		  if (second >= 24 * 3600) {
			  time[1] = parseInt(second / (24 * 3600));
			  second %= 24 * 3600;
		  }
		  //取小时
		  if (second >= 3600) {
			  time[2] = parseInt(second / 3600);
			  second %= 3600;
		  }
		  //取分钟
		  if (second >= 60) {
			  time[3] = parseInt(second / 60);
			  second %= 60;
		  }
		  //取秒
		  if (second > 0) {
			  time[4] = second;
		  }
		  return time;
	  }
	  function setTime() {
		  //mouth要少一个月不然会出问题
		  var create_time = Math.round(new Date(Date.UTC(2021, 8, 19, 0, 0, 0)).getTime() / 1000);
		  var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
		  var currentTime = secondToDate((  timestamp-create_time));
		  var currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
			  + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
			  + '秒';
		if(document.getElementById("day")!=null){
			document.getElementById("day").innerHTML = "本站已经运行"+currentTimeHtml;
		}
		  
	  }
	  //即时刷新
	  setInterval(setTime, 1000);
  }
}
</script>

<style>
#ffooter{
	padding: 10px;
	
	text-align: center;
	
	color: #fff;
	background-color:
	 #fff;
}
.main{
	width: 100%;
	
	color: #ccc;
}
a{
	text-decoration: none;
	
	color: #ccc;
}
a:hover{
	color: #eee;
}
</style>