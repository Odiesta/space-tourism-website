<script setup lang="ts">
import { ref, watch, nextTick, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const menuRef = ref<HTMLElement | null>(null);
const hamburgerRef = ref<HTMLButtonElement | null>(null);

const navLinks = [
  { id: "00", name: "Home", href: "/" },
  { id: "01", name: "Destination", href: "/destination" },
  { id: "02", name: "Crew", href: "/crew" },
  { id: "03", name: "Technology", href: "/technology" },
];

const openMenu = () => {
  isOpen.value = true;

  nextTick(() => {
    const focusable = menuRef.value?.querySelectorAll("button, [href]");
    if (focusable && focusable.length) {
      (focusable[0] as HTMLElement).focus();
    }
  });
};

const closeMenu = () => {
  isOpen.value = false;
  // Wait for the DOM to update, then return focus to the hamburger button
  nextTick(() => {
    hamburgerRef.value?.focus();
  });
};

// Handle Keyboard accessibility inside the trap
const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;

  // 1. Close on Escape
  if (e.key === "Escape") {
    closeMenu();
    return;
  }

  // 2. Focus Trap on Tab
  if (e.key === "Tab") {
    // Find all focusable elements inside the menu
    const focusableElements = menuRef.value?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.shiftKey) {
      // If Shift + Tab and on the first element, loop to the bottom
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // If Tab and on the last element, loop to the top
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
};

// Add/Remove event listeners based on menu state
watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener("keydown", handleKeydown);
  } else {
    document.removeEventListener("keydown", handleKeydown);
  }
});

// Clean up listener just in case the component is destroyed while open
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <nav
    class="flex items-center justify-between p-6 md:p-0 lg:pt-4 lg:pr-0 md:pl-8 md:h-24 bg-transparent"
  >
    <div class="text-white font-bold">
      <RouterLink :to="`/`">
        <img src="/shared/logo.svg" alt="Logo" class="lg:h-12" />
      </RouterLink>
    </div>

    <button
      ref="hamburgerRef"
      @click="openMenu"
      aria-label="Open navigation menu"
      :aria-expanded="isOpen"
      aria-controls="mobile-menu"
      class="md:hidden text-blue-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0D17] rounded-sm"
    >
      <img src="/shared/icon-hamburger.svg" alt="" />
    </button>

    <hr class="hidden lg:block text-white/25 h-px flex-1 ml-8 -mr-4 z-50" />

    <ul
      class="hidden md:flex items-center self-stretch px-10 gap-8 text-white uppercase tracking-widest md:bg-white/4 md:backdrop-blur-lg lg:w-2xl xl:w-3xl 2xl:w-4xl lg:justify-evenly"
    >
      <li
        v-for="link in navLinks"
        :key="link.id"
        class="font-barlow-condensed tracking-[2.36px] h-full"
      >
        <RouterLink
          :to="`${link.href}`"
          class="h-full flex items-center border-b-3 border-transparent hover:border-white/50 transition-colors"
          exact-active-class="!border-white"
        >
          <span class="font-bold mr-2 md:hidden lg:block">{{ link.id }}</span>
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>

    <div
      ref="menuRef"
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed top-0 right-0 h-full w-64 bg-white/4 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out md:hidden"
    >
      <div class="flex justify-end px-6 py-8">
        <button
          aria-label="Close navigation menu"
          @click="closeMenu"
          class="text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
        >
          <img src="/shared/icon-close.svg" alt="" />
        </button>
      </div>

      <ul
        class="flex flex-col gap-8 mt-8 pl-8 text-white uppercase tracking-widest"
      >
        <li v-for="link in navLinks" :key="link.id">
          <RouterLink
            :to="`${link.href}`"
            class="block font-barlow-condensed text-[16px] pb-2 border-0 border-b-2 border-transparent w-max focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            exact-active-class="!border-white"
            @click="closeMenu"
          >
            <span class="font-bold mr-3 tracking-[2.7px]">{{ link.id }}</span>
            <span class="font-normal tracking-[2.7px]">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div
      v-if="isOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black/20 z-40 md:hidden"
    ></div>
  </nav>
</template>
