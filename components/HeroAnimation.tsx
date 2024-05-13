'use client'

import { useSpring, animated } from '@react-spring/web';

export default function HeroAnimation() {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
    })

    return (
        <animated.div className="hero-text" style={fade}>
            <h1 className='text-center'>Property Revive</h1>
            <h2>Let Property Revive Refresh Your Home!</h2>
        </animated.div>
    )
}