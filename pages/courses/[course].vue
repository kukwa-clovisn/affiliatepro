<template>
  <div class="courses-content">
    <nuxt-link to="/courses" class="head-link">back</nuxt-link>
    <div class="wrapper">
      <div class="image">
        <img src="~/assets/course.png" alt="" />
      </div>
      <div class="details">
        <h3>Trading Education Series on JugosFX Academy</h3>
        <p>
          Welcome to the Jugosfx community! We're excited to have you onboard as
          you embark on your trading journey. To help us tailor our offerings
          and ensure you benefit fully from our upcoming giveaways and private
          classes, please take a minute to fill out this community member form:
          Community Member Form.
          <a
            href=" https://docs.google.com/forms/d/e/1FAIpQLSe30bg4Qv9QTOj8Cjbif_K5v7K3F-y7a7xOSgVmRJVkeg0d_g/viewform?usp=pp_url"
            >Fill Form</a
          >
        </p>
        <p>
          At Jugosfx, we're committed to providing a wide range of services
          designed to cater to traders of all levels. For beginners, we offer a
          comprehensive course to kickstart your trading adventure – and the
          best part? It's entirely free! Whether you're new to trading or
          looking to refine your skills, our course is tailored to empower you
          with the knowledge and confidence needed to succeed.
        </p>
        <p>
          In addition to our beginner's course, we also offer a mentorship
          program for those seeking personalized guidance. Our premium group
          grants exclusive access to experienced mentors who can help you
          navigate the markets and achieve your trading goals. Interested in
          joining our premium group? Simply reach out to one of our admins for
          more details.
        </p>
        <button><i class="fa-brands fa-youtube"></i> watch video</button>
        <p>
          Give us a thumbs up <i class="fa-solid fa-thumbs-up"></i> on Youtube
          and subscribe.
          <a href="https://www.youtube.com/@GOSPELFXTRADER" target="_blank"
            ><i class="fa-brands fa-youtube"></i>SUBSCRIBE</a
          >
        </p>
        <!-- <div class="image"><img src="~/assets/404.png" alt="" /></div> -->
      </div>
    </div>

    <div class="video-wrapper">
      <div class="vid-course" :class="{ active: isActive1 }">
        <div
          class="blur-wrapper"
          @click="
            isActive1 = true;
            isActive2 = false;
            isActive3 = false;
            isActive4 = false;
          "
        ></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=URVHbUi4AdN1lq_u&amp;list=PLr9NWmeLM9BAiwCXIKQfo0u3KG2kbenFd"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
          @click="
            isActive1 = true;
            isActive2 = false;
            isActive3 = false;
            isActive4 = false;
          "
        >
          <i class="fa-solid fa-play"></i> watch
        </button>
      </div>

      <div class="vid-course" :class="{ active: isActive2 }">
        <div
          class="blur-wrapper"
          @click="
            isActive1 = false;
            isActive2 = true;
            isActive3 = false;
            isActive4 = false;
          "
        ></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=VXiLf0fu7K9U1RRP&amp;list=PLr9NWmeLM9BALEHVKXQnIV6pb_zI2DnfP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
          @click="
            isActive1 = false;
            isActive2 = true;
            isActive3 = false;
            isActive4 = false;
          "
        >
          <i class="fa-solid fa-play"></i> watch
        </button>
      </div>

      <div class="vid-course" :class="{ active: isActive3 }">
        <div
          class="blur-wrapper"
          @click="
            isActive1 = false;
            isActive2 = false;
            isActive3 = true;
            isActive4 = false;
          "
        ></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=L3oDndkt37xQki9A&amp;list=PLr9NWmeLM9BASUrUfAPVTXtLA_5bjKTyB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
          @click="
            isActive1 = false;
            isActive2 = false;
            isActive3 = true;
            isActive4 = false;
          "
        >
          <i class="fa-solid fa-play"></i> watch
        </button>
      </div>

      <div class="vid-course" :class="{ active: isActive4 }">
        <div
          class="blur-wrapper"
          @click="
            isActive1 = false;
            isActive2 = false;
            isActive3 = false;
            isActive4 = true;
          "
        ></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=ElIG4DWcq60VryF3&amp;list=PLr9NWmeLM9BDw7XC2z3HlZCNNdQG_ShDT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
          @click="
            isActive1 = false;
            isActive2 = false;
            isActive3 = false;
            isActive4 = true;
          "
        >
          <i class="fa-solid fa-play"></i> watch
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
const isActive1 = ref(false);
const isActive2 = ref(false);
const isActive3 = ref(false);
const isActive4 = ref(false);

const router = useRouter();
const data = ref({});

onBeforeMount(() => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("accessToken")}`;

  axios.defaults.headers.common["accessId"] = `${localStorage.getItem(
    "accessId"
  )}`;

  axios("https://affiliatepro-api.onrender.com/api/token")
    .then((res) => {
      axios
        .post("https://affiliatepro-api.onrender.com/api/course/id", {
          courseId: localStorage.getItem("courseId"),
        })
        .then((res) => {
          data.value = res.data[0];
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      router.push("/signin");
    });
});
</script>

<style lang="scss" scoped>
.courses-content {
  width: 100%;
  height: fit-content;
  padding-top: 17vh;

  .head-link {
    text-decoration: none;
    margin: 20px auto;
    margin-left: 10%;
    text-transform: uppercase;
    font-size: 15px;
    padding: 3px 20px;
    width: fit-content;
    height: 40px;
    background: linear-gradient(to right, rgb(253, 147, 1), rgb(255, 82, 22));
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10px auto;
    gap: 20px;

    .image {
      width: 40%;
      height: fit-content;

      img {
        width: 100%;
        height: auto;
      }
    }

    .details {
      width: 60%;
      height: fit-content;

      h1 {
        padding: 10px;
        text-transform: uppercase;
        text-align: left;
        color: rgb(239, 103, 6);
      }

      h3 {
        margin: 10px auto;
        margin-left: 0;
        text-align: left;
        color: rgb(239, 103, 6);
      }

      p {
        text-align: left;

        a {
          color: rgb(220, 5, 5);
          font-weight: 600;
        }
      }

      button {
        width: 150px;
        height: 47px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: linear-gradient(
          to right,
          rgb(253, 147, 1),
          rgb(255, 82, 22)
        );
        color: white;
        text-transform: capitalize;
        font-weight: 600;
        margin-left: 0;

        i {
          padding-right: 6px;
          color: white;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;
      flex-direction: column;

      .image {
        width: 100%;

        img {
          width: 300px;

          @media screen and (max-width: 400px) {
            width: 100%;
          }
        }
      }
      .details {
        width: 100%;

        h1,
        h3,
        p {
          text-align: center;
        }

        button {
          margin: auto;
        }
      }

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }

  .video-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 50px 20px;
    margin: 20px auto;

    .vid-course {
      width: 350px;
      height: fit-content;
      overflow-x: hidden;
      position: relative;

      .blur-wrapper {
        display: none;
        cursor: pointer;
      }
      h1 {
        padding: 10px;
        text-transform: uppercase;

        color: rgb(239, 103, 6);
      }
      iframe {
        width: 100%;
        height: 45vh;
      }

      button {
        width: 150px;
        height: 47px;
        border: none;
        position: absolute;
        left: -100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: linear-gradient(
          to right,
          rgb(253, 147, 1),
          rgb(255, 82, 22)
        );
        color: white;
        text-transform: capitalize;
        font-weight: 600;
        margin-left: 0;

        i {
          padding-right: 6px;
          color: white;
        }
      }

      &:hover {
        .blur-wrapper {
          display: block;
        }

        button {
          animation: 0.3s slide-in linear forwards alternate;
          position: absolute;
        }
      }

      @media screen and (max-width: 900px) {
        width: 90vw;
        margin: 20px auto;
      }
    }

    .vid-course.active {
      width: 100vw;
      height: fit-content;

      iframe {
        height: 80vh;
      }

      button,
      .blur-wrapper {
        display: none;
      }
    }
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  @keyframes slide-in {
    from {
      left: -50%;
      top: 30%;
    }
    to {
      left: 20%;
      top: 30%;
    }
  }
}
</style>