import { defineStore } from "pinia";
import data from "@/data/destinations.json";
import type { Destination } from "@/types/destination";

export const useDestinationStore = defineStore("destination", {
  state: () => ({
    destinations: data,
    activeIndex: 0,
  }),
  getters: {
    currentPlanet: (state): Destination | undefined =>
      state.destinations[state.activeIndex],
  },
  actions: {
    setDestination(index: number) {
      this.activeIndex = index;
    },
  },
});
