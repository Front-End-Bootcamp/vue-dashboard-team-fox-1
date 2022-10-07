<script setup>
const props = defineProps(["date"]);
</script>

<template>
	<div class="card__startDate">
		<small>Start Date</small> <br />
		<small class="date">{{ props.date }}</small>
	</div>
</template>

<style scoped>
.card__startDate {
	margin-top: 20px;
	color: #717986;
}
.date {
	margin-left: 14px;
	font-size: 14px;
}
</style>
