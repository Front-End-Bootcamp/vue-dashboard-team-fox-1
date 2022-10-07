<template>
	<div class="component-user">
		<img alt="" class="profile" src="src/assets/images/profilephoto.png" />
		<div class="flex-wrapper-one">
			<small class="username">Asfak Mahmud</small>
			<small class="mail">asfakmahmudbd&#64;gmaill.com</small>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.component-user {
	display: flex;
	align-items: flex-start;
}
.profile {
	margin-top: 12px;
	width: 18.43%;
	margin-right: 16px;
	border-radius: 50%;
	object-fit: cover;
}
.flex-wrapper-one {
	padding: 1px 0 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.username {
	margin-top: 14px;
	font-size: 16px;
	font-weight: 500;
	color: rgba(37, 54, 79, 1);
}
.mail {
	height: 38.89%;
	color: rgba(139, 139, 139, 1);
	align-self: stretch;
}
</style>
