<script setup>
import { ref } from "vue";
const newProject = ref("newProject");
</script>

<template>
	<div class="component-button">
		<p class="plus-10">+</p>
		<small class="newProject">New</small>
	</div>
</template>

<style lang="scss" scoped>
.component-button {
	display: flex;
	justify-content: space-between;
	height: 0.75 * 52px;
	width: 0.75 * 127px;
	border-radius: 26px;
	box-sizing: border-box;
	background: #00db99;
	position: absolute;
	top: 80px;
	cursor: pointer;
	margin-left: 250px;
}
.plus-10 {
	display: inline-flex;
	align-items: center;
	align-self: stretch;
	font-size: 25px;
	margin: 0 16px;
	color: rgba(255, 255, 255, 1);
}

.newProject {
	width: 50.7%;
	height: 87.5%;
	font-family: "Roboto";
	font-size: 18px;
	font-weight: 500;
	line-height: normal;
	margin-top: 8px;
	color: rgba(255, 255, 255, 1);
}
</style>
