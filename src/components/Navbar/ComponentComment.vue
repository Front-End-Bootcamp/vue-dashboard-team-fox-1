<template>
  <div class="comment-alt-lines-1">
    <img
      alt=""
      class="vector"
      src="src/assets/comment.svg"
    />
  </div>
</template>

<script setup>
const comment = ref("Comment");
</script>

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