'use client'

import { ImgComparisonSlider } from '@img-comparison-slider/react'
import Image from 'next/image'

export default function WindowImageComparison() {
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
          src="/window_before.png"
          alt="logo"
          width={585}
          height={585}
        />
        <Image
          slot="second"
          src="/window_after.png"
          alt="logo"
          width={585}
          height={585}
        />
      </ImgComparisonSlider>
    </div>
  )
}
