<script setup>

const props = defineProps(["cardInfo"]);
console.log("cardinfo",props.cardInfo.task);
</script>

<template>
	<div class="card_info" v-for="value in props.cardInfo">
			<div class="card_task">
				<p class="task_value">{{value.task}}</p>
				<p class="task_text">Task</p> 
			</div>
			<div class="card_user">
				<p class="task_value">{{value.user}}</p>
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
	border-right: 1px  solid #cddcee;
}
.task_text{
	margin: 1px 10px 5px 10px;
	color: #717986;
}
.task_value{
	margin: 5px 10px 5px 10px;
	color: #3c557a;
	font-weight: bold;
}
.card_user{
	float: left;
  margin: 10px 5px 10px 0px;
	width: 40%;
	text-align: center;
}

</style>
