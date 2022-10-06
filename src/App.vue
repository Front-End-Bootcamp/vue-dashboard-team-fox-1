<script setup>
import { ref } from "vue";
import Card from "./components/Card/Card.vue";

const card = ref([
	{
		task: 14,
		user: 5,
		membersPictures:["https://picsum.photos/200/200","https://picsum.photos/200/300","https://picsum.photos/200/300" ]
	},
	{
		task: 21,
		user: 2,
		membersPictures:["https://picsum.photos/200/200","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300" ]
	}
]);
</script>

<template>
	<div>
		<Card :cardValue="card" v-for="item in card.length" />
	</div>
</template>

<style>
body {
	background-color: #e5e5e5;
}
</style>
