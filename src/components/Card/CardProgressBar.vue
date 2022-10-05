<script setup>
import {ref} from "vue"
let percent = ref(parseFloat(Math.random()*100).toFixed(0))
console.log(percent);
</script>

<template>
	<div class="progressText"> Progress <span class="progressBarText" >{{percent}}%</span></div>
		<div class="box">
			<div class="progressBar" :style="{'width':percent+'%'}" >
		</div>
	</div>
</template>

<style lang="scss" scoped>
.box {
	width: 100%;
	height: 8px;
	margin-right: 26px;
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
	margin-right: 26px;
	margin-top: 8px;
	margin-bottom: 24px;
	border-radius: 75px;
	background:#1BE3A7;
	box-shadow:  3px 3 px 30px 3px rgba(0, 0, 0, 0.1);
	text-align: right;
	align-items: center;
}
.progressText{
	margin-top: 206px;
	color: black;
	text-align: left;
	font-size: 13px;

}
.progressBarText{
	color: black;
	float: right;
	font-size: 12px;
}
</style>