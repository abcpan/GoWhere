<template>
	<div class="header">
		<router-link to="/">
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		<div >城市选择</div>
	</div>
</template>

<script>
	export default {
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		position:relative
		background: $bgColor
		overflow: hidden
		height: .86rem
		line-height: .86rem
		text-align: center
		color: #fff
		font-weight:bold
		.back-icon
			position: absolute
			top:0
			left: 0
			color: #fff
			
			
		
</style>