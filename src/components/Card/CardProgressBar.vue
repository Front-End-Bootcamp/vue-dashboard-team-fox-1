<script setup>
const props = defineProps(['progress'])
console.log(props.progress);

</script>

<template>
	<div class="progressText"> Progress <span class="progressBarText" >{{props.progress}}%</span></div>
	<div class="box">
			<div class="progressBar"  :style="{'width':props.progress + '%'}" ></div>	
	</div>
	
</template>

<style lang="scss" scoped>
.box {
	width: 439px;
	height: 8px;
	margin-right: 28px;
	margin-left: 28px;
	margin-top: 8px;
	margin-bottom: 24px;
	border-radius: 75px;
	background:#F1F2F7;
	box-shadow:  3px 3 px 30px 3px rgba(0, 0, 0, 0.1);
	text-align: right;
	align-items: center;
}
.progressBar {
	width: 100%;
	height: 8px;
	margin-top: 8px;
	margin-bottom: 24px;
	border-radius: 75px;
	background:#1BE3A7;
	box-shadow:  3px 3 px 30px 3px rgba(0, 0, 0, 0.1);
	text-align: right;
	align-items: center;
}
.progressText{
	margin-top: 16px;
	color: black;
	text-align: left;
	font-size: 13px;
	margin-right: 28px;
	margin-left: 28px;
	font-weight: 500;

}
.progressBarText{
	color: black;
	float: right;
	font-size: 12px;
}
</style>