import { defineStore } from "pinia";
import data from "@/data/crews.json";
import type { Crew } from "@/types/crew";
import { getImageUrl } from "@/utils/get-assets";

export const useCrewStore = defineStore("crew", {
  state: () => ({
    crews: data.map((d) => ({
      ...d,
      image: getImageUrl(d.image),
    })),
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
