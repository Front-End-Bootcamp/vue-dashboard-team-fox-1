<script setup>
	import Status from "./CardStatus.vue";
	import Date from "./CardDate.vue";
	const props = defineProps(['data']);
	</script>
	
	<template>
		<div class="card">
			<Status :data="data" />
			<Date :data="data"/>
		</div>
	</template>
	
	<style scoped lang="scss">
	.card {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		height: 300px;
		width: 495px;
		margin-left: 300px;
		background-color: #ffffff;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}
	
	</style>
	