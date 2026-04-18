<script setup lang="ts">
import CrewNav from "@/components/CrewNav.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useCrewStore } from "@/store/crew";

import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ref, watch } from "vue";

const store = useCrewStore();

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
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('@/assets/destination/background-destination-mobile.jpg')]"
  >
    <NavigationMenu />
    <h2
      class="text-white font-barlow-condensed uppercase text-center tracking-[2.7px]"
    >
      <span class="opacity-25 mr-4 font-bold">02</span> Meet Your Crew
    </h2>

    <div
      class="flex flex-col lg:flex-row items-center justify-center lg:gap-32 mt-8"
    >
      <div class="w-full max-w-[300px] lg:max-w-[445px]">
        <swiper
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :initialSlide="store.activeIndex"
          class="h-64 lg:h-auto w-full"
        >
          <swiper-slide v-for="crew in store.crews" :key="crew.name">
            <img
              :src="crew.image"
              :alt="crew.name"
              class="h-64 lg:w-[445px] mx-auto object-contain animate-spin-slow"
            />
          </swiper-slide>
        </swiper>
      </div>
      <hr class="border-ship-grey border w-4/5" />
    </div>

    <div class="max-w-md text-center lg:text-left px-8 py-6">
      <CrewNav />

      <h3 class="text-white/50 mt-8 text-[16px] uppercase">
        {{ store.currentCrew?.title }}
      </h3>
      <h2
        class="text-white text-[24px] lg:text-[100px] font-bellefair uppercase mt-2"
      >
        {{ store.currentCrew?.name }}
      </h2>

      <p class="text-blue-cream font-barlow leading-relaxed mt-4">
        {{ store.currentCrew?.description }}
      </p>
    </div>
  </div>
</template>
