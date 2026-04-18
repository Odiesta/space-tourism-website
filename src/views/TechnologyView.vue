<script setup lang="ts">
import TechnologyNav from "@/components/TechnologyNav.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useTechnologyStore } from "@/store/technology";

const store = useTechnologyStore();
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('@/assets/technology/background-technology-mobile.jpg')] md:bg-[url('@/assets/technology/background-technology-tablet.jpg')]"
  >
    <NavigationMenu />
    <h2
      class="text-white font-barlow-condensed uppercase text-center md:text-left md:ml-8 md:mt-8 md:text-xl tracking-[2.7px]"
    >
      <span class="opacity-25 mr-4 font-bold">03</span> Space Launch 101
    </h2>

    <div
      class="flex flex-col lg:flex-row items-center justify-center lg:gap-32 mt-8 md:mt-12"
    >
      <img
        :src="store.currentTechnology?.image"
        :alt="store.currentTechnology?.name"
        class="animate-spin-slow"
      />
    </div>

    <div
      class="max-w-md md:max-w-lg mx-auto text-center lg:text-left px-8 py-6"
    >
      <TechnologyNav />

      <h3
        class="text-blue-cream mt-8 text-[16px] uppercase font-barlow-condensed tracking-[2.36px]"
      >
        The Terminology...
      </h3>
      <h2
        class="text-white text-[24px] md:text-[40px] lg:text-[100px] font-bellefair uppercase mt-2 tracking-wide"
      >
        {{ store.currentTechnology?.name }}
      </h2>

      <p class="text-blue-cream font-barlow leading-relaxed mt-4 md:text-base">
        {{ store.currentTechnology?.description }}
      </p>
    </div>
  </div>
</template>
