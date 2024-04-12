"use client";

import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';

export default function ImageComparison() {
    return (
        <ImgComparisonSlider>
            <Image slot='first' src="/before.png" alt="logo" width={500} height={500} />
            <Image slot='second' src="/after.png" alt="logo" width={500} height={500} />
        </ImgComparisonSlider>
    );
}