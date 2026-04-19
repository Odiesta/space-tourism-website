import { defineStore } from "pinia";
import data from "@/data/technologies.json";
import type { Technology } from "@/types/technology";

export const useTechnologyStore = defineStore("technology", {
  state: () => ({
    technologies: data,
    activeIndex: 0,
  }),
  getters: {
    currentTechnology: (state): Technology | undefined =>
      state.technologies[state.activeIndex],
  },
  actions: {
    setTechnology(index: number) {
      this.activeIndex = index;
    },
  },
});
