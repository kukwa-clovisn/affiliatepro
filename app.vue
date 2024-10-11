<template>
  <main v-loading="loading">
    <NuxtLayout>
      <div class="main-component">
        <div class="page-content">
          <NuxtPage />
        </div>
        <!-- <NuxtLayout name="page-header" /> -->
        <!-- <NuxtLayout name="page-footer" /> -->
        <blogCreatePost v-if="createPost" />
      </div>

      <div
        :class="[
          { active: menuState },
          { inactive: !menuState },
          'menu-container',
        ]"
        @click="openchat = false"
      >
        <div
          class="blur-wrapper"
          @click="($event) => (menuState = false)"
        ></div>
        <div
          :class="[
            { 'is-active': menuState },
            { inactive: !menuState },
            'menu-wrapper',
          ]"
        >
          <button class="close" @click="($event) => (menuState = false)">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="menu-header">
            <div class="logo">
              <img
                @click="($event) => navigateTo('/')"
                src="./assets/gospel.png"
                alt=""
              />
            </div>
            <p>Book and appointment with me today.</p>
            <button
              class="appointment"
              @click="
                ($event) => {
                  navigateTo('/appointment'), (menuState = false);
                }
              "
            >
              book an appointment now!
            </button>
          </div>

          <div class="services">
            <h2>Browse our services</h2>
            <div class="service-wrapper">
              <NuxtLink to="/" @click="($event) => (menuState = false)"
                >home <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
              <NuxtLink to="/#about" @click="($event) => (menuState = false)"
                >About <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
              <NuxtLink to="/#courses" @click="($event) => (menuState = false)"
                >courses <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
              <NuxtLink to="/#contacts" @click="($event) => (menuState = false)"
                >contacts <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
              <NuxtLink
                to="/#newsletter"
                @click="($event) => (menuState = false)"
                >newsletter <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
              <NuxtLink
                to="/appointment"
                @click="($event) => (menuState = false)"
                >appointment<i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <hr />
            <h2>join mentorship</h2>
            <div class="service-wrapper">
              <NuxtLink to="/signup" @click="($event) => (menuState = false)"
                >signup <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
              <NuxtLink to="/signin" @click="($event) => (menuState = false)"
                >signin<i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <h2>Connect with us:</h2>
            <div class="media-wrapper">
              <a href="tel:+653821258" class="link" title="Give us a call"
                ><i class="fa-solid fa-phone"></i
              ></a>
              <a
                href="https://wa.link/s5b5y7"
                class="link"
                title="Chat us on whatsapp"
                ><i class="fa-brands fa-whatsapp"></i
              ></a>
              <a
                href="https://tr.ee/aviBLWXJ45"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                ><i class="fa-brands fa-facebook" title="Follow on facebook"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </main>
</template>

<script setup>
useHead({
  title: "Gospelfxtrader",
  viewport: "width:device-width, initial-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content:
        "I'm a mentor and CEO of jugosfx academy I mentor and follow up my mentees till there are profitable Benefits Offering a 1 on 1 mentorship to help slow learners pick up I trained from novis to pro traders helping traders with most of their trading challenges psychologically and technically",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/gospel.png",
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      rel: "stylesheet",
      integrity:
        "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ],
});

const menuState = useMenuState();
const loading = useLoaderState();
const createPost = useCreatePostState();

// const svg = `
//         <path class="path" d="
//           M 30 15
//           L 28 17
//           M 25.61 25.61
//           A 15 15, 0, 0, 1, 15 30
//           A 15 15, 0, 1, 1, 27.99 7.5
//           L 15 15
//         " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
//       `;
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb {
  background: rgb(37, 97, 89);
  border-radius: 30px;
}

#__nuxt {
  font-family: "Montserrat", "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(5, 43, 39);
  width: 100vw;
  height: fit-content;
  box-sizing: border-box;
}
body,
* {
  box-sizing: border-box;
  color: rgb(31, 32, 33);
  color: rgb(6, 68, 62);
}

.blur-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
  background: black;
}

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  overflow-y: scroll;
  background: rgb(234, 246, 236);
}

html {
  scroll-behavior: smooth;
}

main {
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;
  background: rgb(234, 246, 236);

  .sm-media {
    display: none;
  }

  .main-component {
    width: 100%;
    height: fit-content;

    .page-content {
      width: 100%;
      height: fit-content;
    }
  }

  .menu-component {
    display: none;

    @media screen and (max-width: 900px) {
      display: block;
    }
  }
}

.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .blur-wrapper {
    background: rgb(44, 44, 44);
    opacity: 0.7;
    cursor: pointer;
  }

  .menu-wrapper {
    width: 28vw;
    height: 100vh;
    background: rgb(37, 97, 89);
    position: relative;
    padding-left: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .close {
      width: 100px;
      height: 40px;
      position: absolute;
      top: 2%;
      right: 3%;
      border: none;
      background: transparent;
      font-size: 25px;
      color: rgb(237, 236, 236);

      i {
        color: white;
      }

      &:hover {
        transform: scale(1.2) rotateZ(-180deg);
        color: rgb(217, 144, 7);
      }
    }

    .menu-header {
      width: 95%;
      height: 35vh;
      padding-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
      border-bottom: 2px solid orange;

      .logo {
        width: 70px;
        height: 70px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 100%;

        img {
          width: 70px;
          height: 70px;
          object-fit: contain;
          cursor: pointer;
        }
      }

      p {
        font-size: 12px;
        text-align: center;
        color: rgb(252, 249, 242);

        @media screen and (max-width: 400px) {
          margin: 3px 0;
        }
      }

      .appointment {
        border: none;
        background: rgb(231, 174, 3);
        color: white;
        width: 80%;
        height: 45px;
        text-transform: uppercase;
        border-radius: 4px;
        overflow: hidden;
        position: relative;

        &:hover {
          transform: scale(0.9);
        }

        @media screen and (max-width: 1000px) {
          width: 90%;
        }
      }

      @media screen and (max-width: 1000px) {
        height: 36vh;
      }
    }

    .services {
      width: 100%;
      height: 65vh;
      padding: 10px 0 20px 0;
      overflow: hidden;
      overflow-y: scroll;
      background: rgb(37, 97, 89);

      h2 {
        padding: 10px 0;
        text-transform: uppercase;
        text-align: left;
        color: rgb(239, 153, 25);
        font-size: 20px;
        @media screen and (max-width: 1000px) {
          font-size: 17px;
          padding: 3px 0;
          padding-left: 10px;
        }
      }

      .service-wrapper {
        width: 100%;
        height: fit-content;

        a {
          display: block;
          width: 100%;
          height: fit-content;

          text-decoration: none;
          text-transform: capitalize;
          text-align: left;
          padding: 10px 15px;
          color: white;

          i {
            visibility: hidden;
            color: white;
          }

          &:hover {
            color: rgb(251, 184, 39);

            i {
              visibility: visible;
            }
          }
        }
      }

      .media-wrapper {
        width: 90%;
        height: fit-content;
        display: flex;
        margin: 5px auto;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;

        .link {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          background: rgb(220, 145, 5);
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          i {
            color: white;
            font-size: 25px;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        height: 64vh;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 40vw;

      @media screen and (max-width: 790px) {
        width: 50vw;

        @media screen and (max-width: 610px) {
          width: 100%;
        }
      }
    }
  }

  .menu-wrapper.is-active {
    animation: menu_active 0.5s 1 linear alternate forwards;
  }
  .menu-wrapper.inactive {
    animation: menu_inactive 0.5s linear alternate forwards;
  }
}
.menu-container.inactive {
  animation: menu_inactive 0.5s linear alternate forwards;

  .blur-wrapper {
    animation: disappear 0.4s linear alternate forwards;
  }
}

@keyframes menu_active {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes menu_inactive {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200%);
    display: none;
  }
}
</style>
