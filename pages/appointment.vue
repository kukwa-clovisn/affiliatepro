<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <div class="signin-img">
        <img src="~/assets/achievement-pana.png" alt="" />
      </div>
      <div class="signin-img-right">
        <img src="~/assets/achievement-pana.png" alt="" />
      </div>
      <h1>Book an appointment with me</h1>
      <p>
        Get the opportunity to meet with one in person or get a one of one
        online session with me.
      </p>
      <div class="signin-form">
        <div class="form-wrapper">
          <div class="input">
            <label for="username">username:</label
            ><input
              id="username"
              type="text"
              v-model="appointmentBody.name"
              placeholder="Enter username..."
            />
          </div>
          <div class="input">
            <label for="email">Email address:</label
            ><input
              id="email"
              type="email"
              v-model="appointmentBody.email"
              placeholder="Enter Email address..."
            />
          </div>
          <div class="input">
            <label for="tel">tel address:</label
            ><input
              id="tel"
              type="tel"
              v-model="appointmentBody.tel"
              placeholder="Enter phone number(preferrably whatsapp)"
            />
          </div>
          <div class="input">
            <label for="message">Reason for appointment</label
            ><textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder=" Reason for appointment"
              v-model="appointmentBody.message"
            ></textarea>
          </div>

          <button
            @click="
              appointmentFunc(
                appointmentBody.name,
                appointmentBody.email,
                appointmentBody.tel,
                appointmentBody.message
              )
            "
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const loader = useLoaderState();
const appointmentBody = reactive({
  name: "",
  email: "",
  tel: "",
  message: "",
});

const appointmentFunc = (e) => {
  loader.value = true;

  axios
    .post("https://affiliatepro-api.onrender.com/api/appointment", appointmentBody)
    .then((res) => {
      loader.value = false;
      setTimeout(() => {
        ElMessageBox.alert(
          "Your appointment request has been submitted successfully.We'll communicate an appointment day/date to your through your email or number. ",
          "Appointment Submitted",
          {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "Homepage",
            callback: () => {
              router.push("/");
              appointmentBody.name = "";
              appointmentBody.email = "";
              appointmentBody.tel = "";
              appointmentBody.date = "";
              appointmentBody.time = "";
            },
          }
        );
      }, 1000);
    })
    .catch((err) => {
      loader.value = false;
      setTimeout(() => {
        ElMessageBox.alert(
          "Your appointment request has not been submitted . Try Again ",
          "Appointment Failed",
          {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "OK",
            callback: () => {
              router.push("/appointment");
            },
          }
        );
      }, 1000);

      return err;
    });
};
</script>

<style lang="scss" scoped>
.signin-container {
  width: 100%;
  height: fit-content;

  background: rgb(234, 246, 236);
  .signin-wrapper {
    width: 100%;
    height: fit-content;
    padding-top: 18vh;

    h1 {
      text-transform: capitalize;
      text-align: center;
      line-height: 1.5em;
      padding: 10px;
      font-weight: 800;
      position: relative;
      width: 500px;
      margin: 0 auto;
      color: rgb(37, 97, 89);

      @media screen and (max-width: 600px) {
        width: 80%;
        text-align: left;
        padding: 0;
      }
    }

    p {
      text-align: center;
      width: 500px;
      padding: 10px;
      margin: 0 auto;
      color: rgb(37, 97, 89);

      @media screen and (max-width: 600px) {
        width: 80%;
        text-align: left;
      }
    }

    .signin-img,
    .signin-img-right {
      width: fit-content;
      height: fit-content;
      position: absolute;
      bottom: 15%;
      left: 2%;

      .blur-wrapper {
        opacity: 0.3;
      }

      img {
        width: 300px;
        object-fit: contain;
      }

      @media screen and (max-width: 1050px) {
        bottom: 15%;

        img {
          width: 200px;
        }

        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
    }

    .signin-img-right {
      left: 75%;
    }

    .signin-form {
      width: 100%;
      height: fit-content;
      position: relative;
      margin-bottom: 30px;
      .form-wrapper {
        width: 500px;
        height: fit-content;
        margin: 0 auto;
        padding: 10px;

        .input {
          width: 100%;
          height: fit-content;
          margin: 30px auto;

          label {
            text-transform: capitalize;
            padding: 5px 0;
            display: block;
            text-align: left;
            font-weight: 500;
            color: rgb(37, 97, 89);
          }
          input,
          textarea {
            width: 100%;
            height: 45px;
            outline: none;
            padding: 0 17px;
            border: none;
            outline: none;
            box-shadow: 0 3px 16px 1px rgba(85, 92, 91, 0.497);
            border: 1px solid rgb(228, 232, 232);
            color: rgb(37, 97, 89);
          }
          textarea {
            height: fit-content;
            padding: 20px;
          }
        }
        button {
          width: 100%;
          height: 50px;
          border-radius: 3px;
          border: none;
          background: rgb(37, 97, 89);
          color: white;
        }

        .links {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px 10px;

          a {
            width: fit-content;
            text-align: left;
            text-transform: capitalize;
            text-decoration: none;
            color: black;
            font-size: 12px;
            padding: 10px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span,
            &:last-child {
              color: rgb(230, 139, 12);
            }
          }
        }

        @media screen and (max-width: 600px) {
          width: 80%;
        }
      }
    }
  }
}
</style>