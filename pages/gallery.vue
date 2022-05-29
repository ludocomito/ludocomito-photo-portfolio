<template>
  <div > <!--style="background:#9f8976"-->
    <cursor-fx />
    <div data-scroll-container class="relative text-white" style="background:#9f8976" >
    <div class="sticky top-0 z-10 flex flex-row justify-between w-full py-10 mx-auto mb-20 max-w-7xl" >
      <p class="text-2xl font-medium ">LudovicoComito</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="12" x2="20" y2="12"></line>
  <line x1="4" y1="6" x2="20" y2="6"></line>
  <line x1="4" y1="18" x2="20" y2="18"></line>
</svg>
    </div>
      <div
        data-scroll-section
        class="flex flex-row items-end px-10 py-32 mx-auto space-x-5 max-w-7xl " 
      >
      <img src="https://i.ibb.co/Tm76x6J/11.jpg" class="absolute top-0" style="width:600px" alt="">
        <p
          class="w-2/3 pt-32 font-light text-8xl serif-gambarino"
          data-scroll
          data-scroll-speed="3"
        >
          I'm a developer and
          <span class="font-medium">photographer</span> based in
          <span class="font-medium">Rome</span>
        </p>
        <p class="w-1/3 pt-3 text-sm border-t border-white" data-scroll-speed="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
          neque ipsum, eu congue metus finibus in. Sed dolor risus, tempus
          fermentum libero eget, consequat venenatis nisi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>

    </div>
    <div class="relative" data-scroll-container >
      <div data-scroll-section>
        <div
          v-for="(image, index) in images"
          class="flex flex-col justify-center h-screen page"
          :style="{
            backgroundImage: isUltimo(index, images.length)
              ? createBackgroundString(image.bg, image.bg)
              : createBackgroundString(image.bg, images[index + 1].bg),
          }"
          v-bind:key="index"
        >
          <div class="mx-auto max-w-7xl">
            <!-- <p
              data-aos-delay="300"
              class="absolute bottom-0 left-0 font-serif font-light textStroked"
              style="font-size: 300px"
            >
              {{ image.desc[0] }}
            </p> -->
            <div class="flex flex-row items-start items-bottom">
              <div
                data-scroll
                data-scroll-speed="3"
                :class="isPari(index) ? 'order-0' : 'order-2'"
                class="flex flex-col w-1/2 px-10"
              >
                <p class="text-lg font-bold">
                  {{ image.desc }}
                </p>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pharetra neque ipsum, eu congue metus finibus in. Sed dolor
                  risus, tempus fermentum libero eget, consequat venenatis nisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div class="flex flex-row mt-10 space-x-10">
                  <div class="flex flex-col w-1/2 pt-4 border-t border-gray-800">
                    <p class="font-bold">Località</p>
                    <p>Roma</p>
                  </div>
                  <div class="flex flex-col w-1/2 pt-4 border-t border-gray-800">
                    <p class="font-bold">Data realizzazione</p>
                    <p>Settembre 2021</p>
                  </div>
                </div>
                <button data-cursor-hover data-cursor-mix-blend-mode="difference" class="px-10 py-3 mt-10 text-black transition duration-300 border border-black hover:text-white hover:bg-black w-max">See more</button>
              </div>
              <div class="ml-10 mr-10" style="height: 40rem; width: 40rem; overflow: hidden;
    position: relative;">
                <nuxt-img
                  data-aos-delay="150"
                  data-aos-duration="500"
                  class="absolute object-cover transition duration-500 transform scale-100 image_preview hover:scale-110"
                  style="height: 100%; width: 100%; object-position: 50% 50%"
                  ref="img1"
                  v-bind:src="image.link"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <nuxt-img
      src="https://images.unsplash.com/photo-1653618817271-85802495e98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80"
      alt=""
    />
    <nuxt-img
      src="https://images.unsplash.com/photo-1653660541277-818f0478cd74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80"
      alt=""
    />
    <nuxt-img
      src="https://images.unsplash.com/photo-1608539733354-2b217b4d9da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80"
      alt=""
    />
  </div> -->
</template>
<style>
.parent-component ::v-deep .vue-cursor-fx {
  position: fixed;
}
::-moz-selection {
  /* Code for Firefox */
  background: rgb(152, 152, 146);
}

::selection {
  background: rgb(152, 152, 146);
}
.textStroked {
  color: black;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: "#cecece";
}
</style>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "fullpage-vue/src/fullpage.css";
import Vibrant from "node-vibrant";

import { CursorFx } from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import LocomotiveScroll from "locomotive-scroll";

export default {
  name: "IndexPage",
  async mounted() {
    this.animateOnScroll();
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    AOS.init({});
    return this.images.map(async (x) => (x.bg = await this.getPalette(x.link)));
  },
  components: {
    "cursor-fx": CursorFx,
  },
  computed: {},
  methods: {
    animateOnScroll() {
      // this.$gsap.to(".image_preview", {
      //   ease: "Power1.easeInOut",
      //   scrollTrigger: {
      //     trigger: ".image_preview",
      //     start: "top",
      //     end: "bottom",
      //     animation: this.$gsap.to(".image_preview", {
      //       transform: "scale(1.5)",
      //     }),
      //     scrub: 2,
      //   },
      // });
    },
    createBackgroundString(color1) {
      return `linear-gradient(180deg, #f7f4ef, ` + color1 + `, #f7f4ef)`;
    },
    isUltimo(index, length) {
      if (index >= length - 1) {
        return true;
      } else {
        return false;
      }
    },
    isPari(index) {
      console.log(index % 2);
      if (index % 2 == 0) {
        return true;
      } else {
        return false;
      }
    },
    async getPalette(image) {
      const colors = await Vibrant.from(image).getPalette();

      return new Promise((resolve, reject) => {
        var rgb = colors.LightVibrant.rgb;
        var rgbToText =
          "rgba(" +
          Math.floor(rgb[0]) +
          "," +
          Math.floor(rgb[1]) +
          "," +
          Math.floor(rgb[2]) +
          ",0.3)";
        resolve(rgbToText);
      });
    },
    blurred(image) {
      var bg = this.getPalette(image);
      return bg;
    },
  },
  data() {
    return {
      pisello: {
        background:
          "linear-gradient(180deg, rgba(255,227,193,1) 0%, rgba(255,255,255,1) 100%);",
      },
      images: [
        {
          link: "https://i.ibb.co/GRJqPS5/P4180045.jpg",
          desc: "Eventi",
          bg: "",
        },
        {
          link: "https://i.ibb.co/mFzqrdT/P4180131.jpg",
          desc: "Natura",
          bg: "",
        },
        {
          link: "https://i.ibb.co/9vVVR9s/P4180074.jpg",
          desc: "Architettura",
          bg: "",
        },
      ],
      opts: {
        start: 0,
        dir: "v",
        duration: 200,
        loop: true,
        beforeChange: function (currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function (currentSlideEl, currenIndex) {},
      },
    };
  },
};
</script>
