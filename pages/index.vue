<template>
  <div class="home-container">
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <div class="landing-page-wrapper">
        <div class="image-content">
          <div class="img">
            <img src="~/assets/gospel.png" alt="" />
          </div>
        </div>
        <div class="page-content">
          <h1>Hi i'm <span>Gospel Yong. </span></h1>
          <div class="sm-image-content">
            <img src="~/assets/gospel.png" alt="" />
          </div>
          <div class="listings">
            <!-- <h2>i'm a</h2>   -->
            <div class="list-div">
              <ul>
                <li>forex trader.</li>
                <li>civil engineer.</li>
                <li>youtuber.</li>
              </ul>
            </div>
          </div>
          <p>Welcome to my space</p>
          <div class="page-buttons">
            <button>
              <nuxt-link to="/signup"
                ><i class="fa-regular fa-circle-right"></i>join
                mentorship</nuxt-link
              ></button
            ><button>
              <nuxt-link to="/signin"
                ><i class="fa-regular fa-circle-right"></i>free
                courses</nuxt-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>

    <MainStatistics />
    <MainCourseDesign />
    <div class="about-container" id="about-us">
      <div class="about-wrapper">
        <div class="image-content">
          <img src="~/assets/gospel.png" alt="" />
        </div>
        <div class="blur-wrapper"></div>
        <div class="about-us">
          <h1>about <span>me</span></h1>
          <p>
            I'm a professional forex trader with 6years of experience and also a
            funded trader with multiple prop firms.
          </p>
          <p>
            I'm a mentor and CEO of jugosfx academy I mentor and follow up my
            mentees till there are profitable Benefits Offering a 1 on 1
            mentorship to help slow learners pick up I trained from novis to pro
            traders helping traders with most of their trading challenges
            psychologically and technically
          </p>
          <nuxt-link to="/courses" data-aos="zoom-in"
            >check out my free courses</nuxt-link
          >
        </div>
      </div>
    </div>
    <MainCourses />

    <mainEvents />
    <div class="book">
      <div class="wrapper">
        <div class="book-description">
          <p>Have you heard of.....</p>
          <h1>the missing piece??</h1>
          <p>
            This is a book every forex trader and someone who aspires to be a
            forex trader should read. it is a must read. There is a lot of
            wisdom bundled with experiement at your disporsal for free. reach
            out today and grab your free copy before the offers ends.
          </p>
          <a href="https://selar.co/9994hu">grab a free copy now</a>
        </div>

        <div class="image"><img src="../assets/book.jpg" alt="" /></div>
      </div>
    </div>
    <!-- <mainTestimonials /> -->
    <div class="subscriber-container" id="newsletter">
      <div class="subscriber-wrapper">
        <h1 data-aos="fade-up">
          want to get special offers, promos and course updates from us???
        </h1>

        <div class="subscriber-rorm">
          <div class="input">
            <input
              type="email"
              placeholder="Your Email Address Here...."
              v-model="email"
            /><button @click="subscribeFunc(email)">subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <MainContact />
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "nuxt/app";
const router = useRouter();
const email = ref("");

const subscribeFunc = (email) => {
  axios
    .post("https://affiliatepro-api.onrender.com/api/subscribe", {
      email: email,
    })
    .then((res) => {
      ElMessageBox.alert(res.data.msg, {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: "Done",
        callback: () => {
          router.push("/");
        },
      });
    })
    .catch((err) => {
      if (err.response.data) {
        ElMessageBox.alert(err.response.data.msg, {
          // if you want to disable its autofocus
          // autofocus: false,
          confirmButtonText: "Close",
          callback: () => {
            router.push("/");
          },
        });
      } else {
        ElMessageBox.alert(err.message, {
          // if you want to disable its autofocus
          // autofocus: false,
          confirmButtonText: "Close",
          callback: () => {
            router.push("/");
          },
        });
      }
    });
};
</script>



<style lang="scss">
hr {
  display: block;
  width: 40%;
  height: 3px;
  background: rgb(230, 89, 7);
  border-radius: 30px;
}
.home-container {
  width: 100vw;
  height: fit-content;
  margin: 0;
  padding: 0;
  background: rgb(234, 246, 236);

  .landing-page {
    width: 100%;
    height: fit-content;
    background: rgb(234, 246, 236);
    position: relative;

    .blur-wrapper {
      display: none;
    }

    .landing-page-wrapper {
      width: 80%;
      height: 89vh;
      margin: 0 auto;
      padding-top: 18vh;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .image-content {
        width: 50%;
        height: fit-content;

        .img {
          width: 75%;
          height: 400px;
          border-radius: 35% 0 35% 0;
          background: rgb(37, 97, 89);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 100%;
            width: auto;
          }
        }
      }

      .page-content {
        width: 50%;
        height: fit-content;

        h1 {
          font-size: 40px;
          line-height: 50px;
          color: rgb(37, 97, 89);
          text-align: left;
          font-weight: 600;

          span {
            color: rgb(255, 82, 22);

            text-transform: uppercase;
          }

          @media screen and (max-width: 600px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            font-size: 30px;

            span {
              display: block;
              font-size: 30px;
            }
          }
        }

        .sm-image-content {
          width: 200px;
          height: 200px;
          border-radius: 100%;
          border: 4px solid rgb(150, 195, 176);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px auto;
          display: none;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .listings {
          position: relative;
          width: 80%;
          height: 105px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          .list-div {
            position: relative;
            height: 100px;
            width: 98%;
            overflow: hidden;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 14px;

            ul {
              width: 100%;
              list-style-type: none;
              background: rgb(234, 246, 236);
              z-index: 1;
              animation: skip 9s steps(3) infinite;
              position: absolute;
              top: 0;
              left: 0;
              margin: auto;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex-direction: column;
              padding: 0;

              li {
                text-transform: uppercase;
                font-size: 23px;
                height: 100px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                margin: 0;
                color: rgb(37, 97, 89);
                font-weight: 800;
                white-space: nowrap;
                text-overflow: ellipsis;
                animation: explode 1.5s linear infinite alternate forwards;

                @media screen and (max-width: 400px) {
                  font-size: 18px;
                }
              }

              @keyframes explode {
                from {
                  opacity: 1;
                  transform: scale(0);
                }
                to {
                  opacity: 1;
                  transform: scale(2);
                }
              }
            }

            @media screen and (max-width: 250px) {
              width: 100%;
            }
          }
          &::before {
            content: "";
            width: 200%;
            height: 90%;
            position: absolute;
            top: 20%;
            left: -50%;
            background: linear-gradient(rgb(14, 109, 74), rgb(14, 145, 112));
            animation: rotate 2.5s linear infinite;
          }
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(
              to right,
              rgb(253, 147, 1),
              rgb(255, 82, 22)
            );
            animation: reverserotate 2s linear infinite;
          }

          @media screen and (max-width: 400px) {
            gap: 10px;
            justify-content: space-evenly;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        @keyframes reverserotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes skip {
          from {
            top: 0;
          }
          to {
            top: -300px;
          }
        }
        p {
          text-align: left;
          color: rgb(37, 97, 89);
        }

        .page-buttons {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;

          button {
            width: 150px;
            height: 47px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(
              to right,
              rgb(253, 147, 1),
              rgb(255, 82, 22)
            );
            color: white;
            text-transform: capitalize;
            font-weight: 600;

            i {
              padding-right: 6px;
              color: white;
            }

            a {
              text-decoration: none;
              color: white;
              text-transform: capitalize;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            &:last-child {
              background: rgb(37, 97, 89);
            }
          }
        }

        @media screen and (max-width: 1000px) {
          width: 90%;

          @media screen and (max-width: 800px) {
            justify-content: center;
            height: fit-content;
            .image-content {
              display: none;
            }

            .page-content {
              width: 90%;

              h1,
              p {
                text-align: center;
                padding: 12px;
                line-height: 1.4em;
              }

              .page-buttons {
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
              }
            }
            @media screen and (max-width: 600px) {
              .page-content {
                h1 {
                  font-size: 40px;
                }
                p {
                  font-size: 20px;
                }

                @media screen and (max-width: 450px) {
                  h1 {
                    font-size: 35px;
                  }

                  .page-buttons {
                    button {
                      width: 80%;
                    }
                  }
                }
              }
            }
          }
        }
      }

      @media screen and (max-width: 1100px) {
        justify-content: center;
        width: 90%;
        .image-content {
          display: none;
        }

        .page-content {
          width: 100%;

          .sm-image-content {
            display: flex;
          }

          h1,
          p {
            text-align: center;
            color: white;
            line-height: normal;
          }

          h1 {
            font-size: 60px;
            justify-content: space-evenly;
            height: fit-content;

            span {
              color: rgb(253, 147, 1);
            }

            @media screen and (max-width: 900px) {
              font-size: 45px;
            }
          }

          p {
            font-size: 26px;
          }

          .listings,
          .page-buttons {
            justify-content: center;
          }

          .listings {
            margin: 10px auto;
            width: 90%;
            background: rgb(37, 97, 89);

            .list-div {
              ul {
                background: rgb(37, 97, 89);
                li {
                  color: rgb(241, 149, 28);
                  font-size: 18px;
                }
              }
            }

            &::before {
              background: rgb(215, 250, 236);
            }
          }

          .page-buttons {
            button {
              &:last-child {
                border: 1px solid white;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 1100px) {
      background: url(./assets/gospel.png);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: contain;
      background-position: center center;
      background: rgb(37, 97, 89);

      .blur-wrapper {
        display: none;
      }
      .landing-page-wrapper {
        height: fit-content;
        padding-bottom: 4vh;
      }
    }
  }

  .about-container {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: flex-end;
    padding: 30px 0;

    .about-wrapper {
      width: 80%;
      height: 400px;
      background: rgb(37, 97, 89);
      background: linear-gradient(
        to bottom,
        rgb(37, 97, 89),
        rgb(50, 168, 152)
      );
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      border-radius: 15px;
      position: relative;
      box-shadow: -3px -3px 8px 1px rgba(1, 49, 34, 0.53);

      .image-content {
        width: 35%;
        height: 100%;
        position: relative;
        overflow: hidden;

        img {
          width: auto;
          height: 440px;
          cursor: pointer;

          object-fit: contain;
        }
      }

      .blur-wrapper {
        display: none;
        opacity: 0.4;

        @media screen and (max-width: 768px) {
          display: block;
        }
      }

      .about-us {
        width: 65%;
        height: fit-content;
        padding: 10px;
        padding-right: 20px;
        position: relative;
        h1 {
          text-align: left;
          text-transform: uppercase;
          width: max-content;
          color: white;

          span {
            color: rgb(231, 136, 34);
          }

          &::before {
            content: "";
            display: block;
            width: 65%;
            height: 3px;
            background: rgb(228, 138, 12);
            margin-bottom: 5px;
          }
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: rgb(217, 94, 7);
            margin-top: 5px;
          }
        }

        p {
          text-align: left;
          color: rgb(232, 232, 232);
          font-size: 16px;
          line-height: 24px;
        }
        a {
          width: fit-content;
          padding: 2px 20px;
          height: 47px;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          text-decoration: none;
          background: linear-gradient(
            to right,
            rgb(253, 147, 1),
            rgb(255, 82, 22)
          );
          color: white;
          text-transform: capitalize;
          font-weight: 600;
          margin: 0px;
        }
      }
      @media screen and (max-width: 1000px) {
        width: 90%;

        @media screen and (max-width: 900px) {
          width: 100%;
          border-radius: 0;
          height: fit-content;

          .image-content {
            width: 30%;
          }

          .about-us {
            position: relative;
            width: 70%;
          }

          @media screen and (max-width: 768px) {
            padding: 20px 0;
            .image-content {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
              img {
                height: 100%;
                width: auto;
                position: relative;
              }
            }
            .about-us {
              width: 100%;

              h1 {
                width: 100%;

                &::before,
                &::after {
                  display: none;
                }
              }
              h1,
              p {
                text-align: center;
              }
              button {
                margin: 20px auto;
                width: 200px;
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .subscriber-container {
    width: 100%;
    height: fit-content;
    background: rgb(37, 97, 89);

    .subscriber-wrapper {
      width: 100%;
      height: fit-content;
      padding: 25px 0;

      h1 {
        padding: 20px;
        text-align: center;
        text-transform: capitalize;
        font-size: 22px;
        width: 80%;
        margin: 20px auto;
        line-height: 70px;
        color: rgb(255, 255, 255);
        font-weight: 500;
      }

      .input {
        width: 600px;
        height: 55px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto;
        background: rgb(255, 255, 255);
        border-radius: 30px;
        box-shadow: 0 0 1px 1px rgb(127, 127, 127);
        input {
          width: 70%;
          height: 100%;
          border: none;
          outline: none;
          padding: 3px 35px;
          background: inherit;
          font-size: 16px;
          color: black;
        }

        button {
          outline: none;
          border: none;
          width: 30%;
          height: 100%;
          background: rgb(37, 97, 89);
          color: white;
          font-weight: bold;
          text-transform: capitalize;
          font-size: 18px;
          border-radius: 30px;
        }

        @media screen and (max-width: 768px) {
          width: 80%;

          input {
            width: 65%;
          }
          button {
            width: 35%;
            font-size: 13px;
          }
        }
      }
    }
  }

  .book {
    width: 100%;
    height: fit-content;
    margin: 20px auto;

    .wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .book-description {
        width: 50%;
        height: fit-content;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          height: fit-content;
          padding: 10px 20px;
          color: white;
          text-decoration: none;
          text-transform: capitalize;
          font-size: 20px;
          background: linear-gradient(
            to right,
            rgb(253, 147, 1),
            rgb(255, 82, 22)
          );
          border-radius: 3px;
        }
        p {
          text-align: center;
          padding: 10px;
          width: 100%;

          font-size: 19px;
          text-align: left;
        }

        h1 {
          font-size: 50px;
          text-transform: uppercase;
          font-weight: 700;
          text-align: center;
          width: 100%;
          text-align: left;

          padding-left: 0;
          color: rgb(255, 82, 22);
          position: relative;
        }
      }

      .image {
        width: 35%;
        height: fit-content;

        img {
          height: 400px;
          width: auto;

          object-fit: cover;
          margin: 20px auto;
          margin-left: 0;
        }
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;

        .book-description,
        .image {
          width: 90%;
          @media screen and (max-width: 400px) {
            width: 100%;
          }
        }

        .book-description {
          h1,
          p,
          a {
            text-align: center;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>