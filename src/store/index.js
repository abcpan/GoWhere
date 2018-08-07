import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

//使用插件
Vue.use(Vuex)

export default new Vuex.Store({
	//存储全局公用的数据
	state: state,
	//监听组件传过来的事件
	// actions: {
	// 	changeCity: function(ctx,city) {   // ctx 为上下文参数
	// 		ctx.commit("changeCity",city);
	// 	}
	// },
	//存储对数据的改变
	mutations: mutations
})