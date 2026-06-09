"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  FileText,
  HeartPulse,
  MessageCircle,
  PhoneCall,
  Stethoscope,
} from "lucide-react";

type SamvaadIntroAnimationProps = {
  onComplete?: () => void;
};

const careNodes = [
  {
    label: "Appointment Booked",
    Icon: CalendarCheck,
    position: "left-[7%] top-[18%] md:left-[13%] md:top-[24%]",
    delay: 2.05,
  },
  {
    label: "Doctor Connected",
    Icon: Stethoscope,
    position: "right-[7%] top-[18%] md:right-[13%] md:top-[24%]",
    delay: 2.28,
  },
  {
    label: "Prescription Sent",
    Icon: FileText,
    position: "left-[5%] bottom-[24%] md:left-[18%] md:bottom-[20%]",
    delay: 2.52,
  },
  {
    label: "WhatsApp Reminder",
    Icon: MessageCircle,
    position: "right-[5%] bottom-[24%] md:right-[18%] md:bottom-[20%]",
    delay: 2.76,
  },
  {
    label: "Recovery Follow-up",
    Icon: HeartPulse,
    position: "left-1/2 top-[11%] -translate-x-1/2 md:top-[12%]",
    delay: 3,
  },
];

export default function SamvaadIntroAnimation({ onComplete }: SamvaadIntroAnimationProps) {
  const [visible, setVisible] = useState(true);
  const hasFinishedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${8 + ((index * 19) % 84)}%`,
        top: `${10 + ((index * 29) % 76)}%`,
        delay: index * 0.08,
        size: 3 + (index % 3),
      })),
    []
  );

  const finish = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setVisible(false);
    window.setTimeout(() => onComplete?.(), reduceMotion ? 0 : 520);
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
          aria-label="SamvaadAI care journey intro animation"
          className="fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fcfd] text-slate-950"
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(32,199,198,0.2),transparent_30%),linear-gradient(135deg,#ffffff_0%,#eef8f9_42%,#071d38_100%)]" />
          <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(7,29,56,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,56,.12)_1px,transparent_1px)] [background-size:58px_58px]" />
          <div className="absolute -left-36 top-20 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute -right-28 bottom-8 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(32,199,198,.75)]"
              style={{
                left: particle.left,
                top: particle.top,
                height: particle.size,
                width: particle.size,
              }}
              initial={{ opacity: 0, scale: 0.4, y: 10 }}
              animate={{ opacity: [0, 0.55, 0], scale: [0.6, 1.1, 0.6], y: [-3, -16] }}
              transition={{
                delay: particle.delay,
                duration: 3.4,
                repeat: Infinity,
                repeatDelay: 0.8,
              }}
            />
          ))}

          <div className="relative h-[640px] w-full max-w-6xl px-5 md:h-[690px]">
            <motion.div
              className="absolute left-1/2 top-[7%] -translate-x-1/2 rounded-full border border-cyan-300/35 bg-white/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[.28em] text-slate-600 shadow-[0_18px_50px_rgba(7,29,56,.08)] backdrop-blur-xl md:top-[9%]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              One Patient Call to Complete Care
            </motion.div>

            <motion.div
              className="absolute left-[8%] top-1/2 z-20 -translate-y-1/2 md:left-[9%]"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.75, 1, 1.04, 0.92],
                x: [0, 0, 24, 110],
              }}
              transition={{ duration: 1.35, times: [0, 0.2, 0.55, 1], ease: "easeInOut" }}
            >
              <div className="relative grid h-20 w-20 place-items-center rounded-3xl border border-cyan-200/80 bg-white/75 shadow-[0_18px_55px_rgba(7,29,56,.16),0_0_36px_rgba(32,199,198,.32)] backdrop-blur-xl md:h-24 md:w-24">
                {[0, 0.22, 0.44].map((delay) => (
                  <motion.span
                    key={delay}
                    className="absolute inset-0 rounded-3xl border border-cyan-300"
                    animate={{ opacity: [0, 0.8, 0], scale: [0.82, 1.45, 1.95] }}
                    transition={{ delay, duration: 1.1, repeat: 2, ease: "easeOut" }}
                  />
                ))}
                <PhoneCall className="relative h-9 w-9 text-[#0a7fbc] md:h-11 md:w-11" strokeWidth={1.8} />
              </div>
            </motion.div>

            <svg
              className="absolute left-[12%] top-1/2 z-10 h-24 w-[76%] -translate-y-1/2 overflow-visible md:left-[15%] md:w-[70%]"
              viewBox="0 0 780 120"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0 60 C45 60 45 60 75 60 C88 60 94 35 105 35 C118 35 119 86 132 86 C145 86 146 44 160 44 C174 44 176 60 195 60 L315 60"
                stroke="url(#voiceGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 0.65, duration: 1.55, times: [0, 0.45, 0.82, 1], ease: "easeInOut" }}
              />
              <motion.path
                d="M390 60 C430 60 444 38 468 60 C492 82 508 30 530 60 C552 90 572 51 590 60 L780 60"
                stroke="url(#voiceGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 1.55, duration: 1.45, times: [0, 0.5, 0.84, 1], ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="voiceGradient" x1="0" x2="780" y1="0" y2="0">
                  <stop stopColor="#0a7fbc" />
                  <stop offset=".48" stopColor="#20c7c6" />
                  <stop offset="1" stopColor="#8ee8c7" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.55 }}
              animate={{ opacity: [0, 1, 1, 0.9], scale: [0.55, 1, 1.04, 0.96] }}
              transition={{ delay: 1.22, duration: 2.8, times: [0, 0.24, 0.7, 1], ease: "easeOut" }}
            >
              <div className="relative grid h-32 w-32 place-items-center rounded-full border border-cyan-200/70 bg-white/60 shadow-[0_0_75px_rgba(32,199,198,.45),0_26px_70px_rgba(7,29,56,.18)] backdrop-blur-2xl md:h-40 md:w-40">
                <motion.span
                  className="absolute inset-3 rounded-full border border-cyan-300/70"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.span
                  className="absolute inset-7 rounded-full bg-[radial-gradient(circle,#20c7c6_0%,#0a7fbc_42%,#071d38_100%)] opacity-90"
                  animate={{ boxShadow: ["0 0 30px rgba(32,199,198,.42)", "0 0 68px rgba(32,199,198,.72)", "0 0 30px rgba(32,199,198,.42)"] }}
                  transition={{ delay: 1.3, duration: 1.4, repeat: 2 }}
                />
                <svg className="relative h-20 w-20 md:h-24 md:w-24" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                  <motion.path
                    d="M50 18 C35 18 27 29 30 42 C19 49 21 67 35 72 C39 82 54 85 62 75 C77 76 86 62 78 49 C87 34 73 16 58 23 C56 20 53 18 50 18Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.55, duration: 0.65 }}
                  />
                  {[["32", "43"], ["49", "31"], ["63", "49"], ["44", "65"], ["66", "67"]].map(([cx, cy], index) => (
                    <motion.circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r="3"
                      fill="#b7f3ef"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.72 + index * 0.08, duration: 0.25 }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>

            {careNodes.map(({ label, Icon, position, delay }) => (
              <motion.div
                key={label}
                className={`absolute z-20 ${position}`}
                initial={{ opacity: 0, scale: 0.72, y: 18 }}
                animate={{ opacity: [0, 1, 1, 0.34], scale: [0.72, 1, 1, 0.94], y: [18, 0, 0, 4] }}
                transition={{ delay, duration: 2.05, times: [0, 0.22, 0.72, 1], ease: "easeOut" }}
              >
                <div className="flex min-w-[138px] items-center gap-3 rounded-2xl border border-white/55 bg-white/70 px-3 py-3 shadow-[0_18px_45px_rgba(7,29,56,.12)] backdrop-blur-xl md:min-w-[184px] md:px-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-[#0a7fbc] shadow-[0_0_22px_rgba(32,199,198,.24)]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-bold leading-tight text-slate-800 md:text-sm">{label}</span>
                </div>
              </motion.div>
            ))}

            <svg
              className="absolute left-1/2 top-1/2 z-40 h-44 w-[92%] -translate-x-1/2 -translate-y-1/2 overflow-visible md:h-56 md:w-[82%]"
              viewBox="0 0 980 260"
              fill="none"
              aria-hidden="true"
            >
              {careNodes.map((_, index) => {
                const targets = [
                  "M490 130 C330 70 220 76 128 82",
                  "M490 130 C650 70 760 76 852 82",
                  "M490 130 C330 180 225 200 120 205",
                  "M490 130 C650 180 755 200 860 205",
                  "M490 130 C490 72 490 54 490 30",
                ];
                return (
                  <motion.path
                    key={targets[index]}
                    d={targets[index]}
                    stroke="rgba(32,199,198,.42)"
                    strokeWidth="1.4"
                    strokeDasharray="5 8"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
                    transition={{ delay: 2.02 + index * 0.14, duration: 2.15, times: [0, 0.35, 0.78, 1] }}
                  />
                );
              })}

              <motion.path
                d="M80 135 H260 L283 135 L302 95 L326 177 L350 135 H497 L521 135 L543 105 L564 155 L584 135 H900"
                stroke="url(#ecgGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 3.35, duration: 1.15, times: [0, 0.62, 0.84, 1], ease: "easeInOut" }}
              />
              <motion.path
                d="M552 58 C496 30 420 42 406 86 C392 132 478 130 522 146 C579 166 559 223 479 219 C426 216 383 194 355 166"
                stroke="url(#ecgGradient)"
                strokeWidth="9"
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0, 1] }}
                transition={{ delay: 4.12, duration: 0.55, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="ecgGradient" x1="80" x2="900" y1="0" y2="0">
                  <stop stopColor="#0a7fbc" />
                  <stop offset=".5" stopColor="#20c7c6" />
                  <stop offset="1" stopColor="#8ee8c7" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              className="absolute left-1/2 top-[54%] z-50 flex w-[min(82vw,480px)] -translate-x-1/2 flex-col items-center text-center"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 4.35, duration: 0.45, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 rounded-[28px] border border-cyan-200/55 bg-white/50 px-5 py-4 shadow-[0_24px_70px_rgba(7,29,56,.15),0_0_42px_rgba(32,199,198,.18)] backdrop-blur-2xl md:gap-4 md:px-7">
                <svg className="h-14 w-14 md:h-16 md:w-16" viewBox="0 0 90 90" fill="none" aria-hidden="true">
                  <motion.path
                    d="M64 17 C52 8 29 10 23 25 C17 40 41 40 53 45 C70 52 61 72 38 70 C25 69 15 62 10 54"
                    stroke="url(#wordmarkGradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 4.38, duration: 0.45 }}
                  />
                  <motion.path
                    d="M18 75 C34 66 55 61 77 63"
                    stroke="url(#wordmarkGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 4.56, duration: 0.36 }}
                  />
                  <defs>
                    <linearGradient id="wordmarkGradient" x1="8" x2="80" y1="8" y2="80">
                      <stop stopColor="#0a7fbc" />
                      <stop offset=".54" stopColor="#20c7c6" />
                      <stop offset="1" stopColor="#8ee8c7" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-left font-[var(--font-display)] text-4xl font-extrabold tracking-[-.08em] text-[#071d38] md:text-5xl">
                  Samvaad<span className="bg-gradient-to-r from-[#20c7c6] to-[#0a7fbc] bg-clip-text text-transparent">AI</span>
                </span>
              </div>
              <motion.p
                className="mt-4 text-sm font-extrabold tracking-[.2em] text-slate-700 md:text-base"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.8, duration: 0.35 }}
              >
                From First Call to Full Recovery.
              </motion.p>
            </motion.div>
          </div>

          <button
            type="button"
            className="absolute bottom-6 right-6 rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-slate-700 shadow-[0_14px_40px_rgba(7,29,56,.12)] backdrop-blur-xl transition hover:bg-white"
            onClick={finish}
          >
            Skip intro
          </button>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
