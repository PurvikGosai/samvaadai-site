"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type SamvaadIntroAnimationProps = {
  onComplete?: () => void;
};

const ease = [0.16, 1, 0.3, 1] as const;

const networkNodes = [
  { x: 290, y: 132, delay: 1.02 },
  { x: 382, y: 72, delay: 1.08 },
  { x: 498, y: 112, delay: 1.14 },
  { x: 604, y: 68, delay: 1.2 },
  { x: 692, y: 142, delay: 1.26 },
  { x: 620, y: 232, delay: 1.32 },
  { x: 492, y: 252, delay: 1.38 },
  { x: 365, y: 214, delay: 1.44 },
  { x: 452, y: 172, delay: 1.5 },
  { x: 548, y: 182, delay: 1.56 },
];

const networkLines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [1, 8],
  [8, 9],
  [9, 4],
  [2, 9],
  [6, 8],
];

export default function SamvaadIntroAnimation({ onComplete }: SamvaadIntroAnimationProps) {
  const [visible, setVisible] = useState(true);
  const hasFinishedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 70 }, (_, index) => {
        const side = index % 4;
        const startX = side === 0 ? -12 : side === 1 ? 112 : 10 + ((index * 29) % 80);
        const startY = side === 2 ? -12 : side === 3 ? 112 : 8 + ((index * 17) % 84);
        return {
          id: index,
          startX,
          startY,
          endX: 42 + ((index * 11) % 17),
          endY: 39 + ((index * 7) % 22),
          delay: (index % 18) * 0.035,
          size: 2 + (index % 4),
          depth: 0.55 + (index % 5) * 0.12,
        };
      }),
    []
  );

  const logoParticles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        x: 50 + Math.cos(index * 0.78) * (18 + (index % 5) * 4),
        y: 49 + Math.sin(index * 0.78) * (10 + (index % 4) * 5),
        delay: 3.25 + (index % 10) * 0.025,
      })),
    []
  );

  const finish = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    document.body.classList.remove("intro-playing");
    setVisible(false);
    window.setTimeout(() => onComplete?.(), reduceMotion ? 0 : 540);
  };

  useEffect(() => {
    const timer = window.setTimeout(finish, reduceMotion ? 900 : 5200);
    const handleScroll = () => {
      if (window.scrollY > 8) finish();
    };

    document.body.classList.add("intro-playing");
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("intro-playing");
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.section
          aria-label="SamvaadAI cinematic 3D logo reveal animation"
          className="fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-[#020b18] text-white"
          exit={{ opacity: 0, scale: 1.018 }}
          transition={{ duration: 0.56, ease }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(32,199,198,.22),transparent_30%),radial-gradient(circle_at_70%_28%,rgba(10,127,188,.2),transparent_28%),linear-gradient(145deg,#020713_0%,#06192e_48%,#020713_100%)]" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,7,19,.2)_40%,rgba(0,0,0,.76)_100%)]"
            animate={{ opacity: [0.62, 0.92, 0.72] }}
            transition={{ duration: 5, ease }}
          />
          <div className="absolute inset-0 opacity-[.11] [background-image:linear-gradient(rgba(183,243,239,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(183,243,239,.12)_1px,transparent_1px)] [background-size:76px_76px]" />
          <div className="absolute left-1/2 top-1/2 h-[740px] w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/10" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[530px] w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl"
            animate={{ opacity: [0.18, 0.46, 0.28], scale: [0.82, 1.12, 0.96] }}
            transition={{ duration: 5, ease }}
          />

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(32,199,198,.75)]"
              style={{
                height: particle.size,
                left: `${particle.startX}%`,
                top: `${particle.startY}%`,
                width: particle.size,
              }}
              initial={{ opacity: 0, scale: 0.25, x: 0, y: 0 }}
              animate={{
                opacity: [0, 0.95, 0.72, 0],
                scale: [0.25, particle.depth, particle.depth * 1.2, 0.35],
                x: [`0vw`, `${particle.endX - particle.startX}vw`, `${51 - particle.startX}vw`],
                y: [`0vh`, `${particle.endY - particle.startY}vh`, `${49 - particle.startY}vh`],
              }}
              transition={{
                delay: particle.delay,
                duration: 3.35,
                ease,
                times: [0, 0.34, 0.72, 1],
              }}
            />
          ))}

          <div className="relative h-[650px] w-full max-w-6xl px-5 md:h-[700px]" style={{ perspective: 1200 }}>
            <motion.div
              className="absolute left-1/2 top-[9%] z-40 -translate-x-1/2 rounded-full border border-cyan-200/15 bg-white/5 px-4 py-2 text-center text-[10px] font-extrabold uppercase tracking-[.32em] text-cyan-100/70 shadow-[0_20px_70px_rgba(0,0,0,.28)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: [0, 1, 1, 0], y: [-12, 0, 0, -8] }}
              transition={{ duration: 3.4, times: [0, 0.16, 0.74, 1], ease }}
            >
              Intelligent Healthcare Communication
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-[45%] z-20 h-[360px] w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, rotateX: 12, rotateY: -22, scale: 0.84 }}
              animate={{
                opacity: [0, 1, 1, 0],
                rotateX: [12, 0, 10, 58],
                rotateY: [-22, 0, 62, 94],
                scale: [0.84, 1, 0.86, 0.36],
                y: [0, 0, -8, 32],
              }}
              transition={{ delay: 0.88, duration: 2.28, times: [0, 0.25, 0.72, 1], ease }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg className="h-full w-full overflow-visible" viewBox="0 0 980 340" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="neuralStroke" x1="240" x2="760" y1="40" y2="290">
                    <stop stopColor="#0a7fbc" />
                    <stop offset=".52" stopColor="#20c7c6" />
                    <stop offset="1" stopColor="#8ee8c7" />
                  </linearGradient>
                  <filter id="neuralGlow" x="-30%" y="-60%" width="160%" height="220%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.78 0 0 0 0 0.76 0 0 0 .8 0" />
                    <feBlend in="SourceGraphic" />
                  </filter>
                </defs>

                {networkLines.map(([from, to], index) => {
                  const a = networkNodes[from];
                  const b = networkNodes[to];
                  return (
                    <motion.line
                      key={`${from}-${to}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="url(#neuralStroke)"
                      strokeLinecap="round"
                      strokeWidth="1.6"
                      filter="url(#neuralGlow)"
                      pathLength={1}
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: [0, 0.9, 0.62, 0], pathLength: [0, 1, 1, 0] }}
                      transition={{ delay: 1.02 + index * 0.035, duration: 1.9, times: [0, 0.34, 0.76, 1], ease }}
                    />
                  );
                })}

                {networkNodes.map((node, index) => (
                  <motion.g key={`${node.x}-${node.y}`}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="11"
                      fill="rgba(32,199,198,.14)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0.7, 0], scale: [0, 1, 1.35, 0.3] }}
                      transition={{ delay: node.delay, duration: 2.05, times: [0, 0.22, 0.7, 1], ease }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={index % 3 === 0 ? 4.8 : 3.8}
                      fill={index % 4 === 0 ? "#8ee8c7" : "#20c7c6"}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1.08, 0.4] }}
                      transition={{ delay: node.delay, duration: 2.1, times: [0, 0.2, 0.74, 1], ease }}
                    />
                  </motion.g>
                ))}

                {[0, 1, 2].map((pulse) => (
                  <motion.circle
                    key={pulse}
                    cx="500"
                    cy="168"
                    r="36"
                    stroke="#20c7c6"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: [0, 0.85, 0], scale: [0.6, 2.65] }}
                    transition={{ delay: 1.24 + pulse * 0.22, duration: 1.16, ease: "easeOut" }}
                  />
                ))}
              </svg>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-[45%] z-30 h-40 w-40 -translate-x-1/2 -translate-y-1/2 md:h-52 md:w-52"
              initial={{ opacity: 0, rotateX: 70, rotateZ: -26, scale: 0.3 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                rotateX: [70, 70, 18, 0, -18],
                rotateZ: [-26, -26, 0, 55, 112],
                scale: [0.3, 0.3, 1, 0.86, 0.2],
              }}
              transition={{ delay: 1.72, duration: 1.76, times: [0, 0.1, 0.38, 0.76, 1], ease }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-[34%] border border-cyan-200/50 bg-[linear-gradient(135deg,rgba(255,255,255,.42),rgba(32,199,198,.18)_42%,rgba(10,127,188,.08))] shadow-[inset_0_0_44px_rgba(255,255,255,.2),0_0_80px_rgba(32,199,198,.5)] backdrop-blur-xl" />
              <div className="absolute inset-7 rounded-full border border-emerald-200/35 bg-cyan-200/10 blur-[1px]" />
              {[0, 1, 2].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
                  animate={{ opacity: [0, 0.72, 0], scale: [0.28, 1.18] }}
                  transition={{ delay: 2.04 + ring * 0.2, duration: 1.05, ease: "easeOut" }}
                />
              ))}
            </motion.div>

            {logoParticles.map((particle) => (
              <motion.span
                key={particle.id}
                className="absolute z-40 rounded-full bg-cyan-100 shadow-[0_0_20px_rgba(183,243,239,.9)]"
                style={{ height: 3 + (particle.id % 3), width: 3 + (particle.id % 3) }}
                initial={{ left: "50%", opacity: 0, scale: 0.2, top: "45%" }}
                animate={{
                  left: [`50%`, `${particle.x}%`, `${particle.x}%`],
                  opacity: [0, 1, 0],
                  scale: [0.2, 1, 0.25],
                  top: [`45%`, `${particle.y}%`, `${particle.y}%`],
                }}
                transition={{ delay: particle.delay, duration: 1.05, times: [0, 0.5, 1], ease }}
              />
            ))}

            <motion.div
              className="absolute left-1/2 top-[46%] z-50 flex w-[min(88vw,680px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
              initial={{ opacity: 0, y: 30, rotateX: 12, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ delay: 3.48, duration: 0.76, ease }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-center gap-4 rounded-[34px] border border-white/15 bg-white/[.075] px-5 py-4 shadow-[0_34px_110px_rgba(0,0,0,.45),inset_0_1px_0_rgba(255,255,255,.24),0_0_60px_rgba(32,199,198,.2)] backdrop-blur-2xl md:gap-5 md:px-8 md:py-5">
                <motion.span
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[2px]"
                  animate={{ x: ["0%", "430%"] }}
                  transition={{ delay: 4.04, duration: 0.7, ease }}
                />
                <svg className="h-16 w-16 shrink-0 drop-shadow-[0_0_26px_rgba(32,199,198,.55)] md:h-20 md:w-20" viewBox="0 0 96 96" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="logoMetal" x1="12" x2="86" y1="10" y2="86">
                      <stop stopColor="#e8ffff" />
                      <stop offset=".18" stopColor="#0a7fbc" />
                      <stop offset=".56" stopColor="#20c7c6" />
                      <stop offset="1" stopColor="#f7ffff" />
                    </linearGradient>
                    <filter id="logoGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.78 0 0 0 0 0.76 0 0 0 .9 0" />
                      <feBlend in="SourceGraphic" />
                    </filter>
                  </defs>
                  <motion.path
                    d="M70 16 C57 7 30 10 22 27 C14 45 42 45 57 51 C78 59 66 83 38 80 C23 78 13 70 8 62"
                    stroke="url(#logoMetal)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    filter="url(#logoGlow)"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 3.46, duration: 0.52, ease }}
                  />
                  <motion.path
                    d="M18 82 C36 70 61 66 86 68"
                    stroke="url(#logoMetal)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    filter="url(#logoGlow)"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 3.72, duration: 0.38, ease }}
                  />
                  <motion.circle cx="65" cy="19" r="4" fill="#8ee8c7" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.82, duration: 0.18 }} />
                  <motion.circle cx="78" cy="31" r="3.8" fill="#20c7c6" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.88, duration: 0.18 }} />
                  <motion.circle cx="67" cy="43" r="3.5" fill="#b7f3ef" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.94, duration: 0.18 }} />
                  <motion.path d="M65 19 L78 31 L67 43" stroke="#8ee8c7" strokeWidth="2" strokeLinecap="round" pathLength={1} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.85 }} transition={{ delay: 3.92, duration: 0.24 }} />
                </svg>
                <div className="relative text-left">
                  <motion.div
                    className="font-[var(--font-display)] text-[42px] font-extrabold leading-none tracking-[-.09em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,.18)] md:text-[64px]"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.68, duration: 0.42, ease }}
                  >
                    Samvaad<span className="bg-gradient-to-r from-[#20c7c6] via-[#8ee8c7] to-[#0a7fbc] bg-clip-text text-transparent">AI</span>
                  </motion.div>
                  <div className="mt-1 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
                </div>
              </div>

              <svg className="mt-5 h-8 w-[min(72vw,520px)] overflow-visible" viewBox="0 0 520 36" fill="none" aria-hidden="true">
                <motion.path
                  d="M8 18 H170 L184 18 L197 8 L211 29 L224 18 H330 L343 18 L354 11 L366 25 L378 18 H512"
                  stroke="url(#heartbeatSweep)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 4.06, duration: 0.78, times: [0, 0.58, 0.86, 1], ease }}
                />
                <defs>
                  <linearGradient id="heartbeatSweep" x1="8" x2="512" y1="0" y2="0">
                    <stop stopColor="#0a7fbc" />
                    <stop offset=".5" stopColor="#20c7c6" />
                    <stop offset="1" stopColor="#8ee8c7" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.p
                className="mt-1 text-[11px] font-extrabold uppercase tracking-[.22em] text-cyan-50/82 md:text-sm md:tracking-[.26em]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.38, duration: 0.44, ease }}
              >
                Revolutionizing Communications With AI
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-[46%] z-10 h-[260px] w-[min(86vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl"
              animate={{ opacity: [0, 0, 0.55, 0.25], scale: [0.5, 0.5, 1.12, 1.02] }}
              transition={{ delay: 3.15, duration: 1.55, times: [0, 0.08, 0.42, 1], ease }}
            />
          </div>

          <button
            type="button"
            className="absolute bottom-6 right-6 z-[90] rounded-full border border-white/12 bg-white/[.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-cyan-50/72 shadow-[0_14px_40px_rgba(0,0,0,.28)] backdrop-blur-xl transition hover:bg-white/12 hover:text-white"
            onClick={finish}
          >
            Skip intro
          </button>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
