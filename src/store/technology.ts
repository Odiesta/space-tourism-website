import { defineStore } from "pinia";
import data from "@/data/technologies.json";
import type { Technology } from "@/types/technology";
import { getImageUrl } from "@/utils/get-assets";

export const useTechnologyStore = defineStore("technology", {
  state: () => ({
    technologies: data.map((d) => ({
      ...d,
      image: getImageUrl(d.image),
    })),
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
