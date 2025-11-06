import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FishBackground() {
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // Each fish: random position + random speed
  const [fishData, setFishData] = useState(
    Array.from({ length: 12 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
     speed: 0.002 + Math.random() * 0.004,
      rotation: 0,
    }))
  );

  const requestRef = useRef();

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth fish movement + rotation
  useEffect(() => {
    const moveFish = () => {
      setFishData((prev) =>
        prev.map((fish) => {
          const dx = mousePos.x - fish.x;
          const dy = mousePos.y - fish.y;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI); // direction to face
          return {
            ...fish,
            x: fish.x + dx * fish.speed,
            y: fish.y + dy * fish.speed,
            rotation: fish.rotation + (angle + 180 - fish.rotation) * 0.05, // smooth rotation
          };
        })
      );
      requestRef.current = requestAnimationFrame(moveFish);
    };

    requestRef.current = requestAnimationFrame(moveFish);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  // Floating bubbles
  const bubbles = Array.from({ length: 20 });
  const fishes = Array.from({ length: 15 }); // number of fish to move freely 🐟

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* 🐟 Animated Fishes moving freely*/}
      {fishes.map((_, i) => 
      (
        <motion.div
            key={i}
            className="absolute text-xl sm:text-2xl opacity-70"
            initial={{
            x: window.innerWidth + 100, // start off-screen right
            y: Math.random() * window.innerHeight,
            }}
            animate={{
            x: -100, // move to off-screen left
            y: Math.random() * window.innerHeight,
            }}
            transition={{
            duration: 10 + Math.random() * 10, // random speed for each fish
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
            }}
        >
            🐟
        </motion.div>
     ))}
      {/* 🐠 Animated Fish */}
      {fishData.map((fish, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl sm:text-3xl opacity-90"
          animate={{
            x: fish.x,
            y: fish.y,
            rotate: fish.rotation,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "center" }}
        >
          🐟
        </motion.div>
      ))}

      {/* 💧 Bubbles */}
      {bubbles.map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + Math.random() * 200,
            scale: Math.random() * 1.2,
            opacity: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            y: -50,
            opacity: [0.3, 1, 0],
            x: "+=15",
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
