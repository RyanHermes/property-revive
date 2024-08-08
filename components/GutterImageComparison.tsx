'use client'

import Image from 'next/image'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

export default function GutterImageComparison() {
  return (
    <div
      className="mb-10"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImgComparisonSlider>
        <Image
          slot="first"
          src="/gutter_before.png"
          alt="logo"
          width={585}
          height={585}
        />
        <Image
          slot="second"
          src="/gutter_after.png"
          alt="logo"
          width={585}
          height={585}
        />
      </ImgComparisonSlider>
    </div>
  )
}
