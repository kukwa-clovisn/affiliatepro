<template>
  <div class="page-container">
    <div class="wrapper">
      <div class="blur-wrapper"></div>
      <div class="page-content">
        <h1>learn the skill of <span>forex trading</span> today......</h1>
        <p>
          Get to learn and know what happens in the forex market and why the
          market moves the way it does and why it does so.
        </p>
        <div class="page-buttons">
          <button>
            <nuxt-link to="/signup"
              ><i class="fa-regular fa-circle-right"></i>join
              mentorship</nuxt-link
            ></button
          ><button @click="($event) => navigateTo('/signin')">
            <i class="fa-regular fa-circle-play"></i>free courses
          </button>
        </div>
      </div>
    </div>
    <div class="statistics">
      <h1>
        welcome to my<br />
        <span>forex trading academy</span>
      </h1>
      <p>
        Here, you are going to be learn all there is to know about forex trading
        from the very basics to being a well rooted forex trader. stay tuned and
        try not to skip a course.
      </p>
    </div>
    <div class="why-us">
      <h1>why us</h1>

      <div class="why-us-wrapper">
        <div>
          <span>1000+</span>
          <p>trained forex traders</p>
        </div>
        <div>
          <span>510+</span>
          <p>Well detailed video courses</p>
        </div>
        <div>
          <span>6+</span>
          <p>years of experience as a profitable trader and engineer</p>
        </div>
      </div>
    </div>

    <div class="comings"><h3>courses coming soon. Stay tune....</h3></div>
    <!-- <div class="course-expo">
      <div class="course-expo-wrapper">
        <div class="left-content">
          <div class="image">
            <img src="../assets/learn-b.jpg" alt="" />
          </div>
        </div>
        <div class="right-content">
          <div class="header-background">
            <h2>What does it take to learn forex?</h2>
          </div>
          <p>
            Forex just like any other trade or skill, needs some prerequisites
            or forehand knowledge before jumping into the field. Knowing what it
            takes and what you'll need to learn this skill successfully is very
            important.
          </p>
          <ul>
            <li>discipline and focus</li>
            <li>discipline and focus</li>
            <li>discipline and focus</li>
            <li>discipline and focus</li>
            <li>discipline and focus</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="course-expo">
      <div class="course-expo-wrapper">
        <div class="left-content-2">
          <div class="header-background">
            <h2>What you should know before trading forex?</h2>
          </div>
          <p>
            Forex just like any other trade or skill, needs some prerequisites
            or forehand knowledge before jumping into the field. Knowing some
            basic building blocks of forex will help you not to carry the wrong
            mindset into the forex market.
          </p>
          <h3>forex is not:</h3>
          <ul>
            <li>a get rich quick scheme</li>
            <li>a get rich quick scheme</li>
            <li>a get rich quick scheme</li>
          </ul>
        </div>
        <div class="right-content-2">
          <div class="image">
            <img src="../assets/group.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: fit-content;
  // background: linear-gradient(
  //   to bottom right,
  //   rgb(42, 81, 76),
  //   rgb(64, 116, 109)
  // );

  .wrapper {
    width: 100%;
    height: 100vh;
    padding-top: 18vh;
    margin: 0 auto;
    background: url(../assets/landing_background_3.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
    .blur-wrapper {
      background: rgb(42, 81, 76);
      opacity: 0.7;
    }
    .page-content {
      width: 70%;
      height: fit-content;
      padding: 20px 10px;
      margin: 20px auto;
      position: relative;
      h1 {
        text-transform: uppercase;
        text-align: center;
        line-height: 1.7em;
        color: white;
        font-size: 50px;
        span {
          color: rgb(253, 147, 1);
        }

        &::before {
          content: "be a profitable trader today...";
          display: block;
          color: rgb(253, 147, 1);
          font-size: 13px;
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 0.9;
        }

        @media screen and (max-width: 768px) {
          font-size: 34px;
        }
      }
      p {
        text-align: center;
        line-height: 1.3em;
        color: rgb(225, 224, 224);
      }

      .page-buttons {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;

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
            background: transparent;
            border: 1px solid white;
          }
        }
      }
    }
  }

  .statistics {
    width: 100%;
    height: fit-content;
    // background: white;

    padding: 50px 10px;
    margin: 0;

    h1 {
      text-transform: uppercase;
      text-align: center;
      width: 80%;
      margin: 20px auto;
      font-size: 40px;
      color: rgb(42, 81, 76);
      line-height: 60px;

      span {
        color: rgb(253, 147, 1);
      }
    }

    .logo {
      margin: 20px auto;
      width: fit-content;
      height: fit-content;

      img {
        width: 150px;
        height: auto;
        object-fit: contain;
      }
    }
    p {
      width: 80%;
      margin: 10px auto;
      text-align: center;
      line-break: 1.4em;
    }
  }

  .why-us {
    width: 100%;
    height: fit-content;
    background: inherit;
    position: relative;
    margin: 0;

    h1 {
      padding: 20px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 25px;
      position: relative;
      width: fit-content;
      margin: auto;
      color: rgb(37, 97, 89);

      &::before,
      &::after {
        content: "";
        width: 45%;
        height: 2px;
        position: absolute;
        bottom: 0;

        background: rgb(253, 147, 1);
      }
      &::before {
        left: 0;
      }

      &:after {
        right: 0;
        background: rgb(37, 97, 89);
      }
    }

    .why-us-wrapper {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;

      div {
        width: 30%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        span {
          color: rgb(253, 147, 1);
          font-weight: 800;
          font-size: 28px;
        }
        p {
          text-align: center;
        }
      }
    }
  }
  .course-expo {
    width: 100%;
    height: fit-content;
    padding: 0;
    margin: 0 auto;

    .course-expo-wrapper {
      width: 100%;
      height: 420px;
      padding: 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      .left-content,
      .right-content-2 {
        width: 50%;
        height: 100%;
        padding: 0;

        .image {
          width: 100%;
          height: 100%;
          margin: 0;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            margin: 0;
          }
        }
      }
      .right-content,
      .left-content-2 {
        width: 50%;
        height: 100%;
        padding: 0;
        .header-background {
          background: rgb(4, 71, 48);
          width: 100%;
          height: 90px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          box-shadow: 0 3px 16px 2px rgba(4, 49, 33, 0.616);

          h2 {
            color: white;
            text-transform: uppercase;
            padding: 10px;
            text-align: left;
            padding-left: 50px;
          }
        }
        p {
          text-align: left;
          padding: 10px;
          width: 90%;
          margin: 10px auto;
        }

        h3 {
          width: 90%;
          margin: 10px auto;
          text-align: left;
          text-transform: uppercase;
          font-weight: 700;
          padding-left: 30px;
          font-size: 27px;
          color: rgb(255, 82, 22);
        }
        ul {
          width: 90%;
          margin: 5px auto;
          list-style-type: square;

          li {
            margin-bottom: 10px;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>