import { defineStore } from "pinia";
import data from "@/data/crews.json";
import type { Crew } from "@/types/crew";

export const useCrewStore = defineStore("crew", {
  state: () => ({
    crews: data,
    activeIndex: 0,
  }),
  getters: {
    currentCrew: (state): Crew | undefined => state.crews[state.activeIndex],
  },
  actions: {
    setCrew(index: number) {
      this.activeIndex = index;
    },
  },
});
