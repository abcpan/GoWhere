<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link 
				tag="li" 
				class="item border-bottom" 
				v-for="item of list" 
				:key="item.id"
				:to="'/detail/' + item.id"
			>
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: {
			type: Array
		}
	},

	data: function() {
		return {
			
		}
	}
}
</script>

<style lang='stylus' scoped>
	.title
		margin-top: .1rem
		line-height: .8rem
		text-indent: .2rem
		background: #eee
	.item
		overflow: hidden
		height: 1.9rem
		display: flex
		.item-img
			width: 1.7rem
			height:1.7rem
			padding: .1rem
		.item-info
			flex:1
			padding: .1rem
			.item-title
				line-height: .54rem
				font-size: .32rem
			.item-desc
				line-height: .4rem
				color: #ccc
			.item-button
				margin-top:.15rem
				background:#ff9300
				padding:0 .2rem
				border-radius:.06rem
				color:#fff
</style>