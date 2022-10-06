<script setup>
import {ref} from "vue";
import OptionIcon from "./OptionIcon.vue";
import CardInfo from "./CardInfo.vue";
import CardPictures from "./CardPictures.vue";
import CardDate from "./CardDate.vue";
import CardStatus from "./CardStatus.vue";
import CardEditIcon from "./CardEditIcon.vue";
import CardProgressBar from "./CardProgressBar.vue";
const props = defineProps(['cardValue']);
</script>

<template>
	<div class="card">
	<div class="container">
		<CardEditIcon :title="props.cardValue"  >   </CardEditIcon>
		<OptionIcon />
	</div>
	<CardStatus  > </CardStatus>
	<div class="dateInfo">
		<CardInfo  ></CardInfo>
		<CardDate  />
		</div>
		

		<CardPictures />
		
		<CardStatus  />
		
		<CardProgressBar  />
	</div>
</template>

<style scoped lang="scss">
.card {
	box-sizing: border-box;
	height: 300px;
	width: 495px;
	background: #FFFFFF;
	border: 1px solid #E5E5E5;
	border-radius: 8px;
	margin-right: 15px;
	margin-left: 15px;
	margin-top: 15px;
	margin-bottom: 15px;
}
.card:hover {
	box-shadow: 0 0 11px #E5E5E5 ; 
	}
.container{
	display: flex;
}
.dateInfo{
	display: inline;
}
</style>
