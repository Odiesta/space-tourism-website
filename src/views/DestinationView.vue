<script setup lang="ts">
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useDestinationStore } from "@/store/destination";
import DestinationNav from "@/components/DestinationNav.vue";
import { getImageUrl } from "@/utils/get-assets";
import TextNavItem from "@/components/TextNavItem.vue";

const store = useDestinationStore();
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')]"
  >
    <NavigationMenu />

    <TextNavItem number="01" text="Pick your destination" />

    <div class="flex flex-col lg:flex-row justify-center items-center">
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:gap-32 mt-8 lg:mt-16 lg:mx-auto"
      >
        <img
          :src="store.currentPlanet?.image"
          :alt="store.currentPlanet?.name"
          class="w-44 h-44 md:w-80 md:h-80 lg:h-111.25 lg:w-111.25 lg:ml-12 animate-spin-slow"
        />
      </div>

      <div
        class="max-w-md md:max-w-2xl lg:max-w-md md:mx-auto text-center lg:text-left px-8 py-6"
      >
        <DestinationNav />

        <h1
          class="text-white text-[56px] md:text-[80px] lg:text-[100px] font-bellefair uppercase mt-4"
        >
          {{ store.currentPlanet?.name }}
        </h1>

        <p
          class="text-blue-cream font-barlow leading-relaxed border-b border-[#383B4B] pb-8 md:px-4 lg:px-0"
        >
          {{ store.currentPlanet?.description }}
        </p>

        <div
          class="flex flex-col md:flex-row md:justify-evenly gap-8 py-8 uppercase lg:justify-start lg:gap-16"
        >
          <div>
            <span
              class="text-blue-cream text-sm font-barlow-condensed tracking-[2.36px]"
              >Avg. Distance</span
            >
            <p class="text-white text-3xl font-bellefair mt-2">
              {{ store.currentPlanet?.distance }}
            </p>
          </div>
          <div>
            <span
              class="text-blue-cream text-sm font-barlow-condensed tracking-[2.36px]"
              >Est. Travel Time</span
            >
            <p class="text-white text-3xl font-bellefair mt-2">
              {{ store.currentPlanet?.travel }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
