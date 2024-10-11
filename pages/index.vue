<template>
  <div class="home-container">
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <div class="landing-page-wrapper">
        <div class="page-content">
          <div class="logo-div">
            <img
              src="~/assets/jugosfx.png"
              alt="JUGOSFX"
              class="w-sm h-fit object-contain"
            />
          </div>
          <h1 class="text-teal-600 font-extrabold hover:text-teal-500">
            gospelfxtrader
          </h1>
          <hr />
          <div class="sm-image-content">
            <img src="~/assets/g.png" alt="" />
          </div>
          <p class="text-left text-sm py-5">
            I am YONG GOSPEL YUH, the CEO/cofounder of
            <span class="text-teal-600 font-bold"> JUGOSFX TRADING ACADEMY</span
            >, a forex mentor, civil engineer and a lot more.
          </p>
          <p class="text-left text-sm py-5">
            Welcome to my space. I offer trainings in forex trading both online
            and onsite. Check out my blog and join my mentorship program to
            learn more.
          </p>
          <div class="page-buttons">
            <div class="relative inline-flex group">
              <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-teal-300 via-teal-500 to-teal-900 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
              ></div>
              <nuxt-link
                to="/signin"
                title="Join My Personal Mentorship"
                class="relative inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition-all duration-200 bg-teal-700 font-pj rounded-xl focus:outline-none focus:ring-1 transition hover:bg-teal-400 focus:ring-offset-2 hover:duration-700 focus:ring-teal-200 uppercase animate-bounce"
                role="button"
              >
                <span class="relative flex hover:flex h-3 w-3 mr-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-white"
                  ></span>
                </span>
                join mentorship
              </nuxt-link>
            </div>
            <div class="relative inline-flex group">
              <nuxt-link
                to="/academy"
                title="Join My Forex Academy"
                class="relative inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition-all duration-700 bg-orange-500 border-0 border-teal-600 font-pj rounded-xl hover:bg-teal-400 hover:text-white hover:border-0 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-teal-200 uppercase animate-bounce"
                role="button"
                >academy
              </nuxt-link>
            </div>
            <div class="relative inline-flex group">
              <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-teal-300 via-teal-500 to-teal-900 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
              ></div>
              <nuxt-link
                to="/blog"
                title="Get Chart Updates Daily"
                class="relative inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition-all duration-700 bg-teal-600 font-pj rounded-xl focus:outline-none focus:ring-2 hover:bg-teal-400 focus:ring-offset-2 focus:ring-teal-200 uppercase animate-bounce"
                role="button"
              >
                <i class="fa-solid fa-book text-white mr-1"></i> visit blog
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="image-content">
          <div class="img">
            <img src="~/assets/g.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Charts />
    <MainStatistics />
    <MainCourseDesign />

    <MainCourses />

    <section class="text-gray-600 body-font book-section">
      <h1
        class="px-6 py-6 body-font text-teal-700 uppercase text-6xl font-extrabold"
      >
        the missing piece.
      </h1>
      <p class="text-center m-auto text-teal-700 uppercase">
        Story of my forex journey!
      </p>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div
          class="lg:w-1/3 lg:mr-0 w-1/2 m-auto h-fit mb-10 lg:mb-0 rounded-lg overflow-hidden"
        >
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src="../assets/book.jpg"
          />
        </div>
        <div
          class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
        >
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-indigo-500 mb-5"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-bold mb-3">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                class="mt-3 text-gray-700 inline-flex items-center bg-transparent border border-gray-400 rounded px-5 py-1 uppercase hover:bg-teal-200 hover:border-0 hover:border-transparent"
                href="https://selar.co/9994hu"
                >order
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-indigo-500 mb-5"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-bold mb-3">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                class="mt-3 text-gray-700 inline-flex items-center bg-transparent border border-gray-400 rounded px-5 py-1 uppercase hover:bg-teal-200 hover:border-0 hover:border-transparent"
                href="https://selar.co/9994hu"
                >order
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <testimonials />
    <div class="subscriber-container" id="newsletter">
      <div class="subscriber-wrapper">
        <h1 data-aos="fade-up">
          Want to get special offers, promos and course updates from us???
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
    <Partners />
    <MainContact />
    <ContactForm />
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
  width: 90%;
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
      background: rgb(19, 184, 167);
      box-shadow: -15px -50px 190px 1px rgb(19, 184, 167);
      width: 45%;
      height: 100%;
      position: absolute;
      left: 55%;
      top: 0;
      opacity: 1;
      border-radius: 250% 0 0 0;
    }

    .landing-page-wrapper {
      width: 85%;
      height: 100vh;
      margin: 0 auto;
      padding-top: 15vh;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: relative;

      .image-content {
        width: 40%;
        height: 80vh;
        display: flex;
        align-items: flex-end;
        .img {
          width: 90%;
          height: 400px;
          border-radius: 100%;
          background: rgb(234, 246, 236);

          display: flex;
          justify-content: center;
          position: relative;
          align-items: flex-end;

          img {
            height: 120%;
            width: auto;
            position: relative;
          }

          &::before {
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to right,
              rgb(231, 136, 34) 30%,
              rgb(19, 184, 167) 70%
            );
            position: absolute;
            left: 20%;
            bottom: 0%;
            border-radius: 100%;
            border: 1px dashed rgba(255, 255, 255, 0.5);
          }
        }
      }

      .page-content {
        width: 55%;
        height: fit-content;

        .logo-div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: fit-content;

          img {
            height: 10vh;
            width: auto;
            // object-fit: contain;
          }
        }
        hr {
          background: rgb(19, 184, 167);
          height: 1px;
        }

        h1 {
          font-size: 40px;
          line-height: 150px;
          text-align: left;
          text-transform: uppercase;
          font-weight: 400;
          padding: 0;
          margin: 0;
          // font-family: "Poppins";
          background: linear-gradient(to right, teal, rgb(255, 136, 0));
          background-clip: text;
          color: transparent;

          &::first-letter {
            font-size: 200px;

            font-family: serif;
            font-weight: 900;
          }

          @media screen and (max-width: 600px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            font-size: 30px;
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

        .page-buttons {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
          margin: 20px auto;
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

  .subscriber-container {
    width: 100%;
    height: fit-content;
    background: rgb(19, 184, 167);

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
        // box-shadow: 0 0 1px 1px rgb(127, 127, 127);
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
          background: rgb(19, 184, 167);
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

  .book-section {
    width: 90vw;
    margin: auto;
  }
}
</style>
