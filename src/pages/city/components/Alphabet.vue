<template>
	<ul class="list">
		<li class="item">h</li>
		<li class="item">h</li>
		<li class="item">h</li>
		<li class="item">h</li>
		<li class="item">h</li>
		<li class="item">h</li>
	</ul>
</template>

<script>
	export default{
		name: 'CityAlphabet'
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.list
		display:flex
		flex-direction:column  // 垂直排列
		justify-content: center  // 垂直排列后居中
		position: absolute
		right: 0
		top: 1.58rem
		bottom: 0
		width: .4rem
		.item
			text-align:center
			line-height: .44rem
			color:$bgColor
	
</style>