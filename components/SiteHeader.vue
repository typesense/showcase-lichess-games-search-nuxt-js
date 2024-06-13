<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Icon } from "@iconify/vue"

let scrolled = ref(false)

const checkScroll = () => {
  scrolled.value = window.scrollY > 100
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
onMounted(() => {
  window.addEventListener("scroll", checkScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll)
})
</script>

<template>
  <header class="backdrop-blur-lg sticky top-0 z-40 mb-7 w-full">
    <div class="px-10 md:px-20 lg:px-28 flex h-16 items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="https://typesense.org/" target="_blank" rel="noopener noreferrer" id="typesenseLink"
          class="text-center text-xl text-[#00dc82]">
          type<b>sense</b>|
        </a>
        &
        <Icon icon="logos:nuxt-icon" class="h-full text-2xl w-[1.2rem]" />
      </div>
      <ThemeToggle />
    </div>
    <div :class="{ 'scale-x-100': scrolled }"
      class="transform scale-x-0 origin-center bg-zinc-200 dark:bg-zinc-800 transition-transform duration-500 h-0.5">
    </div>
  </header>
  <Button @click="scrollToTop"
    class="fixed transform transition-all duration-100 text-foreground bottom-4 right-6 p-2 rounded-full shadow-lg cursor-pointer scale-0 w-12 h-12 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 "
    :class="{ 'scale-100': scrolled }">
    <Icon icon="lucide:arrow-up" class="h-6 w-6" />
  </Button>
</template>
