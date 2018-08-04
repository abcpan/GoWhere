<!-- 模板 -->
<template>
	<!-- template对外只能暴露一个根页面标签 -->
	<div class="header">
		<div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
		<div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
		<!--页面跳转内置组件 -->
		<router-link to="/city">
			<div class="header-right">
				{{city}}<span class="iconfont arrow-icon">&#xe6aa;</span>
			</div>
		</router-link>
	</div>
</template>
<!-- 模板的逻辑 -->
<script>
export default{
  name: 'HomeHeader',
  props: {
  	city: {
  		type: String
  	}
  }
}
</script>
<style lang='stylus' scoped>
// 在css中引入前面必须加~号
	@import '~styles/varibles.styl' 
	.header
		background: $bgColor
		display: flex
		line-height: .86rem
		color: #fff
		.header-left
			width: .64rem
			float: left
			color: #fff
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			padding-left: .3rem
			background: #fff
			border-radius: .1rem
			color: #ccc
		.header-right
			width: 1.24rem
			float: right
			text-align: center
			font-weight:bold
			color: white
			.arrow-icon
				font-size: .24rem
				margin-left: -0.04rem
</style>
