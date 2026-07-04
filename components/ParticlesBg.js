"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"

      options={{
        fullScreen: false,

        background: {
          color: {
            value: "#0a0a0a",
          },
        },

        fpsLimit: 120,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
          },
        },

        particles: {

          color: {
            value: "#00ff87",
          },

          links: {
            color: "#00ff87",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },

          number: {
            value: 50,
          },

          opacity: {
            value: 0.2,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

        },

        detectRetina: true,
      }}
    />

  );
}