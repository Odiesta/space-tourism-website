<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const navLinks = [
  { id: "00", name: "Home", href: "/" },
  { id: "01", name: "Destination", href: "/destination" },
  { id: "02", name: "Crew", href: "/crew" },
  { id: "03", name: "Technology", href: "/technology" },
];
</script>

<template>
  <nav
    class="flex items-center justify-between p-6 md:p-0 lg:pt-4 lg:pr-0 md:pl-8 md:h-24 bg-transparent"
  >
    <div class="text-white font-bold">
      <RouterLink :to="`/`">
        <img src="@/assets/shared/logo.svg" alt="Logo" class="lg:h-12" />
      </RouterLink>
    </div>

    <button
      @click="isOpen = true"
      class="md:hidden text-blue-cream focus:outline-none"
    >
      <img src="@/assets/shared/icon-hamburger.svg" alt="" />
    </button>

    <hr class="hidden lg:block text-white/25 h-px flex-1 ml-8 -mr-4 z-50" />

    <ul
      class="hidden md:flex items-center self-stretch px-10 gap-8 text-white uppercase tracking-widest md:bg-white/4 md:backdrop-blur-lg lg:w-2xl xl:w-3xl 2xl:w-4xl lg:justify-evenly"
    >
      <li
        v-for="link in navLinks"
        :key="link.id"
        class="font-barlow-condensed tracking-[2.36px] h-full"
      >
        <RouterLink
          :to="`${link.href}`"
          class="h-full flex items-center border-b-3 border-transparent hover:border-white/50 transition-colors"
          exact-active-class="!border-white"
        >
          <span class="font-bold mr-2 md:hidden lg:block">{{ link.id }}</span>
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>

    <div
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed top-0 right-0 h-full w-64 bg-white/4 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out md:hidden"
    >
      <div class="flex justify-end px-6 py-8">
        <button @click="isOpen = false" class="text-cyan-400">
          <img src="@/assets/shared/icon-close.svg" alt="" />
        </button>
      </div>

      <ul
        class="flex flex-col gap-8 mt-8 pl-8 text-white uppercase tracking-widest"
      >
        <li v-for="link in navLinks" :key="link.id">
          <a
            class="font-barlow-condensed text-[16px]"
            :href="link.href"
            @click="isOpen = false"
          >
            <span class="font-bold mr-3 tracking-[2.7px]">{{ link.id }}</span>
            <span class="font-normal tracking-[2.7px]">{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black/20 z-40 md:hidden"
    ></div>
  </nav>
</template>
