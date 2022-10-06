<script setup>

const props = defineProps(["cardTask","cardUser"]);

</script>

<template>
	<div class="card_info" >
			<div class="card_task">
				<p class="value">{{props.cardTask}}</p>
				<p class="text">Task</p> 
			</div>
			<div class="card_user">
				<p class="value">{{props.cardUser}}</p>
				<p class="text">User</p> 
			</div>
const props = defineProps(["cardTask", "cardUser"]);
</script>

<template>
	<div class="card_info">
		<div class="card_task">
			<p class="task_value">{{ props.cardTask }}</p>
			<p class="task_text">Task</p>
		</div>
		<div class="card_user">
			<p class="task_value">4</p>
			<p class="task_text">User</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card_info {
	background-color: #f9f9f9;
	width: 25%;
	height: auto;
	position: relative;
	float: right;
	border-radius: 10%;
	margin-top: 20%;
	margin-right: 5%;
}
.card_task {
	position: relative;
	float: left;
	width: 50%;
	margin: 10px 5px 10px 0px;
	text-align: center;
	border-right: 1px solid #cddcee;
}
.text{
	margin: 1px 10px 5px 10px;
	color: #717986;
}
.value{
.task_text {
	margin: 1px 10px 5px 10px;
	color: #717986;
}
.task_value {
	margin: 5px 10px 5px 10px;
	color: #3c557a;
	font-weight: bold;
}
.card_user {
	float: left;
	margin: 10px 5px 10px 0px;
	width: 40%;
	text-align: center;
}
</style>
