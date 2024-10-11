<script setup>
const addLike = (val) => {
  alert(val);
};
</script>

<template>
  <button @click="addLike(4)">
    <i class="fa-solid fa-heart"></i>
    <span>1.3k</span>
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