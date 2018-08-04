import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
	routes: [{
		  path: '/',
		  name: 'Home', // 组件的名称
		  component: Home // 组件的文件名
	},{
			path: '/city',
			name:'City',
			component: City
	}]
})
