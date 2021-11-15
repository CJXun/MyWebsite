<template>
	<div class="tag">
		<el-calendar v-model="value">
		</el-calendar>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				value:new Data()
			}
		}
		
	}
</script>

<style scoped>
	/deep/ .el-calendar-table .el-calendar-day {
		height: 30px;
		padding: 0;
		text-align: center;
	}
	
	/deep/ .el-calendar-table>thead>th{
		/* width: 35px; */
	}
	
	/deep/ .el-calendar__header .el-calendar__title {
	    position: absolute; 
	    left: 10%;
	    font-size: 15px;
	    color: #4e8cda;
	}
	
	/deep/ .el-calendar__button-group {
	    width: 100%;
	}
	
	/deep/ .el-button-group {
	    display: flex;
	    justify-content: space-between;
	}
	
	/deep/ .el-button-group::after,/deep/.el-button-group::before {
	    content: unset;
	}
	
	/deep/ .el-button-group>.el-button:not(:first-child):not(:last-child) {
	    display: none;
	}
	
	/deep/ .el-button-group>.el-button:first-child:before{
	    content: '<';
	}
	
	/deep/ .el-button-group>.el-button:last-child:before{
	    content: '>';
	}
	
	/deep/ .el-button-group>.el-button:first-child span, /deep/ .el-button-group>.el-button:last-child span{
	    display: none;
	}
</style>