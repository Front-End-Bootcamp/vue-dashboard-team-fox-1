<script setup>
const props = defineProps(["picture"]);
console.log("pictures",props.picture);
JSON.stringify
</script>


<template>
	<div class="members" >
		<p>Members</p>
		<div >
			<img v-for="item in props.picture"
				class="members_image"
				v-bind:src=item
				/>
				<img class="members_image" v-bind:src="'../../../public/added.png'" />
			</div>
			
	</div>
</template>

<style scoped lang="scss">
.members {
	position: relative;
	margin-top: 35%;
	height: auto;
	width: auto;
	color: #3c557a;
	margin-left: 5%;
	margin-right: 5%;
}
.members > p {
	margin-bottom: 2px !important;
	margin-left: 2%;
}

.members_image {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-top: 2%;
	object-fit: cover;
	margin-left: 1%;
}
</style>
