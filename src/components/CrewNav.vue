<script setup lang="ts">
import { useCrewStore } from "@/store/crew";

const store = useCrewStore();
</script>

<template>
  <ul
    class="flex justify-center lg:justify-start gap-4 md:gap-6 md:mt-6 lg:mt-24"
  >
    <li v-for="(crew, index) in store.crews" :key="crew.name">
      <button
        @click="store.setCrew(index)"
        :aria-current="store.activeIndex === index ? 'true' : undefined"
        class="group p-3 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-casual-navy transition-all duration-300"
      >
        <div
          :class="[
            'h-2 w-2 md:h-3 md:w-3 rounded-full transition-all',
            store.activeIndex === index
              ? 'bg-white'
              : 'bg-white/20 group-hover:bg-white/50',
          ]"
        ></div>

        <span class="sr-only"
          >{{
            store.activeIndex === index
              ? "Current crew member:"
              : "View crew member:"
          }}
          {{ crew.name }}</span
        >
      </button>
    </li>
  </ul>
</template>
