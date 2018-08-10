// 实现页面的跳转
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
	routes: [{
		  path: '/',   // 访问路径
		  name: 'Home', // 组件的名称
		  component: Home // 组件的文件名
	},{
			path: '/city',
			name:'City',
			component: City
	},{
		path: '/detail/:id',   // 动态路径,id为参数
		name: 'Detail',
		component: Detail
	}],
	scrollBehavior(to,from,savedPosition) {
		return {x:0,y:0}
	}
})
