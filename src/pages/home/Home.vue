<!-- 模板 -->
<template>
	<!-- template对外只能暴露一个根页面标签 -->
	<div>
		<!-- 组件名如果为两个单词构成 组件标签为两个单词且-进行连接,如果为一个则为一个单词(两者首字均母小写)  -->
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
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
export default{
  name: 'Home',
  components: {
  	HomeHeader: HomeHeader,
  	HomeSwiper: HomeSwiper,
  	HomeIcons:HomeIcons,
  	HomeRecommend:HomeRecommend,
  	HomeWeekend:HomeWeekend
  }
}
</script>

<style>

</style>
