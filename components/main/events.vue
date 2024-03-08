<template>
  <div class="events-container" id="events">
    <div class="blur-wrapper"></div>
    <div class="wrapper">
      <div class="flex-div">
        <div class="content">
          <h1>our events...</h1>
          <p>
            Enjoy our endless and outstanding tour across the nation and across
            different fields.
          </p>
          <nuxt-link to="/page2">about academy</nuxt-link>
        </div>
        <div class="event">
          <div class="image"><img src="../../assets/gospel3.png" alt="" /></div>
          <p class="header">crystal palace hotel</p>
          <span> Bali Douala </span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <nuxt-link to="/page2">check event</nuxt-link>
        </div>
        <div class="event">
          <div class="image"><img src="../../assets/gospel4.png" alt="" /></div>
          <p class="header">crystal palace hotel</p>
          <span> Bali Douala </span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <nuxt-link to="/page2">check event</nuxt-link>
        </div>
        <div class="event">
          <div class="image">
            <img src="../../assets/gosp12.png" alt="" />
          </div>
          <p class="header">crystal palace hotel</p>
          <span> Bali Douala </span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <nuxt-link to="/page2">check event</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.events-container {
  width: 100%;
  height: fit-content;
  background: url(../../assets/group.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  position: relative;
  padding: 30px 0;
  .blur-wrapper {
    background: rgb(15, 80, 71);
    opacity: 0.8;
    width: 100%;
    height: 100%;
  }

  .wrapper {
    width: 100%;
    height: fit-content;
    position: relative;
    padding: 40px auto;

    h1 {
      padding: 20px;
      padding-left: 0;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      color: white;
      font-size: 30px;
      text-align: left;
    }

    .flex-div {
      width: 90%;
      margin: 20px auto;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;

      a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid goldenrod;
        padding: 10px;
        color: white;
        text-transform: uppercase;
      }

      .content {
        width: 23%;
        height: fit-content;

        p {
          color: white;
          text-align: left;
        }
      }

      .event {
        width: 20%;
        height: fit-content;
        padding-bottom: 20px;
        background: rgb(255, 255, 255);

        .image {
          width: 100%;
          height: 170px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          color: rgb(15, 80, 71);
          font-size: 12px;
          text-align: left;
          padding: 0 10px;
        }
        p.header {
          font-size: 15px;
          text-transform: uppercase;
        }
        span {
          display: block;
          font-size: 14px;
          text-align: left;

          color: goldenrod;
          padding: 0 10px;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(23, 169, 135);
          font-weight: 600;
          width: 80%;
          height: 40px;
          border: 2px solid rgb(24, 157, 124);
          margin: 0 auto;
        }
      }
    }
  }
}
</style>