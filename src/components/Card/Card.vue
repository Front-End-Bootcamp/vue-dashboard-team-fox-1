<script setup>
import OptionIcon from "./OptionIcon.vue";
import CardInfo from "./CardInfo.vue";
import CardPictures from "./CardPictures.vue";
import CardDate from "./CardDate.vue";
import CardStatus from "./CardStatus.vue";
import CardEditIcon from "./CardEditIcon.vue";
import CardProgressBar from "./CardProgressBar.vue";
</script>

<template>
	<div class="card">
		<OptionIcon />
		<CardInfo />
		<CardPictures />
		<CardDate />
		<CardStatus />
		<CardEditIcon />
		<CardProgressBar />
	</div>
</template>

<style scoped lang="scss">
.card {
	box-sizing: border-box;
	height: 300px;
	width: 495px;
}
</style>
