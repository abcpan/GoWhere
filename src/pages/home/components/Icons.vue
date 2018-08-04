<template>
	<div class="icons">
		<swiper :options="swiperOption">
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
	props: {
		list: {
			type: Array
		}
	},

	data: function() {
		return {
			/*禁止自动滚动,并重复滑动*/
			swiperOption:{  
				autoplay:false,
				loop: true
			}
		}
	},
	computed: {
		// 生成二维数组
		pages: function () {
			const pages = []
			this.list.forEach((item,index) => {
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
	.icons
		margin-top: .1rem
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