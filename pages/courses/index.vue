<template>
  <div class="courses-container">
    <div class="courses-header-wrapper">
      <h1>forex trading</h1>
      <h2>free courses</h2>
      <h3>
        hi <span>{{ username }}</span>
      </h3>
    </div>
    <p>
      Search through the list of free courses available here for you at no cost
    </p>

    <div class="search-div">
      <div class="search-wrapper">
        <input
          list="courses"
          type="search"
          name="search"
          id="search-course"
          placeholder="search course"
          v-model="courseId"
        /><button @click="getCourses(courseId)">find course</button>
      </div>
      <datalist id="courses">
        <!-- <option value="Introduction To Forex">course 1</option> -->
        <option value="Introduction to Trading">course 1</option>
        <option value="Technical Analysis">course 2</option>
        <option value="Market Structure">course 3</option>
        <option value="Smart Money Concept">course 4</option>
        <option value="Advanced Smart Money Concept">course 5</option>
        <option value="Psychology of Trading">course 6</option>
        <option value="Real-life Trading Examples">course 7</option>
      </datalist>
    </div>
    <h3>
      Disclaimer: Trading involves risks, and the information provided in these
      videos is for educational purposes only. Always conduct your research and
      consider consulting a financial advisor.
    </h3>
    <h1>{{}}</h1>
    <div class="courses-content">
      <div class="courses" v-if="courses.length">
        <div class="course" v-for="(course, index) in courses" :key="index">
          <div class="image">
            <img src="~/assets/course.png" alt="forex courses" />
            <span>{{ index + 1 }}</span>
          </div>

          <div class="details">
            <h2>{{ course.courseName }}</h2>
            <p>{{ course.description }}</p>
            <button @click="startCourse(course._id, course.courseName)">
              start course
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
const loading = useLoaderState();

const router = useRouter();
const username = ref("");
const courseId = ref("");
const courses = ref([]);

onBeforeMount(() => {
  loading.value = true;
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("accessToken")}`;
  axios.defaults.headers.common["accessId"] = `${localStorage.getItem(
    "accessId"
  )}`;
  axios("https://affiliatepro-api.onrender.com/api/token")
    .then((res) => {
      username.value = res.data.username;

      axios("https://affiliatepro-api.onrender.com/api/course/all")
        .then((res) => {
          courses.value = res.data;
          console.log(data);
        })
        .catch((err) => err);
      loading.value = false;
    })
    .catch((err) => {
      router.push("/signin");
      loading.value = false;
    });
});

const getCourses = (id) => {
  loading.value = true;
  axios
    .post("https://affiliatepro-api.onrender.com/api/course/some", {
      courseName: id,
    })
    .then((res) => {
      courses.value = res.data;
      localStorage.setItem("courseName", id);
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      return err;
    });
};

const startCourse = (id, courseName) => {
  localStorage.setItem("courseId", id);
  router.push(`/courses/${courseName}`);
};
</script>


<style lang="scss" scoped>
.courses-container {
  width: 100%;
  height: fit-content;
  padding-top: 18vh;
  padding-bottom: 4vh;

  .courses-header-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    margin: 10px auto;
    gap: 10px;

    h4,
    h2,
    h1 {
      margin: 5px;
      color: rgb(37, 97, 89);
    }
    h4 {
      position: relative;
      font-size: 25px;
    }

    h2 {
      font-size: 30px;
    }
    h1 {
      font-size: 50px;
      text-transform: uppercase;
      color: rgb(230, 89, 7);
      font-weight: 700;
      position: relative;
    }

    h3 {
      span {
        color: rgb(37, 97, 89);
      }
    }

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .search-div {
    width: 550px;
    height: 45px;
    margin: 20px auto;

    .search-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0;
      border: 1px solid rgb(37, 97, 89);
      overflow: hidden;
      border-radius: 2px;

      input {
        border: none;
        padding: 0 15px;
        height: 100%;
        width: 75%;
        outline: none;
      }
      button {
        border: none;
        width: 25%;
        height: 100%;
        background: rgb(37, 97, 89);
        color: white;

        &:hover {
          transform: none;
          font-size: 14px;
        }

        &:active {
          font-size: 16px;
        }
      }
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  h3 {
    width: 80%;
    margin: 20px auto;
    color: red;
  }

  .courses-content {
    width: 100%;
    height: fit-content;

    h1 {
      padding: 20px;
      text-transform: uppercase;
      text-align: center;
    }

    .courses {
      width: 90%;
      margin: 10px auto;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .course {
        width: 25%;
        height: fit-content;
        // border: 1px solid rgb(182, 203, 198);
        position: relative;
        margin: 4vh auto;

        .image {
          position: relative;
          width: 100%;
          height: fit-content;
          overflow: hidden;

          img {
            object-fit: cover;
            width: 100%;
            height: auto;
          }
          span {
            position: absolute;
            top: -1%;
            left: -1%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 0 0 30% 0;
            border: 3px solid rgb(163, 198, 189);
            background: transparent;

            color: rgb(37, 97, 89);
            font-weight: 600;
          }
        }

        .details {
          width: 100%;
          padding: 10px 20px;
          padding-bottom: 30px;

          h2 {
            text-transform: uppercase;
            color: rgb(37, 97, 89);
            width: 100%;
            // margin: 10px auto;
            text-align: left;
            font-size: 20px;
          }

          p {
            text-align: left;
          }

          button {
            border: 1px solid rgb(175, 207, 203);
            background: transparent;
            color: rgb(37, 97, 89);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 45px;
            border-radius: 3px;
            margin: auto;
            margin-left: 0;

            @media screen and (max-width: 300px) {
              width: 90%;
            }
          }
        }

        &:hover {
          /* box-shadow: 0 3px 15px 2px rgba(171, 191, 184, 0.734); */
          transform: scale(1.05);

          span {
            transform: scale(1.2);
            background: rgb(216, 162, 14);
            color: white;
            border: 4px solid orange;
          }

          .details {
            button {
              background: rgb(37, 97, 89);
              color: white;
              border-radius: 30px;
            }
          }
        }
        @media screen and (max-width: 660px) {
          width: 90%;
        }
      }

      @media screen and (max-width:600px){
        width:100%;
      }
    }
  }
}
</style>