<script setup>
import { ref } from "vue";
const notification = ref("Notification");
</script>

<template>
	<div class="bell-1">
		<img alt="" class="vector" src="src/assets/icons/notification.svg" />
	</div>
</template>

<style lang="scss" scoped>
.bell-1 {
	padding: 2.33px 4.66px 2.39px 4.67px;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.vector {
	margin-top: 12px;

	width: 100%;
	align-self: stretch;
	object-fit: cover;
}
</style>
