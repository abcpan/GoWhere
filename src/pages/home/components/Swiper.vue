<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		    <!-- slides -->
		    <swiper-slide v-for="item in list" :key="item.id"><img class="swiper-img" :src="item.imgUrl"  ></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		list:{
			type: Array
		}
	},
	data: function() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			}
		}
	},
	computed: {
		showSwiper: function() {   /*计算属性*/
			return this.list.length
		}
	}
}
</script>

<style lang='stylus' scoped>
	/*为样式表wrapper下的swiper-pagination-bullet-acitive(不在这个组件,所有无法直接设置) 设置相关属性*/
	.wrapper >>> .swiper-pagination-bullet-active
		background: white !important
	.wrapper  // 预设的高宽比
		overflow: hidden
		width: 100%
		height:0
		padding-bottom: 24.5%
		background: gray
		.swiper-img
			width: 100%
</style>