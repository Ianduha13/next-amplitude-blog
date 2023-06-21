"use client"
import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

const ParticlesBg = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main)
  }, [])
  return (
    <div className="absolute z-0 w-full h-full">
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: "#191B1F",
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#E8378B",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 200,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 2,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
        }}
      />
    </div>
  )
}

export default ParticlesBg