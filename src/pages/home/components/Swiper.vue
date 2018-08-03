<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl"  ></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data: function() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			},
			swiperList: [
				{
					id: '001',
					imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg'
				},
				{
					id: '002',
					imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png'
				},
				{
					id: '003',
					imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/sc_sqdc_20180727.jpg'
				}
			]
		}
	}
}
</script>

<style lang='stylus' scoped>
	.wrapper >>> .swiper-pagination-bullet-active  // 样式穿透
		background: #fff
	.wrapper  // 预设的高宽比
		overflow: hidden
		width: 100%
		height:0
		padding-bottom: 24.5%
		background: gray
		.swiper-img
			width: 100%
</style>