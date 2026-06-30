"use client";
import { useSyncExternalStore } from "react";
import { motion } from "motion/react"

const BG_STYLES = `
@keyframes orb-pulse {
  0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.7; }
  33%       { transform: scale(1.18) translate(20px, -15px); opacity: 1; }
  66%       { transform: scale(0.9) translate(-15px, 20px); opacity: 0.5; }
}
@keyframes orb-pulse-b {
  0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.6; }
  40%       { transform: scale(1.22) translate(-25px, 10px); opacity: 0.9; }
  70%       { transform: scale(0.88) translate(20px, -20px); opacity: 0.4; }
}
@keyframes aurora-drift {
  0%, 100% { transform: scaleX(1) translateX(0); opacity: 0.18; }
  50%       { transform: scaleX(1.08) translateX(-30px); opacity: 0.28; }
}
@keyframes grid-fade {
  0%, 100% { opacity: 0.032; }
  50%       { opacity: 0.048; }
}
@keyframes beam-sweep {
  0%   { opacity: 0; transform: translateX(-120%); }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(120%); }
}
`;

type Star = { id: number; x: number; y: number; r: number; baseOp: number; dur: number; delay: number; };

const INITIAL_STARS: Star[] = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 1.4 + 0.4,
  baseOp: Math.random() * 0.35 + 0.08,
  dur: Math.random() * 3 + 2.5,
  delay: Math.random() * 5,
}));

const emptySubscribe = () => () => {};

const Background = () => {
  const stars = useSyncExternalStore(
    emptySubscribe,
    () => INITIAL_STARS,
    () => []
  );
  
  return (
    <>
      <style>{BG_STYLES}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            animation: "grid-fade 9s ease-in-out infinite",
          }}
        />

        {/* Gold orb — top-left */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-22%", left: "-14%",
            width: "65vmax", height: "65vmax",
            background: "radial-gradient(circle at 40% 40%, rgba(245,194,0,0.18) 0%, rgba(245,150,0,0.06) 40%, transparent 70%)",
            animation: "orb-pulse 14s ease-in-out infinite",
            filter: "blur(2px)",
          }}
        />

        {/* Blue orb — bottom-right */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-26%", right: "-16%",
            width: "70vmax", height: "70vmax",
            background: "radial-gradient(circle at 60% 60%, rgba(65,105,225,0.16) 0%, rgba(65,105,225,0.05) 45%, transparent 70%)",
            animation: "orb-pulse-b 18s ease-in-out infinite",
            filter: "blur(2px)",
          }}
        />

        {/* Purple accent orb — top-right */}
        <div
          className="absolute rounded-full"
          style={{
            top: "10%", right: "-10%",
            width: "38vmax", height: "38vmax",
            background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 65%)",
            animation: "orb-pulse 22s ease-in-out 5s infinite",
          }}
        />

        {/* Aurora bar — bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "38vh",
            background: "linear-gradient(to top, rgba(65,105,225,0.22) 0%, rgba(100,80,255,0.07) 50%, transparent 100%)",
            animation: "aurora-drift 16s ease-in-out infinite",
          }}
        />

        {/* Stars */}
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.r * 2, height: s.r * 2 }}
            animate={{ opacity: [s.baseOp, Math.min(s.baseOp * 3.5, 0.9), s.baseOp] }}
            transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Horizontal light beam — rare flash */}
        <div
          className="absolute top-[38%] left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent 0%, rgba(245,194,0,0.25) 30%, rgba(245,194,0,0.5) 50%, rgba(245,194,0,0.25) 70%, transparent 100%)",
            animation: "beam-sweep 18s ease-in-out 4s infinite",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>
    </>
  );
}

export default Background;