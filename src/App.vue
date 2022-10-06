<script setup>
import Card from "./components/Card/Card.vue";
import data from "./assets/data.json";
import Navbar from "./components/Navbar/Navbar.vue";
import Sidebar from "./components/SideBar/Sidebar.vue";
</script>

<template>
	<div>
		<!-- <Navbar /> -->
		<Sidebar />
		<!-- <Card :cardValue="data" /> -->
	</div>
</template>
