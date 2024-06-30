import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { pickAndShuffleGameTiles } from '@/lib/utils/array'
import { tilesData, type Tile } from '@/lib/utils/game-data'

interface GameStats {
  date: Date
  attempts: number
  time: number
  pairsFound: number
}

export const useGameStore = defineStore('game', () => {
  const timeLimit = ref(600)
  const attemptsLimit = ref(120)

  const currentGameStats = ref<GameStats>({
    date: new Date(),
    attempts: 0,
    time: 0,
    pairsFound: 0
  })

  const gameStats = ref<GameStats[]>([])

  const tiles = ref<Tile[]>(pickAndShuffleGameTiles([...tilesData], 6))

  const attempts = ref(0)

  const getTimelimit = computed(() => {
    return timeLimit.value
  })

  const getAttemptsLimit = computed(() => {
    return attemptsLimit.value
  })

  const getAttempts = computed(() => {
    return attempts.value
  })

  const getTilesRevealed = computed(() => {
    return tiles.value.filter((tile) => tile.isRevealed && !tile.isMatched)
  })

  const tilesMatched = computed(() => {
    return tiles.value.filter((tile) => tile.isMatched)
  })

  const getPairsFound = computed(() => {
    return tilesMatched.value.length / 2
  })

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

    tiles.value = pickAndShuffleGameTiles([...tilesData], 6)

    attempts.value = 0
  }

  function setTileRevealed(tileId: number) {
    const tile = tiles.value.find((t) => t.id === tileId)

    if (!tile) return

    tile.isRevealed = true
  }

  function flipRevealedUnmatchedTiles() {
    getTilesRevealed.value.forEach((tile) => {
      if (!tile.isMatched) {
        tile.isRevealed = false
      }
    })
  }

  const revealTile = (tileId: number) => {
    const tile = tiles.value.find((t) => t.id === tileId)

    if (!tile) return

    if (tile.isRevealed) return

    if (tile.isMatched) return

    if (getTilesRevealed.value.length > 1) {
      flipRevealedUnmatchedTiles()
    }

    setTileRevealed(tileId)

    if (getTilesRevealed.value.length === 2) {
      attempts.value = (attempts.value || 0) + 1
      if (getTilesRevealed.value[0].matchValue === getTilesRevealed.value[1].matchValue) {
        getTilesRevealed.value.forEach((t) => {
          t.isMatched = true
        })
      }
    }
  }

  return {
    tiles,
    attempts,
    currentGameStats,
    gameStats,
    getTimelimit,
    getAttemptsLimit,
    getTilesRevealed,
    getPairsFound,
    getAttempts,
    setCurrentGameStats,
    newGame,
    revealTile
  }
})
