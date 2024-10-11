<template>
  <div :class="[{ squeezeHeader: stickyHeader }, 'header-component']">
    <div class="header-wrapper">
      <div class="header-logo">
        <div class="header-logo-wrapper" @click="navigateTo('/')">
          Gospelfx <span>trader</span>
        </div>
      </div>
      <div class="header-items">
        <div class="header-items-list">
          <nuxtLink to="/">Home</nuxtLink>
          <a href="/academy">academy</a>
          <a href="/#courses">Courses</a>
          <nuxtLink to="/#contact">Contacts</nuxtLink>
        </div>
      </div>
      <div class="header-contact">
        <button class="bg-teal-600 rounded-3xl hover:bg-teal-500">
          <nuxt-link to="/appointment">appointment</nuxt-link>
        </button>
      </div>
      <div class="menu-div">
        <button @click="($event) => (menuState = true)">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const menuState = useMenuState();
const stickyHeader = ref(false);
if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}

const toggleMenu = useMenuState();
</script>
<style lang="scss" scoped>
.header-component {
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  background: rgb(19, 184, 167);
  background: rgb(234, 246, 236);
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: 20px;
  .header-wrapper {
    width: 80%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 0 0 6px 1px rgb(205, 205, 205);
    z-index: 1;

    .header-logo {
      width: 23%;
      height: 100%;

      .header-logo-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        color: rgb(19, 184, 167);
        font-weight: 700;
        font-size: 25px;
        text-transform: capitalize;
        font-family: "Grand Hotel", cursive;
        img {
          display: block;
          height: 80%;
          width: auto;
        }

        span {
          color: rgb(255, 136, 0);
          font-family: "Grand Hotel", cursive;
        }

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: rgb(248, 132, 17);
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      @media screen and (max-width: 900px) {
        width: 40%;

        @media screen and (max-width: 768px) {
          width: 70%;
        }
      }
    }
    .header-items {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .header-items-list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        a {
          width: 20%;
          height: 100%;
          font-size: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: rgb(9, 115, 105);
          text-transform: uppercase;
          font-family: Montserrat, sans-serif;
          font-weight: bold;

          &:hover {
            color: rgb(208, 117, 12);
          }
        }
      }

      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    .header-contact {
      width: 17%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        outline: none;

        width: max-content;

        height: 40px;
        border: none;
        border-radius: 30px;
        overflow: hidden;

        a {
          padding: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: rgb(19, 184, 167);
          color: rgb(255, 255, 255);
          text-decoration: none;
          text-transform: uppercase;
        }
      }

      @media screen and (max-width: 900px) {
        width: 40%;

        button {
          width: 200px;
        }

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    .menu-div {
      width: 20%;
      height: 100%;
      display: none;

      button {
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: transparent;

        i {
          font-size: 30px;
          cursor: pointer;
        }
      }
      @media screen and (max-width: 900px) {
        display: block;
      }
    }

    @media screen and (max-width: 1200px) {
      width: 90%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      border-radius: 0;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
}
.header-component.squeezeHeader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: 0;
  .header-wrapper {
    height: 11vh;
    width: 100%;
    border-radius: 0;
  }
}
</style>
