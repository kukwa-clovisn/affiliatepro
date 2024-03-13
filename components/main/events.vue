<template>
  <div class="events-container" id="events">
    <div class="blur-wrapper"></div>
    <div class="wrapper">
      <div class="content">
        <h1>our events...</h1>
        <p>
          Enjoy our endless and outstanding tour across the nation and across
          different fields.
        </p>
        <nuxt-link to="/page2">about academy</nuxt-link>
      </div>
      <div class="flex-div">
        <div class="event">
          <div class="image"><img src="../../assets/gospel4.png" alt="" /></div>
          <p class="header">Hilton hotel</p>
          <span> yaounde </span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <nuxt-link to="/page2">check event</nuxt-link>
        </div>
        <div class="event">
          <div class="image"><img src="../../assets/gosp1.png" alt="" /></div>
          <p class="header">Best Western Hotel</p>
          <span> Douala </span>
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
          <p class="header">Charriote Hotel</p>
          <span> Buea </span>
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
          <p class="header">Charriote Hotel</p>
          <span> Bafoussam </span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <nuxt-link to="/page2">check event</nuxt-link>
        </div>
        <div class="event">
          <div class="image"><img src="../../assets/gospel4.png" alt="" /></div>
          <p class="header">Hilton Hotel</p>
          <span> Bamenda </span>
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
  background: url(../../assets/gospel3.png);
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

    .content {
      width: 90%;
      height: fit-content;
      margin: 10px auto;
      h1 {
        padding: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        color: white;
        font-size: 40px;
      }

      p {
        color: white;
        text-align: center;
      }
      a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid goldenrod;
        padding: 10px 20px;
        color: white;
        text-transform: uppercase;
        width: fit-content;
        margin: 10px auto;
      }
    }
    .flex-div {
      width: 90%;
      height: 450px;
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      gap: 20px;
      overflow: hidden;
      overflow-x: scroll;

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

      .event {
        width: 300px;
        height: 380px;
        padding-bottom: 20px;
        background: rgb(255, 255, 255);
        display: block;

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
          border: 1px solid rgb(24, 157, 124);
          margin: 0 auto;

          &:hover {
            background: linear-gradient(
              to right,
              rgb(253, 147, 1),
              rgb(255, 82, 22)
            );
            color: white;
            border: none;
          }
        }

        &:hover {
          box-shadow: 0 3px 18px 1px rgb(64, 64, 64);
          border: 1px solid white;
        }
      }

      @media screen and (max-width: 1000px) {
        .content {
          width: 100%;
        }
        .event {
          width: 300px;

          @media screen and (max-width: 400px) {
            width: 95vw;
          }
        }
      }
    }
  }
}
</style>