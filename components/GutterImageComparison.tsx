'use client'

import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';

export default function GutterImageComparison() {
    return (
        <div className="mb-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ImgComparisonSlider>
                <Image slot='first' src="/gutter_before.png" alt="logo" width={500} height={500} />
                <Image slot='second' src="/gutter_after.png" alt="logo" width={500} height={500} />
            </ImgComparisonSlider>
        </div>
    )
}