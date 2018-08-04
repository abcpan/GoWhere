<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(pageCode,index) in pages" :key="index">
				<div class="icon" v-for="item in pageCode" :key="item.id" >
					<div class="icon-img">
						<img  class="icon-imgcontent" :src="item.imgUrl" >
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data: function() {
		return {
			iconList:[
				{
					id:'001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'热门景点潘贵成加油你一定会成功的 你必须成功 没有后路'
				},{
					id:'002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc:'名胜古迹'},
				{
					id:'003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
					desc:'本地玩乐'
				},{
					id:'004',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
					desc:'自然风光'},
				{
					id:'005',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
					desc:'全部玩乐'
				},{
					id:'006',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
					desc:'全部玩乐'
				},{
					id:'007',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
					desc:'成都定制游'
				},{
					id:'008',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
					desc:'成都必游'
				},{
					id:'009',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
					desc:'海洋馆'
				},{
					id:'010',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
					desc:'汽车票'
				},{
					id:'011',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
					desc:'亲子游玩'
				}]
		}
	},
	computed: {
		// 生成二维数组
		pages: function () {
			const pages = []
			this.iconList.forEach((item,index) => {
				const pageCode = Math.floor(index / 8)
				if(!pages[pageCode]){
					pages[pageCode]= []
				}
				pages[pageCode].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height: 0
		padding-bottom:50%
	.icon
		position: relative
		float: left
		width: 25%
		height: 0
		padding-bottom: 25%
		.icon-img
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: .44rem
			box-sizing: border-box
			padding: .1rem
			.icon-imgcontent
				display: block
				margin: 0 auto
				height: 100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: .44rem
			line-height: .44rem
			text-align: center
			color: $darkTextColor // 引用变量 必须加$
			ellipsis()
</style>