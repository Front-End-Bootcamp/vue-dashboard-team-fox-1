<script setup>
const props = defineProps(["date"]);
</script>

<template>
	<div class="card__startDate">
		<small>Start Date</small>
		<p class="date">{{ props.date }}</p>
	</div>
</template>

<style scoped>
.card__startDate {
	margin: 0 25px;
	color: #717986;
}
.date {
	margin: 5px 0;
}
</style>
