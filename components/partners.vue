<template>
  <div class="partner-container">
    <div class="wrapper">
      <section>
        <h1 class="text-left uppercase font-bold p-4 px-0 text-3xl">
          Meet My <span class="text-orange-500 font-extrabold">Partners</span>
        </h1>
        <p class="text-left">
          Get to know my network and connections and partners in this field.
        </p>
        <nuxt-link
          to="/signup"
          class="block w-fit bg-gray-300 py-2 px-5 ml-0 mt-3 rounded capitalize"
          >Join Mentroship</nuxt-link
        >
      </section>
      <div class="absolute-div show-lg">
        <div class="item">
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="item">
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/gospel4.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/gospel3.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="item">
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/gw.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/gospel3.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/gospel.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div class="absolute-div show-sm">
        <div class="item">
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="item">
          <nuxt-link
            to="/signin"
            class="block w-fit bg-gray-300 py-2 px-5 ml-0 mt-3 rounded capitalize"
            >Join Mentorship</nuxt-link
          >
        </div>
        <div class="item">
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div
            class="content h-44 w-44 overflow-hidden rounded-lg lg:opacity-100"
          >
            <img
              src="~/assets/g.png"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partner-container {
  width: 100%;
  height: fit-content;

  .wrapper {
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    margin: auto;
    padding-top: 7vh;
    padding-bottom: 6vh;

    section {
      position: relative;
      width: 37%;
      height: fit-content;

      h1 {
        color: rgb(19, 184, 167);
      }
      a {
        background: rgb(19, 184, 167);
        color: white;
      }
    }

    .absolute-div {
      width: 60%;
      min-height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        width: 150px;

        .content {
          width: 100%;
          height: 170px;
          flex-basis: 1;
          background: rgb(19, 184, 167);
          box-shadow: 0 0 40px 1px rgb(203, 203, 203);
          border-radius: 7px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top center;
          }
        }
        a {
          background: rgb(19, 184, 167);
          color: white;
        }
      }
    }
    .show-sm {
      display: none;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      section {
        width: 100%;

        h1,
        p {
          text-align: center;
        }
        a {
          margin: 20px auto;
        }
      }
      .show-lg {
        display: none;
      }
      .show-sm {
        display: flex;
        width: 100%;
        flex-direction: column;

        .item {
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          .content {
            width: 150px;
            flex-grow: 1;

            img {
              object-position: top center;
            }
          }
        }
      }
      @media screen and (max-width: 500px) {
        .show-sm {
          flex-direction: column;
          .item {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;

            .content {
              width: 150px;
              flex-grow: 1;
            }
          }
        }
      }
    }
  }
}
</style>
