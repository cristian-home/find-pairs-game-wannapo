<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GameTile from './GameTile.vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const boardElement = ref<HTMLElement | null>(null)

onMounted(() => {})
</script>

<template>
  <div
    class="max-w-96 md:max-w-xl w-full h-full grid grid-cols-3 md:grid-cols-4 grid-rows-4 md:grid-rows-3 justify-items-center place-items-center gap-6 p-6"
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
