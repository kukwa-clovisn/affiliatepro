<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <h1>gospelfx<span>trader</span></h1>
        <p>
          I'm a mentor and CEO of jugosfx academy I mentor and follow up my
          mentees till there are profitable Benefits Offering a 1 on 1
          mentorship to help slow learners pick up I trained from novis to pro
          traders helping traders with most of their trading challenges
          psychologically and technically
        </p>
      </div>
      <div class="links">
        <h4>useful links</h4>
        <div class="wrapper">
          <div class="link"><nuxt-link to="/">home</nuxt-link></div>
          <div class="link"><a href="/#about">about us</a></div>
          <div class="link"><a href="/#courses">courses</a></div>
          <div class="link"><a href="/#contacts">contacts</a></div>
        </div>
      </div>
      <div class="links">
        <h4>categories</h4>
        <div class="wrapper">
          <div class="link"><nuxt-link to="/signup">signup</nuxt-link></div>
          <div class="link"><nuxt-link to="/signin">signin</nuxt-link></div>

          <div class="link">
            <nuxt-link to="/appointment">appointment</nuxt-link>
          </div>
          <div class="link"><a href="/#newsletter">newsletter</a></div>
        </div>
      </div>
      <!-- <div class="contacts">contacts</div> -->
    </div>
    <div class="copyright">
      Want to own your own website,
      <a href="https://wa.link/w04zuc" target="_blank">
        click here &copy;copyright codingherald2023</a
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100vw;
  height: fit-content;
  background: rgb(17, 27, 26);
  background: rgb(37, 97, 89);

  .wrapper {
    width: 95%;
    height: fit-content;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;

    .logo {
      width: 35%;

      h1 {
        color: white;
        text-transform: uppercase;
        text-align: left;
        font-size: 28px;
        span {
          color: orange;
        }

        @media screen and (max-width: 768px) {
          font-size: 22px;
        }
      }
      p {
        color: rgb(232, 231, 231);
        font-size: 14px;
        line-height: 26px;
        text-align: left;
      }
    }

    .links {
      width: 30%;
      height: fit-content;

      h4 {
        color: white;
        text-transform: uppercase;
      }

      .wrapper {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px 0;

        .link {
          width: 100%;
          a {
            text-decoration: none;
            color: rgb(227, 227, 227);
            text-transform: capitalize;
            padding: 5px 3px;

            display: block;
            padding-left: 0;
            width: 100%;

            &:hover {
              text-decoration: underline;
              color: orange;
            }
          }
        }

        @media screen and (max-width: 768px) {
          flex-direction: row;

          .link {
            width: fit-content;

            a {
              width: fit-content;
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      .logo,
      .links {
        width: 100%;
      }
    }
  }
  .copyright {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: rgb(213, 211, 211);
    font-weight: lighter;

    a {
      text-decoration: none;
      color: rgb(222, 252, 243);
    }
  }
}
</style>