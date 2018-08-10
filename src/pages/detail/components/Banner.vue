<template>
	<div>
		<div class="banner" @click="handleGallaryClick">
			<img class="banner-img" :src="bannerImg" >
			<div class="banner-info">
				<div class="banner-title">{{name}}</div>
				<div class="banner-number"><span class="iconfont">&#xe67c;</span><span>39</span></div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
				:imgs="gallaryImgs" 
				v-if="gallaryShow" 
				@close="handlegallaryClose"
			>
			</common-gallary>
		</fade-animation>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	import FadeAnimation from 'common/fade/FadeAnimation'
	export default {
		name: 'DetailBanner',
		props: {
			name: String,
			bannerImg:String,
			gallaryImgs:Array
		},
		data: function() {
			return {
				gallaryShow:false,
			}
		},
		components:{
			CommonGallary: CommonGallary,
			FadeAnimation: FadeAnimation
		},
		methods: {
			handleGallaryClick: function() {
				this.gallaryShow = true
			},
			handlegallaryClose: function() {
				this.gallaryShow = false;
			}
		}

	}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow: hidden  
		height:0
		padding-bottom: 55%  //padding如果采用百分比 是相对于父元素的百分比而言
		background:#eee
		.banner-img
			width: 100%
		.banner-info
			display:flex
			position:absolute
			left:0
			right:0
			bottom: 0
			line-hegint: .6rem
			color: #fff
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				flex:1
				font-size: .32rem
				font-weight: bold
				padding: 0 .4rem
			.banner-number
				padding: 0 .4rem
				height: .4rem
				line-hegint: .4rem
				border-radius: .05rem
				background: rgba(0,0,0,0.5)
				
</style>