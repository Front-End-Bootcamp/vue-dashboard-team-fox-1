<script setup>
import Sidebar from "./components/Sidebar.vue";
import Card from "./components/Card/Card.vue";
import data from "./assets/data.json";
</script>

<template>
	<div>
		<Sidebar></Sidebar>
		<Card :data="data" />
	</div>
</template>

<style scoped></style>
