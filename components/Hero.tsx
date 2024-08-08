'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Highlight } from './ui/hero-highlight'

export default function Hero() {
  return (
    <div className="hero-text mt-20 flex flex-col items-center justify-center lg:mt-20">
      <div className="relative">
        <Image src="/pr_roof.svg" alt="Roof" width={1000} height={1000} />
        <motion.div
          className="sparkle-big absolute -left-12 -top-20 ml-5"
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          animate={{ opacity: 1, scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 10,
            delay: 0,
          }}
        >
          <Image
            src="/icon_sparkle.36.ffffff.svg"
            alt="Sparkle Icon"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          className="sparkle-small absolute -top-24 left-12 ml-5"
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          animate={{ opacity: 1, scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 10,
            delay: 0.5,
          }}
        >
          <Image
            src="/icon_sparkle.36.ffffff.svg"
            alt="Sparkle Icon"
            width={50}
            height={50}
          />
        </motion.div>
        <h1 className="text-center md:whitespace-nowrap">Property Revive</h1>
      </div>
      <h2 className="whitespace-nowrap text-center font-normal max-md:text-2xl">
        <Highlight>Let Property Revive Refresh Your Home!</Highlight>
      </h2>
    </div>
  )
}
