<template>
  <div class="contact-container" id="contact">
    <div class="wrapper">
      <div class="image-content">
        <img src="~/assets/gospel.png" alt="" />
      </div>
      <p>want to link up with me? check out our social media links below...</p>
      <hr />

      <p>Get to me on whatsapp</p>
      <a href="https://wa.link/s5b5y7" class="whatsapp">start whatsapp chat</a>

      <div class="links">
        <a
          href="https://www.facebook.com/Gospelfxtrader/"
          target="_blank"
          class="link"
          ><div class="link-logo"><i class="fa-brands fa-facebook"></i></div>
          <div class="link-name">facebook</div>
        </a>

        <a
          href="https://twitter.com/Gospelfxtrader?t=zkcylbRMOMUSh2UaOjNd7Q&s=09"
          target="_blank"
          class="link"
        >
          <div class="link-logo"><i class="fa-brands fa-twitter"></i></div>
          <div class="link-name">twitter</div>
        </a>

        <a
          href="https://www.youtube.com/@GOSPELFXTRADER"
          target="_blank"
          class="link"
        >
          <div class="link-logo"><i class="fa-brands fa-youtube"></i></div>
          <div class="link-name">youtube</div></a
        >

        <a
          href="https://www.instagram.com/gospelfxtrader/?igsh=cHpkeDVhdHd4OWU5"
          target="_blank"
          class="link"
        >
          <div class="link-logo"><i class="fa-brands fa-instagram"></i></div>
          <div class="link-name">instagram</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  height: fit-content;

  .wrapper {
    width: 80%;
    margin: 20px auto;
    height: fit-content;
    padding: 20px 0;

    p {
      padding: 10px;
      text-align: center;
    }

    .image-content {
      width: 120px;
      height: 120px;
      border-radius: 100%;
      border: 4px solid orange;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .whatsapp {
      width: max-content;
      height: 47px;
      border: none;
      border-radius: 30px;
      padding: 0 25px;
      margin: 25px auto;
      background: linear-gradient(to right, rgb(253, 147, 1), rgb(255, 82, 22));
      color: white;
      text-transform: capitalize;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .links {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px auto;
      gap: 20px 40px;

      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-decoration: none;

        .link-logo {
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 35px;
            color: rgb(29, 124, 110);
          }
        }

        .link-name {
          font-size: 16px;
          font-weight: 600;
          text-transform: capitalize;
          color: rgb(21, 120, 120);
          cursor: pointer;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }
}
</style>