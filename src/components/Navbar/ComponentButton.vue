<template>
  <div class="component-button">
    <div class="plus-10">
      <img
        alt=""
        class="vector"
        src="src/assets/plus.svg"
      />
    </div>
    <p class="new">New</p>
  </div>
</template>

<script setup>
const new = ref("New");
</script>

<style lang="scss" scoped>
.component-button {
  background-color: rgba(0, 219, 153, 1);
  border-radius: 26px;
  padding: 14px 32px 14px 24px;
  display: flex;
  align-items: center;
}
.plus-10 {
  width: calc(33.8% - 8px);
  margin-right: 11px;
  padding: 4px;
  display: flex;
  align-items: center;
  align-self: stretch;
}
.vector {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}
.new {
  width: 50.7%;
  height: 87.5%;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
}
</style>