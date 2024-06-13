<script setup lang="ts">
import { Icon } from "@iconify/vue"
</script>

<template>
  <div class="p-px bg-gradient-to-l from-[#00dc82] flex to-transparent rounded-full shadow-lg">
    <Button as-child
      class="group rounded-full gap-2 dark:bg-zinc-900 bg-zinc-100 dark:text-foreground text-foreground hover:bg-zinc-200 dark:hover:bg-zinc-800">
      <a href="https://typesense.org/docs/26.0/api/#what-s-new"> Typesense v26.0 is here
        <Icon icon="majesticons:chevron-right"
          class="transition-transform duration-500 ease-in-out transform group-hover:translate-x-1" />
      </a>
    </Button>
  </div>
</template>
