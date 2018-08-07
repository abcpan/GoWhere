<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音">
		</div>
		<div class="search-content" ref="content" v-show="keyword">
			<ul>
				<li 
					class="search-item border-bottom" 
					v-for="item in list"
					@click="handleCityclick(item.name)"
				>
				{{item.name}}</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bgscroll from "better-scroll"
	export default{
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data: function() {
			return {
				keyword: '',
				list: [],
				timer:null
			}
		},

		methods: {
			handleCityclick: function(city) {
				this.$store.commit("changeCity",city);
				this.$router.push("/");
			}
		},
		//此处完成搜索引擎
		watch: {
			keyword:function()
			{
				if(this.timer) {
					clearTimeout(this.timer);
				}
				if(!this.keyword){
					this.list = []
					return //使用return 后避免执行后面的代码 防止全部显示(原因...)
				}
				//settimeout被赋值给this.timer 下次在执行时  this.timer是有值的
				this.timer =setTimeout(() => {
					var result = [];
					//遍历结果i城市大写首字母
					for (let i in this.cities){
						//遍历结果是大写首字母下的城市对象列表  value是城市对象
						this.cities[i].forEach((value) => 
						{
							//此处判断输入的字串是否是城市名称的第一个关键词
							if(value.spell.indexOf(this.keyword) ==0 || value.name.indexOf(this.keyword) ==0 )
							{
								result.push(value)
							}
						})
					}
					this.list=result;
				},100)
			}
	},
	//此处计算"没有找到匹配数据"是否显示的值
	computed: {
		hasNoData: function() {
			return !this.list.length;
		}
	},
	mounted: function() {
		this.scroll =new Bgscroll(this.$refs.content)
	}
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
	.search-content
		z-index: 1
		overflow:hidden
		position:absolute
		top: 1.58rem
		left:0
		right: 0
		bottom: 0
		background:#eee
		.search-item
			line-height:.5rem
			padding-left: .2rem
			color: #666
			background:#fff
			
		
</style>