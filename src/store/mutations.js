
export default {
	changeCity: function(state,city) {   // 监听组件传递过过来的changeCity事件
			state.city=city;
			try {
				localStorage.city=city
			}catch (err){

			}
		}
}

