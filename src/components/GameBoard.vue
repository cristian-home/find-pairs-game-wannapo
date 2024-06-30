<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import GameTile from './GameTile.vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const boardElement = ref<HTMLElement | null>(null)

// const attempts = defineModel<number>('attempts')
// const pairsFound = defineModel<number>('pairsFound')

// const tiles = ref([
//   {
//     id: 1,
//     variant: 'default' as 'default' | 'alt',
//     matchValue: 1,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 2,
//     variant: 'alt' as 'default' | 'alt',
//     matchValue: 1,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 3,
//     variant: 'default' as 'default' | 'alt',
//     matchValue: 2,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 4,
//     variant: 'alt' as 'default' | 'alt',
//     matchValue: 2,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 5,
//     variant: 'default' as 'default' | 'alt',
//     matchValue: 3,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 6,
//     variant: 'alt' as 'default' | 'alt',
//     matchValue: 3,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 7,
//     variant: 'default' as 'default' | 'alt',
//     matchValue: 4,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 8,
//     variant: 'alt' as 'default' | 'alt',
//     matchValue: 4,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 9,
//     variant: 'default' as 'default' | 'alt',
//     matchValue: 5,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 10,
//     variant: 'alt' as 'default' | 'alt',
//     matchValue: 5,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 11,
//     variant: 'default' as 'default' | 'alt',
//     matchValue: 6,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   },
//   {
//     id: 12,
//     variant: 'alt' as 'default' | 'alt',
//     matchValue: 6,
//     isRevealed: false,
//     isMatched: false,
//     image: 'https://picsum.photos/200'
//   }
// ])

// const tilesRevealed = computed(() => {
//   return tiles.value.filter((tile) => tile.isRevealed && !tile.isMatched)
// })

// const revealTile = (tile: (typeof tiles.value)[0]) => {
//   if (tile.isRevealed) return

//   if (tile.isMatched) return

//   if (tilesRevealed.value.length > 1) {
//     tilesRevealed.value.forEach((t) => {
//       t.isRevealed = false
//     })
//   }

//   tile.isRevealed = true

//   if (tilesRevealed.value.length === 2) {
//     attempts.value = (attempts.value || 0) + 1
//     if (tilesRevealed.value[0].matchValue === tilesRevealed.value[1].matchValue) {
//       tilesRevealed.value.forEach((t) => {
//         t.isMatched = true
//       })

//       pairsFound.value = (pairsFound.value || 0) + 1
//     }
//   }
// }

// watch(pairsFound, (value) => {
//   // show congrats modal
//   console.log('congrats')
// })

onMounted(() => {})
</script>

<template>
  <div
    class="max-w-96 w-full h-full grid grid-cols-3 grid-rows-4 justify-items-center place-items-center gap-6 p-6"
    ref="boardElement"
  >
    <GameTile
      v-motion
      v-for="(tile, index) in gameStore.tiles"
      :key="tile.id"
      :tile="tile"
      @click="gameStore.revealTile(tile.id)"
      :initial="{ y: 100, opacity: 0 }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 350, damping: 20, delay: index * 100 }
      }"
    />
  </div>
</template>

<style scoped></style>
