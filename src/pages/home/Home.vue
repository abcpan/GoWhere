<!-- 模板 -->
<template>
	<!-- template对外只能暴露一个根页面标签 -->
	<home-header></home-header>
</template>
<!-- 模板的逻辑 -->
<script>
	//HomeHeader为name 的名称(组件名) 区别于文件名
import HomeHeader from './components/Header'
export default{
  name: 'Home',
  components: {
  	HomeHeader: HomeHeader
  }
}
</script>

<style>

</style>
