<script setup lang="ts">
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useDestinationStore } from "@/store/destination";
import DestinationNav from "@/components/DestinationNav.vue";
import { getImageUrl } from "@/utils/get-assets";

const store = useDestinationStore();
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('@/assets/destination/background-destination-mobile.jpg')]"
  >
    <NavigationMenu />
    <h2
      class="text-white font-barlow-condensed uppercase text-center tracking-[2.7px]"
    >
      <span class="opacity-25 mr-4 font-bold">01</span> Pick your destination
    </h2>

    <div
      class="flex flex-col lg:flex-row items-center justify-center lg:gap-32 mt-8"
    >
      <img
        :src="store.currentPlanet?.image"
        :alt="store.currentPlanet?.name"
        class="w-44 h-44 lg:w-[445px] animate-spin-slow"
      />
    </div>

    <div class="max-w-md text-center lg:text-left px-8 py-6">
      <DestinationNav />

      <h1
        class="text-white text-[56px] lg:text-[100px] font-bellefair uppercase mt-4"
      >
        {{ store.currentPlanet?.name }}
      </h1>

      <p
        class="text-blue-cream font-barlow leading-relaxed border-b border-[#383B4B] pb-8"
      >
        {{ store.currentPlanet?.description }}
      </p>

      <div class="flex flex-col md:flex-row gap-8 py-8 uppercase">
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
</template>
