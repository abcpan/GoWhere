var defaultCity="北京"
try {
	if(localStorage.city){
		defaultCity = localStorage.city
	}
}catch (err) {                //尝试运行try后面的代码 如果错误 catch中的err 接收错误

}

export default {
	city: defaultCity     //导出的是内容
}