<template>
  <div class="courses-design">
    <div class="wrapper">
      <h2 data-aos="zoom-in">
        How our courses are designed to help you learn....
        <hr data-aos="zoom-out" />
      </h2>

      <div class="designs">
        <div class="design" data-aos="fade-up">
          <div class="icon"><i class="fa-solid fa-laptop"></i></div>
          <h3>virtual learning</h3>
          <p>
            Distance is never a hinderance when it comes to learning. We make
            use of zoom, google meet and virtual platforms that can help you
            grow.
          </p>
        </div>
        <div class="design" data-aos="fade-up">
          <div class="icon"><i class="fa-solid fa-laptop"></i></div>
          <h3>interactive sessions</h3>
          <p>
            Learning is never fun without interaction. We offer one-on-one
            mentorship help sessions and see into helping our trainees get the
            best out of every course.
          </p>
        </div>
        <div class="design" data-aos="fade-up">
          <div class="icon"><i class="fa-solid fa-laptop"></i></div>
          <h3>practical exercises</h3>
          <p>
            what is learning withoug exercises? we bring and train you with real
            life scenarious and conditions which makes learning much more fun.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses-design {
  width: 100%;
  height: fit-content;

  .wrapper {
    width: 80%;
    height: fit-content;
    margin: 10px auto;
    padding-top: 40px;
    padding-bottom: 30px;

    h2 {
      text-align: center;
      text-transform: capitalize;
      padding: 25px 10px;
    }

    .designs {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;

      .design {
        width: 300px;
        height: 180px;
        border-radius: 15px;
        background: white;
        background: rgb(239, 248, 241);
        box-shadow: 0 0 5px 2px rgb(255, 255, 255);
        padding: 20px;

        .icon {
          width: 100%;
          display: flex;
          justify-content: flex-start;

          i {
            font-size: 24px;
          }
        }

        h3 {
          text-align: left;
          margin: 5px 0;
          text-transform: capitalize;
        }

        p {
          text-align: left;
          padding: 10px 0;
          font-size: 12px;
          margin: 0;
        }

        &:hover {
          background: white;
          cursor: pointer;
          box-shadow: 0 0 10px 1px rgb(234, 234, 234);
        }

        @media screen and (max-width: 700px) {
          width: 80%;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }
}
</style>