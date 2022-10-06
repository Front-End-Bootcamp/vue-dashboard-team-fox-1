<script setup>
import { computed } from 'vue';
import Sidebar from "./components/Sidebar.vue";
import Card from "./components/Card.vue";
import cardData from "./assets/svg/data.json";
import Status from './components/Status.vue';

const values = computed(() => {
	return cardData
})

</script>

<template>
	<Sidebar/>
	<Card v-for="(value, index) in values" :key="index" :data="value"/>
</template>

<style scoped>
</style>
