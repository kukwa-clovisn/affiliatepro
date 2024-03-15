<template>
  <div class="courses-content">
    <nuxt-link to="/courses" class="head-link">back to courses</nuxt-link>
    <h1>{{ data.courseName }}</h1>
    <p>{{ data.description }}</p>
    <div class="image"><img src="~/assets/404.png" alt="" /></div>
    <h3>
      Your courses will be available soon. the tech team is working on bringing
      to you the best experience in your learning. stay tune. Go back to
      <nuxt-link to="/courses">courses</nuxt-link>
    </h3>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

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
          console.log(res);
          data.value = res.data[0];
          // src.value = data.value.videos[0];
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
    text-transform: uppercase;
    font-size: 23px;
    width: fit-content;
    height: 40px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    padding: 10px;
    text-transform: uppercase;
  }

  img {
    height: 200px;
    width: auto;
    margin: 10px auto;
  }

  h3 {
    width: 80%;
    margin: 50px auto;
  }
}
</style>