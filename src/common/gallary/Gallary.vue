<template>
	<div class="container" @click="disappearGallary">
		<div class="wrapper">
			<swiper :options="swiperOption" >
		    <!-- slides -->
		    <swiper-slide  v-for="(item, index) in imgs" :key="index">
		    	<img class="gallary-img" :src="item"  >
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination" slot="pagination"></div>
	  	</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CommonGallary',
		props: {
			imgs: {
				type: Array,
				default: function() {
					return [
							]
					}
			}
		},
		data: function() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',  // 样式传递进去才能进行显示
					paginationType: 'fraction',
					observeParents:true,
					observer: true
				}
			}
		},
		methods: {
			disappearGallary: function() {
				this.$emit("close");
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		z-index:1
		position: fixed
		top:0
		right:0
		left:0
		bottom: 0
		background: #000
		display:flex
		flex-direction:column
		justify-content:center
		.wrapper
			height: 0
			width:100%
			padding-bottom:100%
			background:#000
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom: -1rem
</style>