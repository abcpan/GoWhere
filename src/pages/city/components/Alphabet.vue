<template>
	<ul class="list">
		<li class="item" 
		v-for="item in letters" 
		:key="item"
		:ref="item"
		@touchstart="handleTouchstart"  
		@touchmove="handleTouchmove"
		@touchend="handleTouchend"
		@click="handleLetterClick"
		>{{item}}</li>
	</ul>
	<!-- touchmove 手指滑动事件,即手指滑动就会执行绑定的函数 -->
</template>

<script>
	export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		computed: {
			letters: function() {
				var letters =[]
				//对象遍历出来的是键 ,数组遍历出来的是索引
				for(var i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		data: function() {
			return {
				touchStatus:false,
				startY: 0,
				timer: null
			}
		},
		methods: {
			handleLetterClick: function(e) {
				this.$emit("change",e.target.innerText) 
			},
			handleTouchstart: function() {
				this.touchStatus=true
			},
			//此函数能获取到 触摸字母的下标 此外将 如同handleLetterClick函数返回相关对应字母
			handleTouchmove: function(e) {
				// 函数截留
				if(this.touchStatus) {
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						var touchY=e.touches[0].clientY-79 // 0项表示手指的一些信息  clientY表示获取距离最顶部的值
						var index = Math.floor((touchY-this.startY)/23)  //行高由22提高到23,使得索引号比实际第几个少1,因为式子如果采用真实行高得到的是第几个
						if(index >= 0 && index<this.letters.length)
						{
							this.$emit("change", this.letters[index])  // 此处和handleLetterClick功能一致
						}
					},20)
				}
			},
			handleTouchend: function() {
				this.touchStatus=false
			}
		},
		// 生命周期
		updated: function() {
			this.startY=this.$refs['A'][0].offsetTop
		}
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