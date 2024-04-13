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
            <h1>Property Revive</h1>
            <p>Let Property Revive Refresh Your Home!</p>
        </animated.div>
    )
}