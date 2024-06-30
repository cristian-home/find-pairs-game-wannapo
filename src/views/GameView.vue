<script setup lang="ts">
import PairCounter from '@/components/PairCounter.vue'
import GameBoard from '@/components/GameBoard.vue'
import QLogo from '@/components/icons/QLogo.vue'
import { useMotion } from '@vueuse/motion'
import { computed, onMounted, ref } from 'vue'
import Button from '@/components/controls/Button.vue'
import Badge from '@/components/controls/Badge.vue'
import Timer from '@/components/icons/Timer.vue'
import { useIntervalFn } from '@vueuse/core'
import { invoke, until, useCounter } from '@vueuse/core'
import ModalDialog from '@/components/ModalDialog.vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const router = useRouter()

const headerRef = ref<HTMLElement | null>(null)
const gameBoardRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)

const animatedElements = [headerRef, gameBoardRef, footerRef]

const gameOverModal = ref(false)
const modalTitle = ref('')
const modalText = ref('')
// const { count: attempts } = useCounter()
const { count: timeLeft, dec: decTimeLeft } = useCounter(gameStore.getTimelimit)
// const timeLeft = ref(30)

const attempts = computed(() => gameStore.getAttempts)

invoke(async () => {
  await until(attempts).toBe(gameStore.getAttemptsLimit)

  pause()

  saveGameState()

  gameOverModal.value = true
  modalTitle.value = 'Juego Terminado'
  modalText.value = 'Se acabaron tus intentos'

  await until(gameOverModal).toBe(false)

  router.push('/congrats')
})

invoke(async () => {
  await until(timeLeft).toBe(0)

  pause()

  saveGameState()

  gameOverModal.value = true
  modalTitle.value = 'Juego Terminado'
  modalText.value = 'Se terminó el tiempo'

  await until(gameOverModal).toBe(false)

  router.push('/congrats')
})

const { pause } = useIntervalFn(() => {
  decTimeLeft()
}, 1000)

const saveGameState = () => {
  gameStore.setCurrentGameStats({
    date: new Date(),
    attempts: gameStore.getAttempts,
    time: gameStore.getTimelimit - timeLeft.value,
    pairsFound: gameStore.getPairsFound
  })
}

onMounted(() => {
  animatedElements.forEach((ref, index) => {
    const { variant } = useMotion(ref, {
      initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 350,
          damping: 20,
          delay: index * 150
        }
      }
    })
  })
})
</script>

<template>
  <div
    class="h-dvh w-full overflow-x-hidden overflow-y-hidden grid grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-center place-items-center gap-2"
    ref="headerRef"
  >
    <div class="h-28 w-full flex flex-row justify-between gap-8 p-0">
      <div class="w-1/4 flex flex-row justify-start items-center">
        <QLogo class="fill-endeavour max-h-full max-w-full w-20 h-20" />
      </div>
      <div class="w-2/4 flex flex-row justify-center items-center grow">
        <PairCounter
          class="scale-125 origin-top max-h-full grow"
          :pair-count="gameStore.getPairsFound"
          :max-pairs="12"
        />
      </div>
      <div class="w-1/4 flex flex-row justify-end items-center">
        <img src="@/assets/img/winny-logo.webp" class="max-h-full max-w-full" />
      </div>
    </div>
    <div
      class="w-full h-[0] min-h-full flex flex-col justify-center items-center"
      ref="gameBoardRef"
    >
      <GameBoard />
    </div>
    <div class="h-20 w-full flex flex-row justify-between gap-2 p-0" ref="footerRef">
      <div class="w-2/3 flex flex-row justify-start items-center">
        <Badge class="flex-row py-1 translate-x-[3rem]">
          <template #left-icon>
            <Timer class="w-8 h-8 scale-[3] origin-right" />
          </template>
          <div class="flex-col">
            <div class="text-sm">{{ timeLeft }} segundos</div>
            <div class="text-sm">
              Intentos {{ gameStore.attempts }} / {{ gameStore.getAttemptsLimit }}
            </div>
          </div>
        </Badge>
      </div>
      <!-- <div class="w-1/3 flex flex-row justify-center items-center">
        <RouterLink to="/congrats" custom v-slot="{ navigate }">
          <Button class="" @click="navigate">Terminar</Button>
        </RouterLink>
      </div> -->
      <Button type="button" @click="() => gameStore.newGame()">New Game</Button>
      <div class="w-1/3 flex flex-row justify-end items-center self-end">
        <img src="@/assets/img/bottom-bear.webp" class="max-h-full max-w-full w-36" />
      </div>
    </div>
  </div>
  <ModalDialog
    :is-open="gameOverModal"
    :title="modalTitle"
    :message="modalText"
    @on:modalClose="() => (gameOverModal = false)"
  >
    <template #actions="{ close }">
      <Button type="button" @click="close">Aceptar</Button>
    </template>
  </ModalDialog>
</template>

<style scoped></style>
