import { defineStore } from "pinia";
import data from "@/data/destinations.json";
import { getImageUrl } from "@/utils/get-assets";
import type { Destination } from "@/types/destination";

export const useDestinationStore = defineStore("destination", {
  state: () => ({
    destinations: data.map((d) => ({
      ...d,
      image: getImageUrl(d.image),
    })) as Destination[],
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
