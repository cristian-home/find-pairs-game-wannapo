<script setup lang="ts">
import QLogo from '@/components/icons/QLogo.vue'
import type { Tile } from '@/lib/utils/game-data'
import { useMotion } from '@vueuse/motion'
import { ref, watch } from 'vue'

const props = defineProps<{
  tile: Tile
}>()

const tileRef = ref<HTMLDivElement | null>(null)
const image = ref<HTMLImageElement | null>(null)
const qLogoRef = ref<SVGElement | null>(null)

watch(
  () => props.tile.isMatched,
  (value: boolean) => {
    if (value) {
      // animate bounce from scale 1 to 1.5 to 1
      const { variant } = useMotion(tileRef, {
        initial: {
          scale: 1
        },
        enter: {
          scale: 1.2,
          transition: {
            type: 'spring',
            stiffness: 350,
            damping: 20,
            onComplete: () => {
              variant.value = 'default'
            }
          }
        },
        default: {
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 350,
            damping: 20
          }
        }
      })
    }
  }
)
</script>

<template>
  <div
    class="cursor-pointer w-20 h-20 even:bg-endeavour odd:bg-seagull text-seagull-50 rounded-md outline outline-8 outline-seagull-50 shadow-xl shadow-endeavour-500"
    :class="{
      'outline-red-700': props.tile.isRevealed
    }"
    ref="tileRef"
  >
    <QLogo
      v-if="!props.tile.isRevealed"
      class="m-6 fill-seagull-50"
      ref="qLogoRef"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
    />
    <img
      v-else
      :src="props.tile.image"
      class="w-full h-full"
      ref="image"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
    />
  </div>

  <!-- <div class="flip-card w-20 h-20 bg-transparent" ref="tileRef">
    <div class="flip-card-inner w-full h-full rounded-md">
      <div class="flip-card-front rounded-md overflow-hidden" ref="qLogoRef">
        <img :src="props.tile.image" alt="Avatar" ref="image" />
      </div>
      <div class="flip-card-back rounded-md overflow-hidden">
        <h1>John Doe</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.flip-card {
  background-color: transparent;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
