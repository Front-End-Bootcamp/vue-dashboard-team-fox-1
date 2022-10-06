<script setup>
const props = defineProps(["status"]);
</script>

<template>
	<div class="status"></div>
</template>

<style scoped>
.statusActive {
	position: absolute;
	width: 37px;
	height: 15px;
	left: 389px;
	top: 251px;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
	color: #00db99;
}
.statusHold {
	position: absolute;
	left: 37.58%;
	right: 52.93%;
	top: 35%;
	bottom: 60%;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
	color: #f0bb00;
}
.statusInactive {
	position: absolute;
	width: 46px;
	height: 15px;
	left: 1435px;
	top: 251px;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
	color: #ff285c;
}
</style>
