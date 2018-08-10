<template>
	<div>
		<detail-banner :name="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="categoryList"></detail-list>
		</div>
	</div>
</template>

<script>
	import DetailHeader from './components/Header'
	import DetailBanner from './components/Banner'
	import DetailList from './components/List'
	import axios from 'axios'

	export default {
		name: 'Detail',
		components: {
			DetailBanner: DetailBanner,
			DetailHeader: DetailHeader,
			DetailList: DetailList
		},
		data: function() {
			return {
				sightName:"",
				bannerImg:"",
				gallaryImgs: [],
				categoryList:[]
			}
		},
		methods: {
			getDetailInfo: function() {
				axios.get("/api/detail.json?id=", {
					params: {
						id: this.$route.params.id
					}
				}).then(this.getDetailInfoSucss)
			},
			getDetailInfoSucss: function(res) {
				var res = res.data
				if(res.ret && res.data) {
					console.log(res.ret);
					var data = res.data;
					this.sightName=  data.sightName;
					this.bannerImg = data.bannerImg;
					this.gallaryImgs = data.gallaryImgs;
					this.categoryList = data.categoryList;
				}
			}
		},
		mounted: function() {
			this.getDetailInfo();
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>