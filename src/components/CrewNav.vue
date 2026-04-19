<script setup lang="ts">
import { useCrewStore } from "@/store/crew";

const store = useCrewStore();
</script>

<template>
  <ul
    class="flex justify-center lg:justify-start gap-4 md:gap-6 md:mt-6 lg:mt-24"
  >
    <li
      v-for="(crew, index) in store.crews"
      :key="crew.name"
      @click="store.setCrew(index)"
      class="cursor-pointer transition-all duration-300"
    >
      <div
        :class="[
          'h-2 w-2 md:h-3 md:w-3 rounded-full transition-all',
          store.activeIndex === index
            ? 'bg-white'
            : 'bg-white/20 hover:bg-white/50',
        ]"
      ></div>

      <span class="sr-only">Go to {{ crew.name }}</span>
    </li>
  </ul>
</template>
