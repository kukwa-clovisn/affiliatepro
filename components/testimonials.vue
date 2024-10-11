<template>
  <div class="testimonials">
    <h1
      class="text-center text-6xl font-extrabold py-6 px-2 capitalize text-white"
    >
      testimonials
    </h1>
    <p class="text-center text-gray-200 text-sm font-medium">
      Find out what some of our students have to say about our courss and
      trainings.
    </p>
    <div
      class="testimonial-wrapper w-3/4 m-auto flex flex-center gap-5 flex-wrap"
    >
      <el-carousel :interval="5000" arrow="always" height="auto">
        <el-carousel-item v-for="i in 5" :key="i">
          <div
            class="item relative bg-white flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
          >
            <div
              class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none"
            >
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="tania andrew"
                class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div class="flex w-full flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <h5
                    class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                  >
                    Tania Andrew {{ i + 1 }}
                  </h5>
                  <div class="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p
                  class="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased text-left"
                >
                  {{ i + 3 }} Frontend Lead @ Google
                </p>
              </div>
            </div>
            <div class="mb-6 p-0">
              <p
                class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
              >
                "I found solution to all my design needs from Creative Tim. I
                use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!"
              </p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonials {
  width: 100%;
  height: fit-content;
  background: rgb(19, 184, 167);
  padding: 6vh 0;

  .testimonial-wrapper {
    width: 100%;
    height: fit-content;
  }

  .el-carousel {
    background: transparent;
    height: fit-content !important;
    overflow-y: auto;

    width: 90%;
    margin: 20px auto;

    .el-carousel__container {
      width: 100% !important;
      height: fit-content;
      position: relative;
      border: 4px solid blue;

      .el-carousel__item {
        background: transparent !important;
        width: 100%;
        height: fit-content !important;
        padding: 20px 0;

        .item {
          width: 70%;
          height: fit-content;
          box-shadow: 0px 0px 15px 1px rgb(102, 102, 102);
          padding: 20px;
          margin: auto;
        }
      }
    }
  }
}
</style>
