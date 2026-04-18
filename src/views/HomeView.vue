<script setup lang="js">
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('@/assets/home/background-home-mobile.jpg')] md:bg-[url('@/assets/home/background-home-tablet.jpg')]"
  >
    <NavigationMenu />

    <div class="m-6 text-center md:mt-30 md:max-w-md md:mx-auto">
      <h2
        class="text-blue-cream text-[16px] font-barlow-condensed uppercase tracking-[2.7px] md:text-xl"
      >
        So, you want to travel to
      </h2>

      <h1
        class="text-white text-[80px] font-bellefair uppercase md:text-[150px]"
      >
        Space
      </h1>

      <p
        class="text-blue-cream text-[15px]/[25px] font-barlow md:text-base/[25px] md:px-1"
      >
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>

    <div class="mt-20 md:mt-30 pb-12 flex items-center justify-center">
      <RouterLink
        :to="`/destination`"
        class="group relative z-10 flex h-[150px] w-[150px] md:h-62.5 md:w-62.5 items-center justify-center rounded-full bg-white transition-all duration-500 cursor-pointer"
      >
        <div
          class="absolute inset-0 -z-10 h-full w-full rounded-full bg-white/10 transition-all duration-500 ease-in-out group-hover:scale-[1.6]"
        ></div>

        <span
          class="font-bellefair text-[20px] md:text-[32px] uppercase tracking-[1.25px] text-casual-navy"
        >
          Explore
        </span>
      </RouterLink>
    </div>
  </div>
</template>
