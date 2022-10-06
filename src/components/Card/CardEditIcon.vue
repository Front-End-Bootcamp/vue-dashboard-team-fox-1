<script setup>
import OptionIcon from "./OptionIcon.vue";
const props = defineProps(["title"]);
</script>

<template>
	<div class="projectTitle">
		{{ props.title }}
		<div class="editIcon">
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.84 2.96L13.04 6.16L3.2 16H0V12.8L9.84 2.96ZM10.96 1.84L12.8 0L16 3.2L14.16 5.04L10.96 1.84V1.84Z"
					fill="#8B8B8B"
				/>
			</svg>
			<OptionIcon />
		</div>
	</div>
</template>

<style scoped>
.editIcon {
	cursor: pointer;
}
.projectTitle {
	justify-content: space-between;
	margin-right: 28px;
	margin-left: 28px;
	margin-top: 24px;
	display: flex;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
