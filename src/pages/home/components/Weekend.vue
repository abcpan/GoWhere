<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in weekendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" >
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	data: function() {
		return {
			weekendList: [
				{
					id: '001',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg',
					title: '成都欢乐谷',
					desc: '290条评论'
				},{
					id: '002',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a4/df8543b6b8506d.jpg_r_640x214_660e1e3a.jpg',
					title: '分界洲岛',
					desc: '290条评论'
				},{
					id: '003',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3d/f99f5c73b52c4d.jpg_r_640x214_4e60b24c.jpg',
					title: '三亚宋城千古情景区',
					desc: '290条评论',
				}

			]
		}
	}
}
</script>

<style lang='stylus' scoped>
	.title
		line-height: .8rem
		text-indent: .2rem
		background: #eee
	.item-img-wrapper
		// 高长比为33.9%
		overflow: hidden  // 多出的隐藏
		height: 0
		padding-bottom: 33.9%
		.item-img
			width:100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
		.item-desc
			line-height: .4rem
			color: #ccc
</style>