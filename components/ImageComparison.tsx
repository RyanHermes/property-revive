"use client";

import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';

export default function ImageComparison() {
    return (
        <ImgComparisonSlider>
            <Image slot='first' src="/before.png" alt="logo" width={1000} height={1000} />
            <Image slot='second' src="/after.png" alt="logo" width={1000} height={1000} />
        </ImgComparisonSlider>
    );
}