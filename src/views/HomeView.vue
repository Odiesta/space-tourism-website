<script setup lang="js">
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('@/assets/home/background-home-mobile.jpg')]"
  >
    <NavigationMenu />

    <div class="m-6 text-center">
      <h2
        class="text-blue-cream text-[16px] font-barlow-condensed uppercase tracking-[2.7px]"
      >
        So, you want to travel to
      </h2>

      <h1 class="text-white text-[80px] font-bellefair uppercase">Space</h1>

      <p class="text-blue-cream text-[15px]/[25px] font-barlow">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>

    <div class="mt-20 pb-12 flex items-center justify-center">
      <button
        class="group relative z-10 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white transition-all duration-500"
      >
        <div
          class="absolute inset-0 -z-10 h-full w-full rounded-full bg-white/10 transition-all duration-500 ease-in-out group-hover:scale-[1.6]"
        ></div>

        <span
          class="font-bellefair text-[20px] uppercase tracking-[1.25px] text-[#0B0D17]"
        >
          Explore
        </span>
      </button>
    </div>
  </div>
</template>
