<script setup>
import OptionIcon from "./OptionIcon.vue";
import CardInfo from "./CardInfo.vue";
import CardPictures from "./CardPictures.vue";

const props = defineProps(["cardValue"]);

</script>

<template>
	<div class="card" v-for="item in props.cardValue">
		<OptionIcon />
		<CardInfo :cardTask="item.task"  :cardUser="item.user" />
		<CardPictures :picture="item.membersPictures"/>
	</div>
</template>

<style scoped lang="scss">
.card {
	box-sizing: border-box;
	height: 300px;
	width: 495px;
	background-color: #ffffff;
	border: 1px solid #e5e5e5;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
</style>
