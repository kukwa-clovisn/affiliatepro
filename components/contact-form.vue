<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const loader = useLoaderState();
const messageBody = reactive({
  name: "",
  email: "",
  tel: "",
  message: "",
  type:"Message"
});

function handleSubmit() {
  loader.value = true;

  axios
    .post("/appointment", messageBody)
    .then((res) => {
      loader.value = false;
      setTimeout(() => {
        ElMessageBox.alert(
          "Your message has been sent successfully.We'll get back to you as soon as possible your through your email or number. ",
          "Message Sent!",
          {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "Close",
            callback: () => {
              router.push("/");
              messageBody.name = "";
              messageBody.email = "";
              messageBody.tel = "";
              messageBody.date = "";
              messageBody.time = "";
              messageBody.message = "";
            },
          }
        );
      }, 1000);
    })
    .catch((err) => {
      loader.value = false;
      setTimeout(() => {
        ElMessageBox.alert(
          "Your message has not been sent. We apologize for the inconvinience please Try Again ",
          "Message Not Sent!",
          {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "Try Again",
            callback: () => {
              router.push("/#message");
            },
          }
        );
      }, 1000);

      return err;
    });
}
</script>
<template>
  <div class="form-container" id="message">
    <form @submit.prevent="handleSubmit" method="post" class="w-11/12 m-auto">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <img
              src="~/assets/landing_background_3.jpg"
              class="w-full h-full absolute top-0 left-0 object-cover"
            />

            <div
              class="bg-white relative flex flex-wrap py-6 rounded shadow-md"
            >
              <div class="lg:w-1/2 px-6">
                <h2
                  class="title-font font-semibold text-orange-500 tracking-widest text-xs"
                >
                  ADDRESS
                </h2>
                <p class="mt-1 font-light text-gray-900">
                  Bonaberi-Douala-Cameroon.
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2
                  class="title-font font-semibold text-orange-500 tracking-widest text-xs"
                >
                  EMAIL
                </h2>
                <a class="text-gray-900 leading-relaxed font-light"
                  >yonggospelyuh@gmail.com</a
                >
                <h2
                  class="title-font font-semibold text-orange-500 tracking-widest text-xs mt-4"
                >
                  PHONE
                </h2>
                <p class="leading-relaxed font-light">+237 6 53 82 12 58</p>
              </div>
            </div>
          </div>
          <div
            class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-4 py-6"
          >
            <h2 class="text-orange-500 text-lg mb-1 font-bold title-font">
              Get To Us!
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Leave us a message or contact us directly.
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Name:</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="messageBody.name"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Name:"
                required
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email:</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="messageBody.email"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Email:"
                required
              />
            </div>
            <div class="relative mb-4">
              <label for="tel" class="leading-7 text-sm text-gray-600"
                >Tel:</label
              >
              <input
                type="tel"
                id="tel"
                name="tel"
                v-model="messageBody.tel"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Phone Number:"
                required
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Message:</label
              >
              <textarea
                id="message"
                name="message"
                v-model="messageBody.message"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Enter Message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
            >
              submit
            </button>
            <!-- <a
              href="https://veilmail.io/e/FkKh7o"
              class="mt-2 font-medium text-blue-600 hover:underline"
              >Or click here to reveal our protected email address</a
            > -->
          </div>
        </div>
      </section>
    </form>
  </div>
</template>
