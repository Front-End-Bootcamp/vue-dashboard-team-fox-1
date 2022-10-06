<script setup>
import ComponentButton from "./ComponentButton.vue";
import ComponentFilter from "./ComponentFilter.vue";
import ComponentSearch from "./ComponentSearch.vue";
import ComponentSettings from "./ComponentSettings.vue";
import ComponentUser from "./ComponentUser.vue";
import ComponentNotification from "./ComponentNotification.vue";
import ComponentComment from "./ComponentComment.vue";
import ComponentsProjects from "./ComponentsProjects.vue";
</script>

<template>
	<div class="component-main">
		<div class="flex-wrapper-one">
			<ComponentsProjects class="components-projects" /><ComponentSearch
				class="component-search"
			/><ComponentComment class="component-comment" /><ComponentNotification
				class="component-notification"
			/><ComponentSettings class="component-settings" /><ComponentUser
				class="component-user"
			/>
		</div>
		<div class="flex-wrapper-one">
			<ComponentButton class="component-button" /><ComponentFilter
				class="component-button"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.component-main {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.flex-wrapper-one {
	display: flex;
	align-items: flex-start;
	&:not(:last-of-type) {
		margin-bottom: 32px;
	}
}
.components-projects {
	margin-top: 4px;
	margin-right: 404px;
}
.component-search {
	margin-top: 10px;
	margin-right: 547px;
}
.component-comment {
	margin-top: 6px;
	margin-right: 32px;
}
.component-notification {
	margin-top: 6px;
	margin-right: 34.33px;
}
.component-settings {
	margin-top: 8.33px;
	margin-right: 54.34px;
}
.component-user {
	align-self: stretch;
}
.component-button {
	align-self: stretch;
	&:not(:last-of-type) {
		margin-right: 30px;
	}
}
</style>
