<script setup lang="ts">
const props = defineProps(["number", "text"]);
</script>

<template>
  <h2
    class="text-white font-barlow-condensed uppercase text-center md:text-left md:ml-8 md:mt-8 md:text-xl lg:text-[28px] lg:mt-12 tracking-[2.7px] lg:tracking-[4.3px]"
  >
    <span class="opacity-25 mr-4 font-bold">{{ number }}</span> {{ text }}
  </h2>
</template>
