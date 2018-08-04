<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" >
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">{{item.button}}</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	data: function() {
		return {
			recommendList: [
				{
					id: '001',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg',
					title: '成都欢乐谷',
					desc: '290条评论',
					button: '查看详情'
				},{
					id: '002',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/e9/d5c72454d47eda983bd4e857c9c361d8.water.jpg_200x200_5870d2ca.jpg',
					title: '分界洲岛',
					desc: '290条评论',
					button: '查看详情'
				},{
					id: '003',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/43/1217ccf8106bca9a077b58bf56bb2598.water.jpg_200x200_318d0773.jpg',
					title: '三亚宋城千古情景区',
					desc: '290条评论',
					button: '查看详情'
				}

			]
		}
	}
}
</script>

<style lang='stylus' scoped>
	.title
		margin-top: .1rem
		line-height: .8rem
		text-indent: .2rem
		background: #eee
	.item
		overflow: hidden
		height: 1.9rem
		display: flex
		.item-img
			width: 1.7rem
			height:1.7rem
			padding: .1rem
		.item-info
			flex:1
			padding: .1rem
			.item-title
				line-height: .54rem
				font-size: .32rem
			.item-desc
				line-height: .4rem
				color: #ccc
			.item-button
				line-height: .44rem
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color: #fff
				
</style>