<template>
  <div>
    <cursor-fx />
    <div class="sticky z-10 p-10 bg-trasparent w-full top-0">
      <p class="font-medium text-2xl">LudovicoComito</p>
    </div>
    <div class="relative" data-scroll-container>
      <div
        data-scroll-section
        class="max-w-7xl px-10 mx-auto py-32 flex flex-row space-x-5 items-end"
      >
        <p
          class="font-light text-8xl w-2/3 serif"
          data-scroll
          data-scroll-speed="3" data-cursor-hover color-hover="#FFFFFF"
        >
          👋 <br />
          Hi, i'm a developer and
          <span class="font-medium">photographer</span> based in
          <span class="font-medium">Rome</span>
        </p>
        <p class="w-1/3" data-scroll-speed="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
          neque ipsum, eu congue metus finibus in. Sed dolor risus, tempus
          fermentum libero eget, consequat venenatis nisi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
      <div data-scroll-section>
        <div
          v-for="(image, index) in images"
          class="page h-screen flex flex-col justify-center"
          :style="{
            backgroundImage: isUltimo(index, images.length)
              ? createBackgroundString(image.bg, image.bg)
              : createBackgroundString(image.bg, images[index + 1].bg),
          }"
          v-bind:key="index"
        >
          <div class="max-w-7xl mx-auto">
            <!-- <p
              data-aos-delay="300"
              class="font-light font-serif absolute left-0 bottom-0 textStroked"
              style="font-size: 300px"
            >
              {{ image.desc[0] }}
            </p> -->
            <div class="flex flex-row items-bottom items-start">
              <div
                data-scroll
                data-scroll-speed="3"
                :class="isPari(index) ? 'order-0' : 'order-2'"
                class="flex flex-col w-1/2 px-10"
              >
                <p class="font-bold text-lg">
                  {{ image.desc }}
                </p>
                <p data-cursor-hover >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pharetra neque ipsum, eu congue metus finibus in. Sed dolor
                  risus, tempus fermentum libero eget, consequat venenatis nisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div class="flex flex-row mt-10">
                  <div class="flex flex-col w-1/2">
                    <p class="font-bold">Località</p>
                    <p>Roma</p>
                  </div>
                  <div class="flex flex-col w-1/2">
                    <p class="font-bold">Data realizzazione</p>
                    <p>Settembre 2021</p>
                  </div>
                </div>
              </div>
              <div class="mr-10 ml-10" style="height: 35rem; width: 40rem; overflow: hidden;
    position: relative;">
                <nuxt-img
                  data-aos-delay="150"
                  data-aos-duration="500"
                  class="object-cover absolute image_preview"
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
      this.$gsap.to(".image_preview", {
        ease: "Power1.easeInOut",
        scrollTrigger: {
          trigger: ".image_preview",
          start: "top",
          end: "bottom",
          animation: this.$gsap.to(".image_preview", {
            transform: "scale(1.5)",
          }),
          scrub: 2,
        },
      });
    },
    createBackgroundString(color1) {
      return `linear-gradient(180deg, white, ` + color1 + `, white )`;
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
          ",0.2)";
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
          link: "https://images.unsplash.com/photo-1562863010-5074d3465bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          desc: "Eventi",
          bg: "",
        },
        {
          link: "https://images.unsplash.com/photo-1653665674648-7cc7fa657547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          desc: "Natura",
          bg: "",
        },
        {
          link: "https://images.unsplash.com/photo-1653569396310-56bf9b634ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
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
