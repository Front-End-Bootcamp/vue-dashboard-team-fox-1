<script setup>
import Sidebar from "./components/Sidebar.vue";
import Card from "./components/Card/Card.vue";
</script>

<template>
	<div>
		<Sidebar></Sidebar>
		<Card style="margin: 150px" />
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
