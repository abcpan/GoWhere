<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list 
			:hot="hot" 
			:cities="cities"
			:letter ="letter"
		></city-list>
		<city-alphabet 
			:cities="cities" 
			@change="handleLetterChange"
		></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
	export default {
		name: 'City',
		components: {
			CityHeader: CityHeader,
			CitySearch: CitySearch,
			CityList: CityList,
			CityAlphabet: CityAlphabet
		},
		data: function() {
			return {
				hot: [],
				cities: {},
				letter: ''
			}
		},
		methods: {
			getCityInfo:function() {
				axios.get("/api/city.json")
					.then(this.getCityInfoSucc)
			},
			getCityInfoSucc:function(res) {
				var res = res.data //res为对象  res.data 为取得数据
				if(res.ret && res.data) {
					const data = res.data
					this.hot = data.hotCities
					this.cities = data.cities
				}
			},
			handleLetterChange: function(letter){
				this.letter = letter
			}
		},
		mounted:function() {
			this.getCityInfo()
		}
	}
</script>
	
<style>
	
</style>