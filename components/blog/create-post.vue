
<script setup>
const createPost = useCreatePostState();
</script>

<template>
  <form id="form">
    <div
      class="blur-wrapper pointer"
      @click="($event) => (createPost = false)"
    ></div>
    <div
      class="form-container mb-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div
        class="text-area-div flex px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800"
      >
        <label for="editor" class="rounded-full"
          ><img src="~/assets/gosp1.png" alt=""
        /></label>
        <textarea
          id="editor"
          rows="1"
          class="block w-full px-4 py-4 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 active:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Create a post..."
          required
        ></textarea>
      </div>
      <div
        class="w-full flex items-center justify-between px-3 py-2 border-b dark:border-gray-600"
      >
        <div
          class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600"
        >
          <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <button
              type="button"
              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                />
              </svg>
              <span class="sr-only">Attach file</span>
            </button>

            <button
              type="button"
              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path
                  d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                />
                <path
                  d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                />
              </svg>
              <span class="sr-only">Upload image</span>
            </button>

            <button
              type="button"
              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"
                />
              </svg>
              <span class="sr-only">Add emoji</span>
            </button>
          </div>
          <div
            class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4"
          ></div>
        </div>
        <button
          type="submit"
          class="inline-flex relative items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
#form {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form-container {
    width: 700px;
    min-height: 60vh;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;

    .text-area-div {
      width: 100%;
      align-items: flex-start;
      label {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      textarea {
        width: 650px;
        min-height: 100px;
        padding-top: 10px;
        outline: none;
      }
    }
  }
}
</style>