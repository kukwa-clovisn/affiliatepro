<template>
  <main>
    <div class="main-component">
      <NuxtLayout name="page-header" />
      <div class="page-content">
        <NuxtPage />
      </div>
      <NuxtLayout name="page-footer" />
    </div>
    <div class="menu-component" v-if="toggleMenu">
      <MenuComponent />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "AffiliatePro ",
  viewport: "width:device-width, initial-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "affiliate marketting courses",
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

const toggleMenu = useMenuState();

// console.log("page height", docHeight);
// const percentageScrolled = (window.scrollY / docHeight) * 100;
// console.log("percentageScrolled");
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb {
  background: rgb(15, 48, 109);
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
  color: rgb(5, 43, 39);
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
</style>
