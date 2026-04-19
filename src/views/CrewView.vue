<script setup lang="ts">
import CrewNav from "@/components/CrewNav.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useCrewStore } from "@/store/crew";

import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import { Keyboard, A11y } from "swiper/modules";

import "swiper/css";
import { ref, watch } from "vue";
import TextNavItem from "@/components/TextNavItem.vue";

const store = useCrewStore();

const modules = [Keyboard, A11y];

// Hold the Swiper instance to control it programmatically
const swiperInstance = ref<SwiperType | null>(null);

// Capture the Swiper instance when it initializes
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};

// 1. Swiper -> Store: Update Pinia state when user swipes
const onSlideChange = () => {
  if (swiperInstance.value) {
    store.setCrew(swiperInstance.value.activeIndex);
  }
};

// 2. Store -> Swiper: Slide Swiper when CrewNav dots are clicked
watch(
  () => store.activeIndex,
  (newIndex) => {
    if (swiperInstance.value && swiperInstance.value.activeIndex !== newIndex) {
      swiperInstance.value.slideTo(newIndex);
    }
  },
);
</script>

<template>
  <div
    class="min-h-screen flex flex-col w-full bg-cover bg-center bg-no-repeat bg-[url('/crew/background-crew-mobile.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')]"
  >
    <NavigationMenu />

    <TextNavItem number="02" text="Meet Your Crew" />

    <div
      class="md:flex md:flex-col-reverse lg:flex-row-reverse lg:px-4 flex-1 justify-between"
    >
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:gap-32 mt-8 md:mt-0 xl:mx-auto"
      >
        <div
          class="w-full max-w-[300px] md:max-w-none lg:max-w-[445px] mt-auto"
        >
          <swiper
            :modules="modules"
            :keyboard="{ enabled: true, onlyInViewport: true }"
            :a11y="{
              enabled: true,
              prevSlideMessage: 'Previous crew member',
              nextSlideMessage: 'Next crew member',
              slideLabelMessage: 'Crew member {{index}} of {{slidesLength}}',
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :initialSlide="store.activeIndex"
            class="h-64 md:h-125 lg:h-[600px] w-full"
          >
            <swiper-slide v-for="crew in store.crews" :key="crew.name">
              <img
                :src="crew.image"
                :alt="crew.name"
                class="h-64 md:h-125 lg:h-[600px] mx-auto object-contain object-bottom mt-auto"
              />
            </swiper-slide>
          </swiper>
        </div>
        <hr class="border-ship-grey border w-4/5 md:hidden" />
      </div>

      <div
        class="max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-center md:flex md:flex-col-reverse lg:justify-center lg:text-left px-8 lg:px-2 py-6 flex-1"
      >
        <CrewNav />

        <div class="md:mb-8">
          <p
            class="font-bellefair text-white/50 mt-8 text-[16px] md:text-2xl lg:text-[32px] uppercase"
          >
            {{ store.currentCrew?.title }}
          </p>
          <h1
            class="text-white text-[24px] md:text-[40px] lg:text-[56px] font-bellefair uppercase mt-2"
          >
            {{ store.currentCrew?.name }}
          </h1>

          <p
            class="text-blue-cream font-barlow leading-relaxed mt-4 md:text-base"
          >
            {{ store.currentCrew?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
