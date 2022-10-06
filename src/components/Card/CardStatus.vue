<script setup>
	const props = defineProps(['data']);
		const userStatus =  props.data?.status
		console.log("sds", userStatus);
</script>


	<template>
		<div class="status__wrapper">
			<div class="circle"
			:class="{
				circleActive: userStatus === `Active`, 
				circleInactive: userStatus === `Inactive`, 
				circleHold: userStatus === `On Hold`}"></div>
			<p 
			class="card__status"
			:class="{
				statusActive: userStatus === `Active`, 
				statusInactive: userStatus === `Inactive`, 
				statusHold: userStatus === `On Hold`}"
			>
				{{userStatus}}
			</p>
		</div>
	</template>


<style scoped>

.status__wrapper{
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
}

.circle{
	width: 8px;
	height: 8px;
	border-radius: 50px;
	margin-right: 8px;
}

.circleActive{
	background-color: #00DB99;
}
.circleHold{
	background-color: #F0BB00;
}
.circleInactive{
	background-color: #FF285C;
}

.card__status{
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
}
.statusActive{
	color: #00DB99;
}
.statusHold{
	color: #F0BB00;
}
.statusInactive{
	color: #FF285C;
}
</style>
