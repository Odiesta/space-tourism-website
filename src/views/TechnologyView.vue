<script setup lang="ts">
import TechnologyNav from "@/components/TechnologyNav.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import { useTechnologyStore } from "@/store/technology";
import { computed, onMounted, onUnmounted, ref } from "vue";
import TextNavItem from "@/components/TextNavItem.vue";

const isDesktop = ref(window.innerWidth >= 1024);

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 1024;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const currentImage = computed(() => {
  return isDesktop.value
    ? store.currentTechnology?.imagePortrait
    : store.currentTechnology?.imageLandscape;
});

const store = useTechnologyStore();
</script>

<template>
  <div
    class="flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('@/assets/technology/background-technology-mobile.jpg')] md:bg-[url('@/assets/technology/background-technology-tablet.jpg')]"
  >
    <NavigationMenu />

    <TextNavItem number="03" text="Space Launch 101" />

    <div class="flex flex-col lg:flex-row-reverse flex-1 items-center">
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:gap-32 mt-8 md:mt-12 md:w-full lg:w-[500px] xl:mx-auto"
      >
        <img
          :src="currentImage"
          :alt="store.currentTechnology?.name"
          class="animate-spin-slow w-full lg:w-[500px]"
        />
      </div>

      <div
        class="max-w-md md:max-w-lg lg:max-w-3xl mx-auto text-center lg:text-left px-8 py-6 lg:flex"
      >
        <TechnologyNav />

        <div class="lg:w-full lg:px-16">
          <p
            class="text-blue-cream mt-8 text-[16px] uppercase font-barlow-condensed tracking-[2.36px]"
          >
            The Terminology...
          </p>
          <h1
            class="text-white text-[24px] md:text-[40px] lg:text-[56px] font-bellefair uppercase mt-2 tracking-wide"
          >
            {{ store.currentTechnology?.name }}
          </h1>

          <p
            class="text-blue-cream font-barlow leading-relaxed mt-4 md:text-base"
          >
            {{ store.currentTechnology?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
