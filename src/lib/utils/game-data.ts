import image1 from '@/assets/img/tiles/CuadrosMemoriaWinny-29.webp'
import image2 from '@/assets/img/tiles/CuadrosMemoriaWinny-01.webp'
import image3 from '@/assets/img/tiles/CuadrosMemoriaWinny-15.webp'
import image4 from '@/assets/img/tiles/CuadrosMemoriaWinny-16.webp'
import image5 from '@/assets/img/tiles/CuadrosMemoriaWinny-03.webp'
import image6 from '@/assets/img/tiles/CuadrosMemoriaWinny-17.webp'
import image7 from '@/assets/img/tiles/CuadrosMemoriaWinny-13.webp'
import image8 from '@/assets/img/tiles/CuadrosMemoriaWinny-07.webp'
import image9 from '@/assets/img/tiles/CuadrosMemoriaWinny-12.webp'
import image10 from '@/assets/img/tiles/CuadrosMemoriaWinny-10.webp'
import image11 from '@/assets/img/tiles/CuadrosMemoriaWinny-05.webp'
import image12 from '@/assets/img/tiles/CuadrosMemoriaWinny-08.webp'
import image13 from '@/assets/img/tiles/CuadrosMemoriaWinny-20.webp'
import image14 from '@/assets/img/tiles/CuadrosMemoriaWinny-21.webp'
import image15 from '@/assets/img/tiles/CuadrosMemoriaWinny-09.webp'
import image16 from '@/assets/img/tiles/CuadrosMemoriaWinny-23.webp'
import image17 from '@/assets/img/tiles/CuadrosMemoriaWinny-32.webp'
import image18 from '@/assets/img/tiles/CuadrosMemoriaWinny-27.webp'
import image19 from '@/assets/img/tiles/CuadrosMemoriaWinny-25.webp'
import image20 from '@/assets/img/tiles/CuadrosMemoriaWinny-31.webp'
import image21 from '@/assets/img/tiles/CuadrosMemoriaWinny-19.webp'
import image22 from '@/assets/img/tiles/CuadrosMemoriaWinny-24.webp'

export interface RawTile {
  matchValue: number
  image: string
  isRevealed: boolean
  isMatched: boolean
}

export interface Tile extends RawTile {
  id: string
}

export const tilesData: RawTile[] = [
  {
    matchValue: 1,
    image: image1,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 1,
    image: image1,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 2,
    image: image2,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 2,
    image: image2,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 3,
    image: image3,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 3,
    image: image3,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 4,
    image: image4,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 4,
    image: image4,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 5,
    image: image5,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 5,
    image: image5,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 6,
    image: image6,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 6,
    image: image6,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 7,
    image: image7,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 7,
    image: image7,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 8,
    image: image8,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 8,
    image: image8,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 9,
    image: image9,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 9,
    image: image9,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 10,
    image: image10,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 10,
    image: image10,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 11,
    image: image11,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 11,
    image: image11,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 12,
    image: image12,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 12,
    image: image12,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 13,
    image: image13,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 13,
    image: image13,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 14,
    image: image14,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 14,
    image: image14,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 15,
    image: image15,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 15,
    image: image15,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 16,
    image: image16,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 16,
    image: image16,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 17,
    image: image17,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 17,
    image: image17,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 18,
    image: image18,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 18,
    image: image18,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 19,
    image: image19,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 19,
    image: image19,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 20,
    image: image20,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 20,
    image: image20,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 21,
    image: image21,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 21,
    image: image21,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 22,
    image: image22,
    isRevealed: false,
    isMatched: false
  },
  {
    matchValue: 22,
    image: image22,
    isRevealed: false,
    isMatched: false
  }
]
