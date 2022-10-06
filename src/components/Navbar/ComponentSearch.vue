<script setup>
import { ref } from "vue";

const search = ref("Search");
</script>
<template>
	<div class="component-search">
		<p class="search">Search</p>
		<img alt="" class="vector" src="src/assets/icons/search.svg" />
		<div class="rectangle-1"></div>
	</div>
</template>

<style lang="scss" scoped>
.component-search {
	overflow: hidden;
	padding: 1.65px 1.67px 1.69px 1.65px;
	position: relative;
}
.search {
	width: 43px;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: rgba(139, 139, 139, 1);
	position: absolute;
	right: -55px;
	top: 2px;
}
.vector {
	width: 100%;
	height: 100%;
}
.rectangle-1 {
	width: 2210%;
	height: 240%;
	background-color: rgba(241, 242, 247, 1);
	border-radius: 8px;
	position: absolute;
	left: -1786px;
	top: -14px;
}
</style>
