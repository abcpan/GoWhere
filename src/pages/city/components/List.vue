<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="area-title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="area-title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="area-title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="area-title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="area-title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
					<div class="item border-bottom">阿拉尔</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'CityList',
		mounted: function() {
			this.scroll = new Bscroll(this.$refs.wrapper)
		}
	}
</script>

<style lang="stylus" scoped>
// 公共样式
	.border-topbottom
		/*设上下边框*/
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:after
			border-color: #ccc
			/*私有样式*/
	.list
		overflow: hidden
		position:absolute
		top:1.58rem 
		left: 0
		right:0
		bottom: 0
		.area-title
			line-height: .54rem
			background:#eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.button-list
			overflow: hidden
			padding: .1rem
			.button-wrapper
				float: left  /*本身元素进行漂浮*/
				width: 33.3%
			.button
				text-align: center
				margin: .1rem
				border: .02rem solid #ccc
				padding: .1rem .6rem .1rem .6rem
		.item-list
			.item
				line-height: .76rem
				padding-left: .2rem
	
</style>