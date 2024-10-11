<template>
  <div class="post-container">
    <div class="post-wrapper">
      <div class="post-user mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <span class="sr-only text-left text-sm">Roel Aufderehar</span>
            <img
              class="h-10 w-10 rounded-full"
              src="~/assets/gosp12.png"
              alt=""
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="font-bold text-gray-900">
            <a href="#" class="hover:underline text-left text-md"
              >Roel Aufderehar</a
            >
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <p class="text-gray-500">@username</p>
          </div>
        </div>
      </div>

      <div class="post-tittle">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic ea,
          <br />
          <br />
          quas excepturi assumenda reiciendis minima officia ullam minus!
          Dignissimos aut nobis, aliquam atque, at perferendis quis fugit illum
          cumque, voluptatem molestias corporis velit! Deleniti, <br />
          <br />
          <br />
          exercitationem, asperiores voluptas omnis dolor labore nobis veniam
          veritatis iure rerum blanditiis, illo vitae inventore.
        </p>
      </div>
      <div class="post-image">
        <img src="~/assets/group.jpeg" alt="chart image." />
      </div>
      <div class="flex space-x-1 text-sm text-gray-500 my-4">
        <time datetime="2020-03-16">Mar 16, 2020</time>
        <span aria-hidden="true">·</span>
        <span>6 min read</span>
      </div>
      <hr class="bg-gray-300" />
      <div class="post-reactions">
        <blogReactionsLike />
        <blogReactionsComment />
        <blogReactionsBookmark />
        <button>
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>
      <div class="replies-container">
        <blogPost v-for="i in 10" :key="i" @click="navigateTo('/blog/post')" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.post-container {
  width: 100%;
  height: fit-content;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 231);
  padding-top: 20vh;
  background: white;

  .post-wrapper {
    width: 80%;
    margin: auto;

    .post-user {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .post-user-logo {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .post-user-info {
        width: 80%;
        h2,
        p {
          font-size: 10px;
        }
      }
    }
    .post-tittle {
      width: 80%;
      height: fit-content;

      p {
        font-size: 16px;
        text-align: left;
        padding: 20px 10px;
        width: 100%;
        margin: 5px auto;
        // white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .post-image {
      width: 80%;
      height: fit-content;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    hr {
      height: 1px;
      width: 80%;
    }

    .post-reactions {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .replies-container {
      width: 80%;
    }
  }
}
</style>