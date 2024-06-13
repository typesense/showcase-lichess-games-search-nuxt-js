<template>
        <ais-search-box placeholder="Search by opening, player, or time control..." submit-title="string"
                reset-title="string" :class-names="{
                        'ais-SearchBox': 'w-full min-h-24 flex flex-col items-center justify-center',
                        'ais-SearchBox-form': 'flex mx-auto shadow-md',
                        'ais-SearchBox-input':
                                'rounded-l bg-zinc-100 min-h-12 text-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 lg:px-4',
                        'ais-SearchBox-submit':
                                'h-12 p-3 bg-background rounded-r  border-r border-t border-b border-zinc-200 dark:border-zinc-700',
                        'ais-SearchBox-submitIcon': 'text-foreground fill-current h-full  w-[1.2rem]',
                        'ais-SearchBox-reset': 'hidden',
                }" />

</template>
