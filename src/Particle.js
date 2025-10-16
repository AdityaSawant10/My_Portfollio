import React, { useMemo } from 'react';
import Particles from "react-tsparticles";

const Particle = () => {
    const isSmall = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 767px)').matches;

    const params = useMemo(() => ({
        particles: {
            number: {
                value: isSmall ? 60 : 140,
                density: { enable: true, value_area: isSmall ? 1000 : 1500 }
            },
            line_linked: { enable: false, opacity: 0.03 },
            move: { direction: "right", speed: isSmall ? 0.03 : 0.05 },
            size: { value: 1 },
            opacity: { anim: { enable: true, speed: 1, opacity_min: 0.05 } }
        },
        interactivity: {
            events: { onclick: { enable: true, mode: "push" } },
            modes: { push: { particles_nb: 1 } }
        },
        retina_detect: true
    }), [isSmall]);

    return (
        <Particles params={params} />
    );
}

export default Particle;
