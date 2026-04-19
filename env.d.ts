/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Allow TypeScript to recognize CSS imports
declare module "*.css";

// Specifically for Swiper if the above is too broad
declare module "swiper/css";
declare module "swiper/css/*";
