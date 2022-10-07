<script setup>
import CardInfo from "./CardInfo.vue";
import CardPictures from "./CardPictures.vue";
import CardDate from "./CardDate.vue";
import CardStatus from "./CardStatus.vue";
import CardEditIcon from "./CardEditIcon.vue";
import CardProgressBar from "./CardProgressBar.vue";

const props = defineProps(["data"]);
</script>

<template>
	<div class="card" v-for="item in props.data">
		<div class="title">
			<CardEditIcon :title="item.title" />
		</div>

		<div class="status">
			<CardStatus :status="item.status" />
			<CardDate :date="item.startDate" />
		</div>

		<CardInfo :task="item.task" :user="item.user" />
		<CardPictures :picture="item.membersPictures" />
		<CardProgressBar :progress="item.progress" />
	</div>
</template>

<style scoped lang="scss">
.status {
	float: left;
	text-align: center;
}

.card {
	position: relative;
	width: 550px;
	height: 290px;
	left: 0.9 * 345px;
	top: 50px;
	background-color: #ffffff;
	border: 1px solid #e5e5e5;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	margin: 12px;
}
</style>
