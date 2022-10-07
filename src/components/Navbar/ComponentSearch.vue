<script setup>
import { ref } from "vue";

const search = ref("Search");
</script>
<template>
	<div class="component-search">
		<img alt="" class="vector" src="src/assets/icons/search.svg" />
		<!-- <div class="rectangle-1"></div> -->
		<input class="rectangle-1" type="text" placeholder="Search" />
	</div>
</template>

<style lang="scss" scoped>
.component-search {
	overflow: hidden;
	padding: 1.65px 1.67px 1.69px 1.65px;
	position: relative;
}

.vector {
	width: 16.68px;
	padding: 2px;
	top: 11px;
	left: 8px;
	position: absolute;
}
.rectangle-1 {
	height: 0.75 * 24px;
	width: 0.75 * 422px;
	left: 0.75 * 818px;
	top: 0.75 * 32px;
	background: #f1f2f7;
	border: none;
	border-radius: 0.3rem;
	padding: 12px 30px;
}
</style>
