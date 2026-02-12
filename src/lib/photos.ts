import type { PhotoData } from '~/types'
import yd1 from '~/assets/photos/yd1.webp'
import yd2 from '~/assets/photos/yd2.webp'
import kml1 from '~/assets/photos/kml1.webp'
import kml2 from '~/assets/photos/kml2.webp'
import kml3 from '~/assets/photos/kml3.webp'
import xa1 from '~/assets/photos/xa1.webp'
import xa2 from '~/assets/photos/xa2.webp'
import xa3 from '~/assets/photos/xa3.webp'
import xa4 from '~/assets/photos/xa4.webp'
import xa5 from '~/assets/photos/xa5.webp'

export const PhotosList: PhotoData[] = [
  {
    title: "昆明 · 南屏街",
    icon: {
      type: 'emoji',
      value: '🏞️',
    },
    description: '元旦快乐',
    date: '2026-01-01',
    travel: '',
    photos: [
      {
        src: yd1,
        alt: "昆明 · 南屏街",
        width: yd1.width,
        height: yd1.height,
        variant: '4x3',
      },
      {
        src: yd2,
        alt: "昆明 · 南屏街",
        width: yd2.width,
        height: yd2.height,
        variant: '4x3',
      },
    ],
  },
  {
    title: '昆明 · 老街',
    icon: {
      type: 'emoji',
      value: '🚴',
    },
    description: '国庆昆明老街',
    date: '2025-10-05',
    travel: '',
    photos: [
      {
        src: kml1,
        alt: '昆明 · 老街',
        width: kml1.width,
        height: kml1.height,
        variant: '4x5',
      },
      {
        src: kml2,
        alt: '昆明 · 老街',
        width: kml2.width,
        height: kml2.height,
        variant: '1x1',
      },
      {
        src: kml3,
        alt: '昆明 · 老街',
        width: kml3.width,
        height: kml3.height,
        variant: '4x3',
      },
    ],
  },
  {
    title: '西安 · 陕西',
    icon: {
      type: 'emoji',
      value: '🏞️',
    },
    description: '',
    date: '2024-08-12',
    travel: '',
    photos: [
      {
        src: xa1,
        alt: '西安 · 陕西',
        width: xa1.width,
        height: xa1.height,
        variant: '4x3',
      },
      {
        src: xa2,
        alt: '西安 · 陕西',
        width: xa2.width,
        height: xa2.height,
        variant: '4x3',
      },
      {
        src: xa3,
        alt: '西安 · 陕西',
        width: xa3.width,
        height: xa3.height,
        variant: '4x3',
      },
      {
        src: xa4,
        alt: '西安 · 陕西',
        width: xa4.width,
        height: xa4.height,
        variant: '4x3',
      },
      {
        src: xa5,
        alt: '西安 · 陕西',
        width: xa5.width,
        height: xa5.height,
        variant: '4x3',
      },
    ],
  },
]
