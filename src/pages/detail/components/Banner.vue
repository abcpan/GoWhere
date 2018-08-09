<template>
	<div>
		<div class="banner" @click="handleGallaryClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1411/d8/eec44461ecfd83df9c1669e7846b1c53.water.jpg_600x330_c147682d.jpg" >
			<div class="banner-info">
				<div class="banner-title">三亚宋城千古情景区</div>
				<div class="banner-number"><span class="iconfont">&#xe67c;</span><span>39</span></div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-if="gallaryShow" @close="handlegallaryClose"></common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name: 'DetailBanner',
		data: function() {
			return {
				gallaryShow:false,
				imgs: ['http://img1.qunarzz.com/wugc/p112/201306/10/4ee7e2b4fecd93ed93835fbb.jpg_r_800x800_a4ba54a9.jpg',
							'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png']
			}
		},
		components:{
			CommonGallary: CommonGallary
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
		padding-bottom: 45%  //padding如果采用百分比 是相对于父元素的百分比而言
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