<template>
	<div>
		<router-link 
			to="/" 
			tag="div" 
			class="header-abs"
			v-show="showAbs"
		>
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-if="!showAbs"
			:style="opacityStyle" 
		>
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			<div>景点详情</div>
		</div>
	</div> 
</template>

<script>
	export default {
		name: 'DetailHeader',
		data: function() {
			return {
				showAbs: true,
				opacityStyle: {
					opacity: 0
				}
			};
		},
		methods: {
			handleScroll: function() {
				var top = document.documentElement.scrollTop;  // 计算整个文档流向上滑动的值
				if(top >60) {
					this.showAbs = false;
					var opacity = top/140; 
					opacity = opacity >1 ?1: opacity;  // 大于取1  不大于 就取原值
					this.opacityStyle.opacity=opacity;
				}else{
					this.showAbs = true;
				}
			}
		},
		activated: function() {
			window.addEventListener("scroll",this.handleScroll)  // 只要有变动就执行,由于为顶级对象,所以在整个浏览器中 ,这个函数都将会被执行
		},// 在 kee-alive下 页面隐藏后执行  即对全局时间的解绑
		deactivated: function() {
			window.removeEventListener("scroll",this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header-abs
		position:fixed
		top: .2rem
		left: .2rem
		width: .8rem
		height: .8rem
		line-height:.8rem
		text-align: center
		border-radius:.4rem
		background:rgba(0,0,0,0.8)
		.header-abs-back
			color: #fff
			font-size: .4rem
	.header-fixed
		z-index: 99
		position:fixed
		top: 0
		right:0
		left: 0
		background: $bgColor
		overflow: hidden
		height: .86rem
		line-height: .86rem
		text-align: center
		color: #fff
		font-weight:bold
		.header-fixed-back
			position: absolute
			top:0
			left: 0
			color: #fff
</style>