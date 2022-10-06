<script setup>
import {ref} from "vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Card from "./components/Card/Card.vue";
import DATA from "@/assets/data/data.json";
const allData = ref([]);
console.log(DATA);
allData.value = DATA;
</script>

<template>
	<div class="container">
		<div><Sidebar></Sidebar></div>
			<div class="cardContent">
			<Card :cardValue="allData"  />
		</div>
	</div>

	

</template>

<style scoped></style>


<style  lang="scss" scoped>

	.cardContent {
		margin: 15px;
		background: #FFFFFF;
		// display: flex;
    // flex-wrap: wrap;
    // flex-direction: row;
		display: grid;
  	grid-template-columns: 1fr 1fr 3fr;
		margin-left: 250px;
		box-sizing: content-box;
		
	}

	.container {
		display: flex;
		flex-direction: column;
	}


</style>
