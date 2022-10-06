<script setup></script>

<template>
	<div class="optionButton"></div>
</template>

<style scoped lang="scss">
.optionButton {
	position: relative;
	width: 3.5px;
	height: 3.5px;
	border-radius: 50%;
	left: 480px;
	top: 10px;
	background-color: #8b8b8b;
	cursor: pointer;
}

.optionButton:before,
.optionButton:after {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	background-color: inherit;
	border-radius: inherit;
}
.optionButton:before {
	top: 6px;
}
.optionButton:after {
	top: 12px;
}
</style>
