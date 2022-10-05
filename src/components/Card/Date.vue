<script setup>
	const props = defineProps(['date']);

</script>

<template>
	<div class="dateText">Status Date</div>
</template>


<style scoped lang="scss">
.dateData{
	position: absolute;
	width: 73px;
	height: 15px;
	left: 373px;
	top: 325px;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;

	color: #717986;
}
.dateText {
	position: absolute;
	width: 53px;
	height: 14px;
	left: 373px;
	top: 303px;
		
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	/* identical to box height */

	color: #717986;
}

</style>