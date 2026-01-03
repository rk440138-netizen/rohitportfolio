import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full z-0" 
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 80  ,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 1 } }
            },
          },
          particles: {
            color: { value: "#64748b" },
            links: {
              color: "#94a3b8",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 70 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />
    )
  );
}