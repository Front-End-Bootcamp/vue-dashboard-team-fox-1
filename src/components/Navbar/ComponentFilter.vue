<script setup>
import { ref } from "vue";

const all = ref("All");
const inactive = ref("Inactive");
const active = ref("Active");
const onHold = ref("On hold");
const completed = ref("Completed");
const defaultSort = ref("Default");
</script>

<template>
	<div class="component-filter">
		<p class="all">All</p>
		<p class="inactive">Inactive</p>
		<p class="active">Active</p>
		<p class="on-hold">On hold</p>
		<p class="completed">Completed</p>
		<div class="sort-amount-down-1">
			<p class="default">Default</p>
			<img alt="" class="vector" src="src/assets/icons/dropdown.svg" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.component-filter {
	background-color: rgba(255, 255, 255, 1);
	border-radius: 8px;
	padding: 13px 19px 13px 39px;
	display: flex;
	align-items: center;
	border: 1px solid rgba(241, 242, 247, 1);
}
.all {
	width: 1.28%;
	height: 66.67%;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 700;
	line-height: normal;
	color: rgba(37, 54, 79, 1);
	margin-right: 47px;
}
.inactive {
	width: 3.69%;
	height: 66.67%;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: rgba(139, 139, 139, 1);
	margin-right: 48px;
}
.active {
	width: 2.94%;
	height: 66.67%;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: rgba(139, 139, 139, 1);
	margin-right: 48px;
}
.on-hold {
	width: 3.61%;
	height: 66.67%;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: rgba(139, 139, 139, 1);
	margin-right: 48px;
}
.completed {
	width: 5.12%;
	height: 66.67%;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: rgba(139, 139, 139, 1);
	margin-right: 892px;
}
.sort-amount-down-1 {
	width: calc(1.81% - 4px);
	overflow: hidden;
	padding: 6px 2px;
	align-self: stretch;
	position: relative;
}
.default {
	width: 187.5%;
	height: 66.67%;
	font-family: "Roboto";
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	color: rgba(139, 139, 139, 1);
	position: absolute;
	left: -61px;
	top: 4px;
}
.vector {
	width: 100%;
	height: 100%;
}
</style>
