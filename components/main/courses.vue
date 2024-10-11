<template>
  <div class="courses-container" id="courses">
    <div class="courses-wrapper">
      <h2 data-aos="zoom-in">
        course <span>outline</span>.
        <p class="text-sm center">what you will learn!</p>
        <hr data-aos="fade-up" />
      </h2>

      <div class="course-list">
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content"></div>
          </div>

          <h3>introduction to trading</h3>

          <p>Understanding the basics of forex trading.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content">
              <!-- <span>2 videos </span> -->
            </div>
          </div>

          <h3>technical analysis</h3>

          <p>Understanding technical analysis and the candlestick theory.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content">
              <!-- <span>3 videos </span> -->
            </div>
          </div>

          <h3>market structure</h3>

          <p>
            Uunderstanding market structure, time and price, premium and
            discount arrays.
          </p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content">
              <!-- <span>2 videos </span> -->
            </div>
          </div>

          <h3>smart money concept</h3>

          <p>Understanding supply, demand and liquidity in the market.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content">
              <!-- <span>4 videos </span> -->
            </div>
          </div>

          <h3>advanced smart money concept</h3>

          <p>
            Understanding institutional order flow, order blocks and fair value
            gaps
          </p>
          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content">
              <!-- <span>1 videos </span> -->
            </div>
          </div>

          <h3>psychology of trading</h3>

          <p>mastering psychology and emotions in trading.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <div class="image-content">
              <!-- <span>7 videos </span> -->
            </div>
          </div>

          <h3>real-life trading techniques</h3>

          <p>
            live trading sessions, backtesting, pattern recognition, top down
            analyi etc....
          </p>

          <div class="follow">jugosfx academy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses-container {
  width: 100%;
  height: fit-content;

  .courses-wrapper {
    width: 100%;
    height: fit-content;
    margin: 20px auto;
    padding: 30px 0 0 20px;

    h2 {
      text-align: center;
      padding: 10px;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;
      font-size: 30px;

      span {
        color: rgb(230, 89, 7);
      }
    }

    hr {
      width: 7%;
      margin: 10px auto;
    }

    p {
      text-align: center;
      padding: 10px;
      font-family: Montserrat, sans-serif;
    }

    .course-list {
      width: 95%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      margin: 20px auto;

      .course {
        width: 330px;
        height: 200px;
        box-shadow: 0 3px 17px 2px rgb(228, 228, 228);
        background: white;
        overflow: hidden;
        padding: 20px;
        border-radius: 10px;

        h3 {
          text-transform: uppercase;
          padding: 20px;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 550;
          line-height: 1.4em;
          color: rgb(228, 79, 30);
        }
        p {
          padding: 10px;
          font-size: 12px;
        }

        .follow {
          padding-top: 5px;
          border-top: 1px solid rgb(164, 163, 163);
          width: 80%;
          margin: 0 auto;
          font-size: 12px;
          text-align: left;
        }

        @media screen and (max-width: 768px) {
          width: 430px;
          height: 500px;

          .course-img {
            height: 250px;
          }

          @media screen and (max-width: 500px) {
            width: 85%;

            @media screen and (max-width: 400px) {
              width: 95%;
              height: fit-content;
              padding: 0;
              padding-bottom: 15px;

              .buttons {
                button {
                  width: 80%;
                }
              }
            }
          }
        }
      }
      .buttons {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
        margin: 10px auto;

        button {
          width: 40%;
          height: 45px;
          border: none;
          border-radius: 5px;
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

          &:last-child {
            background: rgb(37, 97, 89);
          }
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }
}
</style>