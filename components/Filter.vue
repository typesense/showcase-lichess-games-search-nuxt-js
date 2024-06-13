<template>
  <aside
    class="justify-start items-start lg:flex lg:flex-col gap-5 hidden lg:w-1/4 sticky top-0"
  >
    <h1 class="tracking-tight text-xl font-semibold">Sort By</h1>
    <ais-sort-by
      :class-names="{
        'ais-SortBy': 'flex flex-col gap-2 items-start text-start',
        'ais-SortBy-item': 'flex items-center gap-3',
        'ais-SortBy-labelText': '',
        'ais-SortBy-label': 'flex items-center gap-2',
        'ais-SortBy-select':
          'rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800',
        'ais-SortBy-item--selected': '',
        'ais-SortBy-label--selected': '',
      }"
      :items="[
        { value: 'chess/sort/created_at:desc', label: 'Newest' },
        { value: 'chess/sort/created_at:asc', label: 'Oldest' },
        { value: 'chess/sort/turns:desc', label: 'Most Turns' },
        { value: 'chess/sort/turns:asc', label: 'Least Turns' },
        {
          value: 'chess/sort/black_rating:desc',
          label: 'Highest Black Rating',
        },
        {
          value: 'chess/sort/black_rating:asc',
          label: 'Lowest Black Rating',
        },
        {
          value: 'chess/sort/white_rating:desc',
          label: 'Highest White Rating',
        },
        {
          value: 'chess/sort/white_rating:asc',
          label: 'Lowest White Rating',
        },
      ]"
    />
    <h1 class="tracking-tight text-xl font-semibold">White Rating</h1>
    <ais-numeric-menu
      attribute="white_rating"
      :items="[
        { label: 'All' },
        { label: '≤ 1000', end: 1000 },
        { label: '1000 - 1200', start: 1000, end: 1200 },
        { label: '1200 - 1500', start: 1200, end: 1500 },
        { label: '1500 - 2000', start: 1500, end: 2000 },
        { label: '≥ 2000', start: 2000 },
      ]"
      :class-names="{
        'ais-NumericMenu': 'flex flex-col gap-2 items-start text-start',
        'ais-NumericMenu-item': ' flex items-center gap-3 ',
        'ais-NumericMenu-labelText': '',
        'ais-NumericMenu-label': 'flex items-center gap-2',
        'ais-NumericMenu-radio':
          'rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800',
        'ais-NumericMenu-label--selected': '',
        'ais-NumericMenu-item--selected': '',
      }"
    />
    <h1 class="tracking-tight text-xl font-semibold">Black Rating</h1>
    <ais-numeric-menu
      attribute="black_rating"
      :items="[
        { label: 'All' },
        { label: '≤ 1000', end: 1000 },
        { label: '1000 - 1200', start: 1000, end: 1200 },
        { label: '1200 - 1500', start: 1200, end: 1500 },
        { label: '1500 - 2000', start: 1500, end: 2000 },
        { label: '≥ 2000', start: 2000 },
      ]"
      :class-names="{
        'ais-NumericMenu': 'flex flex-col gap-2 items-start text-start',
        'ais-NumericMenu-item': ' flex items-center gap-3 ',
        'ais-NumericMenu-labelText': '',
        'ais-NumericMenu-label': 'flex items-center gap-2',
        'ais-NumericMenu-radio':
          'rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800',
        'ais-NumericMenu-label--selected': '',
        'ais-NumericMenu-item--selected': '',
      }"
    />
    <h1 class="tracking-tight text-xl font-semibold">Turns</h1>
    <ais-numeric-menu
      attribute="turns"
      :items="[
        { label: 'All' },
        { label: '≤ 10', end: 10 },
        { label: '10 - 30', start: 10, end: 30 },
        { label: '30 - 50', start: 30, end: 50 },
        { label: '50 - 100', start: 50, end: 100 },
        { label: '≥ 100', start: 100 },
      ]"
      :class-names="{
        'ais-NumericMenu': 'flex flex-col gap-2 items-start text-start',
        'ais-NumericMenu-item': ' flex items-center gap-3 ',
        'ais-NumericMenu-labelText': '',
        'ais-NumericMenu-label': 'flex items-center gap-2',
        'ais-NumericMenu-radio':
          'rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800',
        'ais-NumericMenu-label--selected': '',
        'ais-NumericMenu-item--selected': '',
      }"
    />
    <h1 class="tracking-tight text-xl font-semibold">Opening</h1>
    <ais-refinement-list
      attribute="opening_name"
      searchable
      :class-names="{
        'ais-SearchBox-form': 'flex w-5/6',
        'ais-SearchBox-input':
          'rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 w-full px-2',
        'ais-Highlight-highlighted': 'bg-yellow-200 dark:bg-yellow-800',
        'ais-SearchBox-submit': 'hidden',
        'ais-SearchBox-reset': 'hidden',
        'ais-RefinementList': 'flex flex-col gap-2 items-start text-start',
        'ais-RefinementList-item': 'max-w-[200px]',
        'ais-RefinementList-labelText': ' w-3/4 truncate',
        'ais-RefinementList-label': 'flex items-center gap-2 w-full',
        'ais-RefinementList-checkbox':
          'rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800',
        'ais-RefinementList-label--selected': '',
        'ais-RefinementList-count': 'hidden',
        'ais-RefinementList-item--selected': '',
        'ais-RefinementList-noResults': ' w-[200px] truncate',
      }"
    >
    </ais-refinement-list>
    <h1 class="tracking-tight text-xl font-semibold">Winner</h1>
    <ais-refinement-list
      attribute="winner"
      :class-names="{
        'ais-SearchBox-form': 'flex w-5/6',
        'ais-SearchBox-input':
          'rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 w-full px-2',
        'ais-Highlight-highlighted': 'bg-yellow-200 dark:bg-yellow-800',
        'ais-SearchBox-submit': 'hidden',
        'ais-SearchBox-reset': 'hidden',
        'ais-RefinementList': 'flex flex-col gap-2 items-start text-start',
        'ais-RefinementList-item': 'max-w-[200px]',
        'ais-RefinementList-labelText': ' w-3/4 truncate',
        'ais-RefinementList-label': 'flex items-center gap-2 w-full',
        'ais-RefinementList-checkbox':
          'rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800',
        'ais-RefinementList-label--selected': '',
        'ais-RefinementList-count': 'hidden',
        'ais-RefinementList-item--selected': '',
        'ais-RefinementList-noResults': ' w-[200px] truncate',
      }"
    >
    </ais-refinement-list>
  </aside>
</template>
