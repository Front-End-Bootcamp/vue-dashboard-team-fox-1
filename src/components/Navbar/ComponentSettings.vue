<script setup>
import { ref } from "vue";
const settings = ref("Settings");
</script>

<template>
	<div class="settings">
		<img alt="" class="vector" src="src/assets/icons/settings.svg" />
	</div>
</template>

<style lang="scss" scoped>
.settings {
	cursor: pointer;
}
.vector {
	margin-top: 12px;
	width: 23.33px;
	height: 23.33px;
}
</style>
