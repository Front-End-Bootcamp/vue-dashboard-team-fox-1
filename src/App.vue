<script setup>
import { ref } from "vue";
import Card from "./components/Card/Card.vue";

const card = ref([
	{
		task: 14,
		user: 5,
		membersPictures:[ "https://picsum.photos/id/41/200/200","https://picsum.photos/id/77/200/200","https://picsum.photos/id/99/200/200" ]
	},
	{
		task: 21,
		user: 2,
		membersPictures:["https://picsum.photos/id/14/200/200","https://picsum.photos/id/18/200/200","https://picsum.photos/id/21/200/200","https://picsum.photos/id/30/200/200","https://picsum.photos/id/35/200/200" ]
	},
	{
		task: 3,
		user: 11,
		membersPictures:["https://picsum.photos/id/35/200/200" ]
	},
	{
		task: 24,
		user: 4,
		membersPictures:[ "https://picsum.photos/id/41/200/200","https://picsum.photos/id/77/200/200","https://picsum.photos/id/99/200/200" ]
	},
	{
		task: 25,
		user: 5,
		membersPictures:["https://picsum.photos/id/14/200/200","https://picsum.photos/id/18/200/200","https://picsum.photos/id/21/200/200","https://picsum.photos/id/30/200/200","https://picsum.photos/id/35/200/200" ]
	},
	{
		task: 12,
		user: 3,
		membersPictures:["https://picsum.photos/id/35/200/200" ]
	},
	{
		task: 34,
		user: 3,
		membersPictures:[ "https://picsum.photos/id/41/200/200","https://picsum.photos/id/77/200/200","https://picsum.photos/id/99/200/200" ]
	},
	{
		task: 2,
		user: 1,
		membersPictures:["https://picsum.photos/id/14/200/200","https://picsum.photos/id/18/200/200","https://picsum.photos/id/21/200/200","https://picsum.photos/id/30/200/200","https://picsum.photos/id/35/200/200" ]
	},
	{
		task: 13,
		user: 8,
		membersPictures:["https://picsum.photos/id/35/200/200" ]
	}
]);
</script>

<template>
	<div>
		<Card :cardValue="card" />	
	</div>
</template>

<style scoped></style>

<!-- <script setup>
import Card from './components/Card/Card.vue';
</script>

<template>
	<div class="container">
		<div class="cardContent"><Card ></Card></div>
		<div class="cardContent"><Card ></Card></div>
	</div>
	
</template>

<style  lang="scss" scoped>
	.container {
		display: flex;
		background: #E5E5E5;
	}
	.cardContent {
		margin: 15px;
	}


</style> -->
