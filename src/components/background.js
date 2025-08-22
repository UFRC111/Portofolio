import React, { useEffect } from "react";
import Particles from "react-tsparticles";

export default function Background() {
  useEffect(() => {
    const fetchIP = async () => {
      try {
        // Get the public IP
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const ip = data.ip;

        // Send IP to backend
        await fetch("https://9767a119-7432-40ab-9b1c-781c8f564264-00-cckvm575pyg2.janeway.replit.dev/save-ip", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip }),
        });
      } catch (err) {
        console.error("Error fetching/sending IP:", err);
      }
    };

    fetchIP();
  }, []);

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
