<script setup>
import CardInfo from "./CardInfo.vue";
import CardPictures from "./CardPictures.vue";

const props = defineProps(["cardValue"]);
</script>

<template>
	<div class="card" v-for="item in props.cardValue">
		<CardInfo :cardTask="item.task" :cardUser="item.user" />
		<CardPictures :picture="item.membersPictures" />
	</div>
</template>

<style scoped lang="scss">
.card {
	box-sizing: border-box;
	height: 300px;
	width: 495px;
}
</style>
