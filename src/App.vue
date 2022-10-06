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
		task: 11,
		user: 8,
		membersPictures:["https://picsum.photos/id/14/200/200","https://picsum.photos/id/18/200/200","https://picsum.photos/id/21/200/200","https://picsum.photos/id/30/200/200","https://picsum.photos/id/35/200/200" ]
	}
]);
</script>

<template>
	<div>
		<Card :cardValue="card" />	
	</div>
</template>

<style>
body {
	background-color: #e5e5e5;
}
</style>
