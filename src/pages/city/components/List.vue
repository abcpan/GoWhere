<template>
	<!-- 滑动容器 -->
	<div class="list" ref="wrapper">
		<!-- 滑动的必须是个整体 故此处有个div -->
		<div>
			<div class="area">
				<div class="area-title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="area-title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						 v-for="item in hot" 
					     :key="item.id"
					     @click="handleCityClick(item.name)"
					 >
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item,key) in cities" 
				:key="key"
				:ref="key"
			>
				<div class="area-title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" 
							v-for="innerItem in item" 
							:key="innerItem.id"
							@click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'CityList',
		props: {
			hot:{
				type: Array
			},
			cities: {
				type: Object
			},
			letter: {
				type: String
			}
		},
		methods: {
			handleCityClick: function(city) {
				this.$store.commit("changeCity",city);  //给actions传值使用dispatch 给mutations 使用commit
				this.$router.push("/");  //  编程式导航 $router是每一个页面都具有的实例属性
			}
		},
		//侦听器
		watch: {
			letter: function() {
				if(this.letter){
					var element = this.$refs[this.letter][0]  // 相同名字的引用 会形成数组,故使用索引
					this.scroll.scrollToElement(element) // 滑动到某个部分
				}
			}
		},
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
				padding: .1rem .2rem .1rem .2rem
		.item-list
			.item
				line-height: .76rem
				padding-left: .2rem
	
</style>