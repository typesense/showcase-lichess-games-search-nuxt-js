<template v-slot:item="{ item }">
  <div class="bg-background rounded-md flex flex-col border border-zinc-200 dark:border-zinc-700 p-4 gap-3">
    <div class="flex items-baseline justify-between">
      <div class="flex flex-col gap-1 w-5/12">
        <div class="flex items-baseline gap-3">
          <span class="text-lg font-bold">{{ item.white_id }}</span>
          <Icon icon="streamline:chess-knight" class="h-full text-2xl w-[1.2rem] dark:hidden" />
          <Icon icon="streamline:chess-knight-solid" class="h-full text-2xl w-[1.2rem] hidden dark:flex" />
          <div v-if="item.winner === 'white'">
            <Icon icon="lucide:crown" class="h-full text-2xl w-[1.2rem] text-yellow-200 fill-current" />
          </div>
        </div>
      </div>
      <div class="w-1/6">Vs</div>
      <div class="flex flex-col w-5/12 items-end">
        <div class="flex items-baseline gap-3">
          <div v-if="item.winner === 'black'">
            <Icon icon="lucide:crown" class="h-full text-2xl w-[1.2rem] text-yellow-200 fill-current" />
          </div>
          <Icon icon="streamline:chess-knight-solid" class="h-full text-2xl w-[1.2rem] dark:hidden" />
          <Icon icon="streamline:chess-knight" class="h-full text-2xl w-[1.2rem] hidden dark:flex" />
          <span class="text-lg font-bold">{{ item.black_id }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 w-1/4">
        <Icon icon="lucide:line-chart" />
        <span class="text-md">{{ item.white_rating }}</span>
      </div>
      <div class="flex justify-center items-center gap-2 w-1/4">
        <TooltipProvider v-if="item.rated">
          <Tooltip>
            <TooltipTrigger class="flex justify-center items-center gap-2">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                {{ item.increment_code }}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Rated matches are marked gold</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span v-else>{{ item.increment_code }}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger class="flex justify-center items-center gap-2">
              <Icon :icon="gameTypeInfo.gameTypeIcon" class="fill-current" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ gameTypeInfo.gameTypeKey }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div class="flex items-center justify-end gap-2 text-zinc-400 dark:text-zinc-500 w-1/4">
        <Icon icon="lucide:line-chart" />
        <span class="text-md">{{ item.black_rating }}</span>
      </div>
    </div>
    <div class="flex mt-3 flex-1 items-center gap-2">
      <Icon icon="lucide:clock" />
      <span>
        {{
          formatTimeInterval({
            createdTime: item.created_at,
            endTime: item.last_move_at,
          })
        }}
        • in {{ item.turns }} turns by
      </span>
      <span class="font-semibold">
        {{ formatVictoryStatus(item.victory_status) }}
      </span>
    </div>
    <div class="flex items-center gap-2 text-start">
      <Icon icon="lucide:book-open" />
      <span class="max-w-[70%] font-semibold truncate">
        {{ item.opening_name }}
      </span>
      <span> for {{ item.opening_ply }} moves </span>
    </div>
    <div class="mt-5 flex justify-end items-center text-sm text-zinc-400 dark:text-zinc-500">
      {{ format(new Date(item.created_at), "MMM do, yyyy") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue"
import { intervalToDuration, format } from "date-fns"
import type { Game } from "~/types/types"
import { Icon } from "@iconify/vue"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const props = defineProps<{
  item: Game
}>()

const gameTypeInfo = reactive({
  gameTypeKey: "",
  gameTypeIcon: "",
})

onMounted(() => {
  const info = formatIncrementCode(props.item.increment_code)
  gameTypeInfo.gameTypeIcon = info.gameTypeIcon
  gameTypeInfo.gameTypeKey = info.gameTypeKey
})

function formatVictoryStatus(victoryStatus: string) {
  switch (victoryStatus) {
    case "outoftime":
      return "Time Out"
    case "resign":
      return "Resignation"
    case "mate":
      return "Checkmate"
    case "draw":
      return "Draw"
    default:
      return victoryStatus
  }
}

function formatTimeInterval({
  createdTime,
  endTime,
}: {
  createdTime: number
  endTime: number
}) {
  if (createdTime === endTime) {
    return "0s"
  }

  const duration = intervalToDuration({
    start: new Date(createdTime),
    end: new Date(endTime),
  })

  const formattedDuration = [
    duration.hours ? `${duration.hours}h` : "",
    duration.minutes ? `${duration.minutes}m` : "",
    `${duration.seconds}s`,
  ]
    .filter(Boolean)
    .join(" ")

  return formattedDuration
}

function formatIncrementCode(incrementCode: string) {
  const [minutes] = incrementCode.split("+").map(Number)

  const gameTypes = [
    { key: "Bullet", min: 0, max: 3, icon: "game-icons:bullet-impacts" },
    { key: "Blitz", min: 3, max: 10, icon: "lucide:flame" },
    { key: "Rapid", min: 10, max: 30, icon: "lucide:rabbit" },
    { key: "Classical", min: 30, max: Infinity, icon: "lucide:turtle" },
  ]

  const gameType = gameTypes.find(
    ({ min, max }) => minutes >= min && minutes < max
  )

  return gameType
    ? { gameTypeKey: gameType.key, gameTypeIcon: gameType.icon }
    : { gameTypeKey: "classical", gameTypeIcon: "lucide:turtle" }
}
</script>
