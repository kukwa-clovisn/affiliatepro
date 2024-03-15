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
        <nuxt-link to="/academy">about academy</nuxt-link>
      </div>
      <el-carousel :interval="3000" type="card" height="450px">
        <el-carousel-item>
          <div class="image"><img src="../../assets/gospel4.png" alt="" /></div>
          <p class="header">Hilton hotel</p>
          <span> yaounde </span>
          <span>Febuary 24th 2024</span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <!-- <a href="/academy/#events">check event</a> -->
        </el-carousel-item>
        <el-carousel-item>
          <div class="image"><img src="../../assets/gosp1.png" alt="" /></div>
          <p class="header">Best Western Hotel</p>
          <span> Douala </span>
          <span>March 02nd 2024</span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <!-- <a href="/academy/#events">check event</a> -->
        </el-carousel-item>

        <el-carousel-item>
          <div class="image">
            <img src="../../assets/gosp12.png" alt="" />
          </div>
          <p class="header">Charriote Hotel</p>
          <span> Buea </span>
          <span>March 09th 2024 </span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <!-- <a href="/academy/#events">check event</a> -->
        </el-carousel-item>
        <el-carousel-item>
          <div class="image">
            <img src="../../assets/gosp12.png" alt="" />
          </div>
          <p class="header">Charriote Hotel</p>
          <span> Bafoussam </span>
          <span>March 16th 2024</span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <a href="/academy/#events">check event</a>
        </el-carousel-item>
        <el-carousel-item>
          <div class="image"><img src="../../assets/gospel4.png" alt="" /></div>
          <p class="header">Hilton Hotel</p>
          <span> Bamenda </span>
          <span>March 23rd 2024</span>
          <p>
            this event was a tour with exness cameroon to educate the masses
            about forex trading and the green pasture that lies therein the
            forex industry.
          </p>
          <a href="/academy/#events">check event</a>
        </el-carousel-item>
      </el-carousel>
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
    width: 90%;
    height: fit-content;
    position: relative;
    margin: 40px auto;

    .content {
      width: 90%;
      height: fit-content;
      margin: 20px auto;
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
    .el-carousel__item {
      width: 300px;
      height: 420px;
      margin: auto;
      padding-bottom: 20px;
      background: rgb(255, 255, 255);

      .image {
        width: 100%;
        height: 200px;
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
        line-height: 1.3em;
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
        text-decoration: none;

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

      @media screen and (max-width: 500px) {
        width: 80vw;
      }
    }

    .el-carousel__item.is-active .is-in-stage {
      background: white;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
}
</style>




  


