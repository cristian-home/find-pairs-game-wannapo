import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface GameStats {
  date: Date
  attempts: number
  time: number
  pairsFound: number
}

export const useGameStore = defineStore('game', () => {
  const currentGameStats = ref<GameStats>({
    date: new Date(),
    attempts: 0,
    time: 0,
    pairsFound: 0
  })

  const gameStats = ref<GameStats[]>([])

  // const doubleCount = computed(() => count.value * 2)
  function setCurrentGameStats(stats: GameStats) {
    currentGameStats.value = stats
  }

  function newGame() {
    gameStats.value.push(currentGameStats.value)

    currentGameStats.value = {
      date: new Date(),
      attempts: 0,
      time: 0,
      pairsFound: 0
    }
  }

  return { currentGameStats, gameStats, setCurrentGameStats, newGame }
})
