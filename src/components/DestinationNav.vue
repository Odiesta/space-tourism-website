<script setup lang="ts">
import { useDestinationStore } from "@/store/destination";

const store = useDestinationStore();
</script>

<template>
  <ul class="flex justify-center lg:justify-start gap-8 h-8 lg:mt-8">
    <li v-for="(planet, index) in store.destinations" :key="planet.name">
      <button
        @click="store.setDestination(index)"
        :aria-current="store.activeIndex === index ? 'true' : undefined"
        :aria-label="planet.name"
        :class="
          store.activeIndex === index
            ? 'border-b-2 border-white text-white'
            : 'text-blue-cream'
        "
        class="cursor-pointer uppercase tracking-widest font-barlow-condensed md:text-base hover:border-white/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-casual-navy"
      >
        {{ planet.name }}
      </button>
    </li>
  </ul>
</template>
