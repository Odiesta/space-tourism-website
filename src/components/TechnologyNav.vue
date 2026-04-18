<script setup lang="ts">
import { useTechnologyStore } from "@/store/technology";

const store = useTechnologyStore();
</script>

<template>
  <ul class="flex justify-center lg:justify-start gap-4 md:gap-6">
    <li
      v-for="(technology, index) in store.technologies"
      :key="technology.name"
      @click="store.setTechnology(index)"
      class="cursor-pointer transition-all duration-300"
    >
      <div
        :class="[
          ' w-10 h-10 flex justify-center items-center text-[16px] rounded-full transition-all border border-white/25 ',
          store.activeIndex === index
            ? 'bg-white text-black'
            : 'bg-transparent hover:bg-white/50 text-white',
        ]"
      >
        {{ index + 1 }}
      </div>
    </li>
  </ul>
</template>
