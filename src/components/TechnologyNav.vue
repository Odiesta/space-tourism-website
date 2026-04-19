<script setup lang="ts">
import { useTechnologyStore } from "@/store/technology";

const store = useTechnologyStore();
</script>

<template>
  <ul
    class="flex justify-center lg:justify-start gap-4 md:gap-6 md:mt-6 lg:flex-col"
  >
    <li
      v-for="(technology, index) in store.technologies"
      :aria-current="store.activeIndex === index ? 'true' : undefined"
      :key="technology.name"
    >
      <button
        @click="store.setTechnology(index)"
        class="cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-casual-navy focus:rounded-full"
      >
        <div
          :class="[
            ' w-10 md:w-15 lg:w-20 h-10 md:h-15 lg:h-20 flex justify-center items-center text-[16px] md:text-2xl rounded-full transition-all border border-white/25 ',
            store.activeIndex === index
              ? 'bg-white text-black'
              : 'bg-transparent hover:bg-white/50 text-white',
          ]"
        >
          {{ index + 1 }}
        </div>
      </button>
    </li>
  </ul>
</template>
