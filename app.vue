<script setup lang="ts">
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import { typesenseInstantsearchAdapter } from "./lib/typesense"

useSeoMeta({
  title: "Lichess Games Showcase | Typesense",
  ogTitle: "Lichess Games Search, powered by Typesense",
  description:
    "Search through games played on Lichess.org using Typesense. Filter, sort and search through games by player, opening, time control, and more.",
})

const searchClient = ref(typesenseInstantsearchAdapter().searchClient)
</script>

<template>
  <div
    class="dark:hidden absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_90%_at_50%_0%,#000_90%,transparent_110%)]">
    <div
      class="dark:hidden absolute bottom-auto right-auto left-0 top-0 h-[300px] w-[500px] translate-x-[20%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-40 blur-[80px]">
    </div>
  </div>
  <Icon icon="simple-icons:lichess"
    class=' dark:hidden absolute bottom-auto right-auto left-36 top-32 h-[200px] w-auto text-[rgba(174,147,244,0.7)] translate-x-[30%] opacity-25 blur-[2px]' />
  <SiteHeader />
  <!-- <div clas="dark:hidden absolute top-0 -z-10 h-full w-full bg-white"> -->
  <!-- </div> -->
  <div
    class=" hidden dark:flex absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(33,66,54,0.9),rgba(255,255,255,0))]">
  </div>
  <main class="flex flex-col items-center z-100 justify-center flex-1 w-full text-center px-4 lg:px-16 gap-9">
    <TypesenseAPIButton />
    <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
      Lichess Games, powered by Typesense.
    </h1>
    <span class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
      Search through games played on Lichess.org using Typesense. Filter, sort
      and search through games by player, opening, time control, and more.
    </span>
    <ais-instant-search index-name="chess" :search-client="searchClient" class="w-full mt-10 lg:mt-10 items-center">
      <SearchBar />
      <div class="flex mt-20">
        <ais-configure :hitsPerPage="5" />
        <Filter />
        <ais-state-results class="w-full">
          <template v-slot="{ results: { hits, query } }">
            <ais-infinite-hits :show-previous="false" :class-names="{
              'ais-InfiniteHits': 'w-full mb-10',
              'ais-InfiniteHits-list':
                'mb-10 flex flex-col gap-4 lg:gap-6 lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center lg:items-start',
              'ais-InfiniteHits-item': 'w-full',
              'ais-InfiniteHits-loadMore':
                'rounded-lg bg-zinc-100 dark:bg-zinc-900 px-4 py-2 cursor-pointer text-md font-semibold w-1/4 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200',
              'ais-InfiniteHits-loadMore--disabled': 'hidden'
            }" v-show="hits.length > 0">
              <template v-slot:item="{ item }">
                <Hit :item="item" />
              </template>
            </ais-infinite-hits>
            <div v-show="hits.length === 0">
              No results have been found for {{ query }}.
            </div>
          </template>
        </ais-state-results>
      </div>
    </ais-instant-search>
  </main>
</template>
