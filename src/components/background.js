import React from "react";
import Particles from "react-tsparticles";

export default function Background() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        },
        particles: {
          color: { value: "#5586f7ff" },
          links: { color: "#5586f7ff", distance: 150, enable: true, opacity: 0.5, width: 1 },
          collisions: { enable: false },
          move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
          number: { value: 60 },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
