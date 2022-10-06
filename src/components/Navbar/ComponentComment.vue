<script setup>
import { ref } from "vue";
const comment = ref("Comment");
</script>

<template>
	<div class="comment-alt-lines-1">
		<img alt="" class="vector" src="src/assets/icons/comment.svg" />
	</div>
</template>

<style lang="scss" scoped>
.comment-alt-lines-1 {
	padding: 2.33px 2.34px 2.34px 2.33px;
	display: flex;
	align-items: center;
}
.vector {
	width: 100%;
	align-self: stretch;
	object-fit: cover;
}
</style>
