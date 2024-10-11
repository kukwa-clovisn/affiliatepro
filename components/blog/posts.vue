<script setup>
const posts = ref([]);

const myFunc = () => {
  for (let i = 0; i < 20; i++) {
    let randomLike = ref(Math.floor(Math.random() * 100 * i));
    let randomBm = ref(Math.floor(Math.random() * 100 * i));
    let randomViews = ref(Math.floor(Math.random() * 100 * i));

    let singlePost = ref({
      id: i,
      Author: "codingherald",
      username: "kcn",
      tittle: "gold trading weekly analysis",
      imageUrl: "image link here",
      likes: randomLike.value,
      comments: [
        {
          Author: "codingherald",
          username: "kcn",
          tittle: "commenting now on  gold trading weekly analysis",
          imageUrl: "backup image url",
          likes: randomLike.value,
          comments: [],
          bookmarks: randomBm.value,
          views: randomViews.value,
        },
      ],
      bookmarks: randomBm.value,
      views: randomViews.value,
    });

    posts.value.push(singlePost.value);
  }
  console.log(posts.value[2]);
};

myFunc();
</script>

<template>
  <div class="posts" id="posts">
    <div class="post-wrapper">
      <blogPost
        v-for="pt in posts"
        :key="pt.id"
        @click="navigateTo('/blog/post')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  width: 100%;
  padding: 20px 0;

  .post-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
  }
}
</style>
