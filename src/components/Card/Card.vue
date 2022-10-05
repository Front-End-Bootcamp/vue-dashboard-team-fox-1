<script setup>
import OptionIcon from "./OptionIcon.vue";
const props = defineProps([
	"isActive",
	"title",
	"date",
	"tasks",
	"users",
	"progress",
]);
</script>

<template>
	<div class="card">
		<OptionIcon />
	</div>
</template>

<style scoped lang="scss">
.card {
	box-sizing: border-box;
	height: 300px;
	width: 495px;
}
 	</style>

// import CardEditIcon from "./CardEditIcon.vue";
// import CardProgressBar from "./CardProgressBar.vue";
// </script>
	
// 	<template>
// 		<div class="card">
			
// 			<CardEditIcon />

// 			<CardProgressBar />
			
// 		</div>
// 	</template>
	
// 	<style scoped lang="scss">
// 		.card {
// 	box-sizing: border-box;
// 	height: 300px;
// 	width: 495px;
// 	color: black;

// 	background-color: #ffffff;
// 	border: 1px solid #e5e5e5;
// 	border-radius: 8px;
// 	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
// 		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
// }
// </style>
// .progress {

// 	margin-top: 210px;
// 	text-align: left;
// }

// 	</style>
