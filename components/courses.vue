<template>
  <div class="courses-content">
    <h1>course header</h1>

    <div class="courses">
      <div class="course" v-for="(course, index) in courses" :key="index">
        <div class="image">
          <img src="../assets/Achievement-pana.png" alt="" />
        </div>
        <span>{{ index }}</span>
        <div class="details">
          <h2>{{ course.title }}</h2>
          <button>start course</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    title: "intro to forex",
  },
  {
    title: "technical analysis",
  },
  {
    title: "market structure",
  },
  {
    title: "smart money concept",
  },
];
</script>

<style lang="scss" scoped>
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

    .course {
      width: 300px;
      height: 500px;
      border: 1px solid rgb(182, 203, 198);
      position: relative;
      margin: 5vh auto;

      .image {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      span {
        position: absolute;
        top: -5%;
        left: -5%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 3px solid rgb(163, 198, 189);
        background: transparent;

        color: rgb(37, 97, 89);
        font-weight: 600;
      }

      .details {
        width: 100%;
        padding: 10px;

        h2 {
          text-transform: uppercase;
          color: rgb(37, 97, 89);
          width: 90%;
          margin: 10px auto;
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

          @media screen and (max-width: 300px) {
            width: 90%;
          }
        }
      }

      &:hover {
        box-shadow: 0 3px 15px 2px rgba(171, 191, 184, 0.734);

        span {
          transform: scale(1.2);
          background: rgb(37, 97, 89);
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
  }
}
</style>