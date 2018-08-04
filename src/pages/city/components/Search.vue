<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或者拼音">
	</div>
</template>

<script>
	export default{
		name: 'CitySearch'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			width: 100%
			box-sizing: border-box
			margin-top:.1rem
			
			height: .5rem
			line-height: .5rem
			border-radius: .06rem
			padding: 0 .2rem
			text-align: center
			color: #666
</style>