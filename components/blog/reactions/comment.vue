
<script setup>
const createPost = useCreatePostState();
</script>
<template>
  <button @click="($event) => (createPost = true)">
    <i class="fa-regular fa-comment"></i>
    <span>50</span>
  </button>
</template>

<style lang="scss" scoped>
button {
  outline: None;
  border: none;
  width: fit-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    font-size: 20px;
    margin-right: 5px;
  }

  span {
    font-size: 9px;
  }
}
</style>