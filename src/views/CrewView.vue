<script setup lang="ts">
import CrewNav from "@/components/CrewNav.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useCrewStore } from "@/store/crew";

const store = useCrewStore();
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
      <img
        :src="store.currentCrew?.image"
        :alt="store.currentCrew?.name"
        class="h-64 lg:w-[445px] animate-spin-slow"
      />
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
