<script setup>
import Card from "./components/Card/Card.vue";
import data from "./assets/data.json";
import Navbar from "./components/Navbar/Navbar.vue";
</script>

<template>
	<div>
		<Sidebar></Sidebar>
		<Navbar />
		<Card :cardValue="data" />
	</div>
</template>
