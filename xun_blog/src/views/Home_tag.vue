<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header">
				<i class="el-icon-collection-tag" style="color: #409EFF;"></i>
				<span style="color: #666;">{{$t('tag.tag')}}</span>
			</div>
			<div>
				<el-tag size="mini" class="tag-item">前端</el-tag>
				<el-tag size="mini" class="tag-item">Vue</el-tag>
				<el-tag size="mini" type="warning" class="tag-item">Html</el-tag>
				<el-tag size="mini" type="danger" class="tag-item">Css</el-tag>
				<el-tag size="mini" type="success" class="tag-item">JavaScript</el-tag>
				</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.box-card .item:hover {
		color: #409EFF;
		cursor: pointer;
	}
	
	.box-card span {
		font-weight: bold;
	}
	
	.card-icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	
	.tag-item {
		margin-right: 10px;
	}
</style>