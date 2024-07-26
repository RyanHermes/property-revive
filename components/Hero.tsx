'use client'

import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'

export default function Hero() {
	const fade = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 500,
	})

	return (
		<animated.div
			className="hero-text mt-20 md:mt-20 flex flex-col items-center justify-center"
			style={fade}
		>
			<div className="relative">
				<Image
					src="/pr_roof.svg"
					alt="Roof"
					width={1000}
					height={1000}
				/>
				<Image
					className="sparkle-big absolute ml-5 -top-20 -left-12"
					src="/icon_sparkle.36.ffffff.svg"
					alt="Sparkle Icon"
					width={100}
					height={100}
				/>
				<Image
					className="sparkle-small absolute ml-5 -top-24 left-12"
					src="/icon_sparkle.36.ffffff.svg"
					alt="Sparkle Icon"
					width={50}
					height={50}
				/>
				<h1 className="text-center">Property Revive</h1>
			</div>
			<h2 className="font-normal text-center">
				Let Property Revive Refresh Your Home!
			</h2>
		</animated.div>
	)
}
