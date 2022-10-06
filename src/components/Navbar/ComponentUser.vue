<template>
  <div class="component-user">
    <img
      alt=""
      class="profile"
      src="src/assets/profilephoto.png"
    />
    <div class="flex-wrapper-one">
      <p class="asfak-mahmud">Asfak Mahmud</p>
      <p class="asfakmahmudbd-com">
        asfakmahmudbd&#64;gmaill.com
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const profile = ref("src/assets/profilephoto.png");
const asfakMahmud = ref("Asfak Mahmud");
const asfakmahmudbdCom = ref("asfakmahmudbd&#64;gmaill.com");
</script>

<style lang="scss" scoped>
.component-user {
  display: flex;
  align-items: flex-start;
}
.profile {
  width: 18.43%;
  align-self: stretch;
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
.asfak-mahmud {
  width: 67.7%;
  height: 52.78%;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: rgba(37, 54, 79, 1);
  margin-bottom: 4px;
}
.asfakmahmudbd-com {
  height: 38.89%;
  color: rgba(139, 139, 139, 1);
  align-self: stretch;
  @include roboto-12-regular;
}
</style>