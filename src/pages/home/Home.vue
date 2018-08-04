<!-- 模板 -->
<template>
	<!-- template对外只能暴露一个根页面标签 -->
	<div>
		<!-- 组件名如果为两个单词构成 组件标签为两个单词且-进行连接,如果为一个则为一个单词(两者首字均母小写)  -->
		<home-header :city="city"></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>
<!-- 模板的逻辑 -->
<script>
	//HomeHeader为name 的名称(组件名) 区别于文件名
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
  	HomeHeader: HomeHeader,
  	HomeSwiper: HomeSwiper,
  	HomeIcons:HomeIcons,
  	HomeRecommend:HomeRecommend,
  	HomeWeekend:HomeWeekend
  },
  data: function() {
  	return {
  		city: "北京",
  		swiperList: [],
  		iconList:[],
  		weekendList: [],
  		recommendList: []
  	}
  },

  methods: {
  	getHomeInfo: function() {
  		axios.get('/static/mock/index.json')
  		.then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc: function(res) {
  		res = res.data // 解析数据
  		console.log(res.ret)
  		console.log(res.data)  /*查看数据*/
  		if(res.ret && res.data){
  			const data = res.data
  			this.swiperList = data.swiperList
  			this.iconList =data.iconList
  			this.weekendList=data.weekendList
  			this.recommendList=data.recommendList
  		}
  	}
 },
	mounted: function() {
		this.getHomeInfo()
	}
}
</script>

<style>

</style>
