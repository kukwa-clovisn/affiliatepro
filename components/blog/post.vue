<template>
  <div class="post-content">
    <div class="post-user mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a href="#">
          <span class="sr-only text-left text-sm">kghgk</span>
          <img
            class="h-10 w-10 rounded-full"
            src="~/assets/gosp12.png"
            alt=""
          />
        </a>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          <a href="#" class="hover:underline text-left text-sm">author</a>
        </p>
        <div class="flex space-x-1 text-sm text-gray-500">
          <time datetime="2020-03-16">Mar 16, 2020</time>
          <span aria-hidden="true">·</span>
          <span>6 min read</span>
        </div>
      </div>
    </div>

    <div class="post-tittle">
      <p tittle="post tittle complete without ellipsis..">post tittle</p>
    </div>
    <div class="post-image">
      <img src="~/assets/group.jpeg" alt="chart image." />
    </div>
    <div class="post-reactions">
      <blogReactionsLike />
      <blogReactionsComment />
      <blogReactionsBookmark />

      <button>
        <i class="fa-solid fa-share-nodes"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-content {
  width: 100%;
  height: fit-content;
  cursor: pointer;
  border: 1px solid rgb(238, 238, 238);
  padding: 5px 20px;

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
    width: 100%;
    max-height: 120px;

    p {
      font-size: 13px;
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
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-reactions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background: rgb(251, 251, 251);
  }
}
</style>
