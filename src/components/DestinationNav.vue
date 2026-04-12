<script setup lang="ts">
import { useDestinationStore } from "@/store/destination";

const store = useDestinationStore();
</script>

<template>
  <ul class="flex justify-center lg:justify-start gap-8 h-8">
    <li
      v-for="(planet, index) in store.destinations"
      :key="planet.name"
      @click="store.setDestination(index)"
      :class="
        store.activeIndex === index
          ? 'border-b-2 border-white text-white'
          : 'text-blue-cream'
      "
      class="cursor-pointer uppercase tracking-widest font-barlow-condensed hover:border-white/50 transition-all"
    >
      {{ planet.name }}
    </li>
  </ul>
</template>
