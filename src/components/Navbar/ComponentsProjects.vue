<script setup>
import { ref } from "vue";
const projects = ref("Projects");
</script>

<template>
	<p class="projects">Projects</p>
</template>

<style lang="scss" scoped>
.projects {
	font-family: "Roboto";
	font-size: 24px;
	font-weight: 500;
	line-height: normal;
	color: rgba(60, 85, 122, 1);
}
</style>
