<script setup>
const props = defineProps(["status"]);
</script>

<template>
	<div class="status__wrapper">
		<div
			class="circle"
			:class="{
				circleActive: props.status === `Active`,
				circleInactive: props.status === `Inactive`,
				circleHold: props.status === `On Hold`,
			}"
		></div>
		<p
			class="card__status"
			:class="{
				statusActive: props.status === `Active`,
				statusInactive: props.status === `Inactive`,
				statusHold: props.status === `On Hold`,
			}"
		>
			{{ props.status }}
		</p>
	</div>
</template>

<style scoped>
.status__wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	margin: 0 30px;
}

.circle {
	width: 8px;
	height: 8px;
	border-radius: 50px;
	margin-right: 8px;
}

.circleActive {
	background-color: #00db99;
}
.circleHold {
	background-color: #f0bb00;
}
.circleInactive {
	background-color: #ff285c;
}

.card__status {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
}
.statusActive {
	color: #00db99;
}
.statusHold {
	color: #f0bb00;
}
.statusInactive {
	color: #ff285c;
}
</style>
