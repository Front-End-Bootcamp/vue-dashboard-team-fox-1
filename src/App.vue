<script setup>
import Card from "./components/Card/Card.vue";
import data from "./assets/data.json";
import Navbar from "./components/Navbar/Navbar.vue";
import Sidebar from "./components/SideBar/Sidebar.vue";
</script>

<template>
	<!-- <Navbar /> -->
	<Sidebar />
	<div class="wrapper">
		<div class="cardContent">
			<Card :data="data" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cardContent {
	background: #ffffff;
	display: grid;
	grid-template-columns: 1fr 1fr 2fr;
	box-sizing: content-box;
}
.wrapper {
	display: flex;
	flex-direction: column;
}
</style>
