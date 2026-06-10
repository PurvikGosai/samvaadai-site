"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  FileText,
  HeartPulse,
  MessageCircle,
  PhoneCall,
  Pill,
  Smartphone,
  Stethoscope,
  UserRound,
} from "lucide-react";

type SamvaadIntroAnimationProps = {
  onComplete?: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

const journeySteps = [
  { label: "Call Received", Icon: PhoneCall, delay: 1.62, x: 112, y: 156 },
  { label: "Appointment Booked", Icon: CalendarCheck, delay: 1.84, x: 250, y: 94 },
  { label: "Doctor Consultation", Icon: Stethoscope, delay: 2.08, x: 394, y: 153 },
  { label: "Digital Prescription", Icon: FileText, delay: 2.44, x: 540, y: 94 },
  { label: "WhatsApp Updates", Icon: MessageCircle, delay: 2.68, x: 682, y: 153 },
  { label: "Medicine Reminders", Icon: Pill, delay: 2.9, x: 822, y: 94 },
];

export default function SamvaadIntroAnimation({ onComplete }: SamvaadIntroAnimationProps) {
  const [visible, setVisible] = useState(true);
  const hasFinishedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${6 + ((index * 17) % 88)}%`,
        top: `${9 + ((index * 31) % 78)}%`,
        delay: 0.25 + index * 0.055,
        size: 2 + (index % 3),
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
    const timer = window.setTimeout(finish, reduceMotion ? 900 : 5350);
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
          aria-label="SamvaadAI patient journey intro animation"
          className="fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-white text-slate-950"
          exit={{ opacity: 0, scale: 1.012 }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(32,199,198,.18),transparent_28%),radial-gradient(circle_at_78%_54%,rgba(10,127,188,.13),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f4fbfb_48%,#eef8f9_100%)]" />
          <div className="absolute inset-0 opacity-[.18] [background-image:linear-gradient(rgba(7,29,56,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,56,.1)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30" />
          <div className="absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/25" />

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(32,199,198,.55)]"
              style={{
                left: particle.left,
                top: particle.top,
                height: particle.size,
                width: particle.size,
              }}
              initial={{ opacity: 0, scale: 0.35, y: 12 }}
              animate={{ opacity: [0, 0.52, 0], scale: [0.35, 1, 0.55], y: [8, -18] }}
              transition={{ delay: particle.delay, duration: 3.6, repeat: Infinity, repeatDelay: 1.2 }}
            />
          ))}

          <div className="relative h-[650px] w-full max-w-6xl px-4 md:h-[700px]">
            <motion.div
              className="absolute left-1/2 top-[7%] z-50 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-white/70 px-4 py-2 text-center text-[10px] font-extrabold uppercase tracking-[.3em] text-slate-500 shadow-[0_18px_60px_rgba(7,29,56,.08)] backdrop-blur-2xl md:top-[8%]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              Patient Journey
            </motion.div>

            <motion.div
              className="absolute left-[6%] top-[31%] z-30 md:left-[10%] md:top-[34%]"
              initial={{ opacity: 0, x: -26, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-26, 0, 0, 16], scale: [0.9, 1, 1, 0.96] }}
              transition={{ duration: 1.24, times: [0, 0.22, 0.72, 1], ease }}
            >
              <div className="relative flex items-center gap-5 rounded-[34px] border border-white/80 bg-white/72 p-4 shadow-[0_24px_70px_rgba(7,29,56,.13)] backdrop-blur-2xl md:p-5">
                <div className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 shadow-inner md:h-24 md:w-24">
                  <motion.span
                    className="absolute inset-2 rounded-full border border-cyan-200"
                    animate={{ scale: [0.94, 1.05, 0.94], opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  />
                  <UserRound className="h-10 w-10 text-[#0a7fbc] md:h-12 md:w-12" strokeWidth={1.7} />
                </div>
                <div className="relative grid h-24 w-14 place-items-end rounded-[22px] border border-slate-200 bg-slate-950 p-2 shadow-[0_20px_50px_rgba(7,29,56,.2)] md:h-28 md:w-16">
                  <div className="absolute inset-2 rounded-[17px] bg-gradient-to-b from-[#102942] to-[#06192e]" />
                  <Smartphone className="relative mb-8 h-7 w-7 text-cyan-100" strokeWidth={1.8} />
                  <motion.button
                    aria-label="Patient taps call button"
                    className="relative mb-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#20c7c6] to-[#0a7fbc] text-white shadow-[0_0_25px_rgba(32,199,198,.72)]"
                    animate={{ scale: [1, 0.88, 1.08, 1] }}
                    transition={{ delay: 0.28, duration: 0.44, ease }}
                    type="button"
                  >
                    <PhoneCall className="h-4 w-4" strokeWidth={2} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <svg className="absolute inset-x-0 top-[33%] z-20 mx-auto h-[300px] w-[96%] max-w-[1050px] overflow-visible md:top-[32%]" viewBox="0 0 1050 300" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="journeyGradient" x1="40" x2="1010" y1="0" y2="0">
                  <stop stopColor="#0a7fbc" />
                  <stop offset=".5" stopColor="#20c7c6" />
                  <stop offset="1" stopColor="#8ee8c7" />
                </linearGradient>
                <filter id="journeyGlow" x="-20%" y="-80%" width="140%" height="260%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.78 0 0 0 0 0.76 0 0 0 .7 0" />
                  <feBlend in="SourceGraphic" />
                </filter>
              </defs>

              <motion.path
                d="M118 168 C178 132 225 121 292 144 C363 169 405 173 470 141 C539 108 587 108 650 145 C718 185 773 185 842 139 C899 102 946 112 1002 151"
                stroke="url(#journeyGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#journeyGlow)"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 0.32, 0.68, 1, 1, 0], opacity: [0, 1, 1, 1, 1, 0] }}
                transition={{ delay: 0.42, duration: 3.85, times: [0, 0.24, 0.52, 0.74, 0.9, 1], ease }}
              />

              <motion.path
                d="M124 168 C174 126 230 112 304 145 C365 172 406 173 470 141"
                stroke="url(#journeyGradient)"
                strokeWidth="7"
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 0.72, duration: 1.05, times: [0, 0.55, 0.84, 1], ease }}
              />

              <motion.path
                d="M70 170 C99 170 100 170 120 170 C132 170 136 148 146 148 C158 148 158 193 170 193 C182 193 184 155 196 155 C210 155 211 170 228 170"
                stroke="url(#journeyGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 0.18, duration: 1.18, times: [0, 0.52, 0.84, 1], ease }}
              />

              <motion.path
                d="M104 168 L272 168 L293 168 L313 124 L337 218 L360 168 H522 L544 168 L565 138 L588 194 L608 168 H978"
                stroke="url(#journeyGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ delay: 3.42, duration: 0.82, times: [0, 0.66, 0.88, 1], ease }}
              />

              <motion.path
                d="M616 80 C560 49 474 60 462 109 C450 157 542 156 590 177 C650 203 625 258 535 250 C472 245 427 218 394 182"
                stroke="url(#journeyGradient)"
                strokeWidth="9"
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0, 1] }}
                transition={{ delay: 4.18, duration: 0.48, ease }}
              />
            </svg>

            <motion.div
              className="absolute left-1/2 top-[39%] z-40 -translate-x-1/2 -translate-y-1/2 md:top-[42%]"
              initial={{ opacity: 0, scale: 0.45 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.45, 1, 1.08, 0.82] }}
              transition={{ delay: 0.92, duration: 1.52, times: [0, 0.24, 0.76, 1], ease }}
            >
              <div className="relative grid h-32 w-32 place-items-center rounded-full border border-cyan-200/80 bg-white/72 shadow-[0_0_80px_rgba(32,199,198,.42),0_28px_80px_rgba(7,29,56,.14)] backdrop-blur-2xl md:h-40 md:w-40">
                <motion.span className="absolute inset-2 rounded-full border border-cyan-300/60" animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
                <motion.span className="absolute inset-7 rounded-full bg-[radial-gradient(circle,#20c7c6_0%,#0a7fbc_45%,#071d38_100%)]" animate={{ boxShadow: ["0 0 26px rgba(32,199,198,.42)", "0 0 76px rgba(32,199,198,.74)", "0 0 26px rgba(32,199,198,.42)"] }} transition={{ delay: 1, duration: 1.05, repeat: 2 }} />
                {[0, 1, 2, 3, 4, 5].map((dot) => (
                  <motion.span
                    key={dot}
                    className="absolute h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_16px_rgba(183,243,239,.9)]"
                    style={{
                      left: `${50 + Math.cos((dot / 6) * Math.PI * 2) * 32}%`,
                      top: `${50 + Math.sin((dot / 6) * Math.PI * 2) * 32}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + dot * 0.06, duration: 0.22 }}
                  />
                ))}
                <svg className="relative h-20 w-20 md:h-24 md:w-24" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                  <motion.path
                    d="M50 17 C36 17 28 28 31 41 C20 48 22 66 36 71 C41 82 55 84 63 75 C78 75 86 61 78 48 C87 33 73 16 59 23 C56 20 53 17 50 17Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.12, duration: 0.52, ease }}
                  />
                  <motion.path
                    d="M35 45 L50 34 L65 49 M44 66 L55 51 L67 66"
                    stroke="#b7f3ef"
                    strokeWidth="3"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.28, duration: 0.38, ease }}
                  />
                </svg>
              </div>
            </motion.div>

            <div className="absolute left-1/2 top-[42%] z-30 hidden h-[300px] w-[1050px] -translate-x-1/2 md:block">
              {journeySteps.map(({ label, Icon, delay, x, y }) => (
                <motion.div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: x, top: y }}
                  initial={{ opacity: 0, scale: 0.7, y: 16 }}
                  animate={{ opacity: [0, 1, 1, 0.24], scale: [0.7, 1, 1, 0.93], y: [16, 0, 0, 4] }}
                  transition={{ delay, duration: 2.1, times: [0, 0.18, 0.75, 1], ease }}
                >
                  <div className="flex min-w-[168px] items-center gap-3 rounded-2xl border border-white/75 bg-white/74 px-3 py-3 shadow-[0_18px_50px_rgba(7,29,56,.12)] backdrop-blur-2xl">
                    <motion.span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-100 text-[#0a7fbc] shadow-[0_0_22px_rgba(32,199,198,.22)]" animate={{ scale: [1, 1.08, 1] }} transition={{ delay: delay + 0.14, duration: 0.48 }}>
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </motion.span>
                    <span className="text-[12px] font-extrabold leading-tight text-slate-800">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute left-1/2 top-[57%] z-30 grid w-[min(92vw,420px)] -translate-x-1/2 grid-cols-2 gap-2 md:hidden">
              {journeySteps.map(({ label, Icon, delay }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-2 rounded-2xl border border-white/75 bg-white/74 px-3 py-2 shadow-[0_14px_36px_rgba(7,29,56,.1)] backdrop-blur-2xl"
                  initial={{ opacity: 0, scale: 0.86, y: 10 }}
                  animate={{ opacity: [0, 1, 1, 0.2], scale: [0.86, 1, 1, 0.95], y: [10, 0, 0, 2] }}
                  transition={{ delay, duration: 2.1, times: [0, 0.18, 0.75, 1], ease }}
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#0a7fbc]" strokeWidth={1.9} />
                  <span className="text-[10px] font-extrabold leading-tight text-slate-800">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute right-[7%] top-[45%] z-40 hidden -translate-y-1/2 md:block"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1, 1.04, 0.86] }}
              transition={{ delay: 3.28, duration: 1.02, times: [0, 0.24, 0.78, 1], ease }}
            >
              <div className="relative grid h-24 w-24 place-items-center rounded-full border border-emerald-200 bg-white/74 shadow-[0_0_55px_rgba(142,232,199,.45)] backdrop-blur-2xl">
                {[0, 0.18, 0.36].map((delay) => (
                  <motion.span key={delay} className="absolute inset-0 rounded-full border border-emerald-300" animate={{ scale: [0.72, 1.7], opacity: [0.7, 0] }} transition={{ delay: 3.36 + delay, duration: 0.86, ease: "easeOut" }} />
                ))}
                <HeartPulse className="h-10 w-10 text-emerald-500" strokeWidth={1.8} />
                <span className="absolute -bottom-8 rounded-full bg-white/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-600 shadow-lg">Recovery</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-[50%] z-50 flex w-[min(88vw,560px)] -translate-x-1/2 flex-col items-center text-center md:top-[52%]"
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 4.34, duration: 0.42, ease }}
            >
              <div className="flex items-center gap-3 rounded-[30px] border border-cyan-200/70 bg-white/72 px-5 py-4 shadow-[0_28px_82px_rgba(7,29,56,.14),0_0_45px_rgba(32,199,198,.18)] backdrop-blur-2xl md:gap-4 md:px-7">
                <svg className="h-14 w-14 md:h-16 md:w-16" viewBox="0 0 90 90" fill="none" aria-hidden="true">
                  <motion.path
                    d="M64 17 C52 8 29 10 23 25 C17 40 41 40 53 45 C70 52 61 72 38 70 C25 69 15 62 10 54"
                    stroke="url(#samvaadMarkGradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 4.22, duration: 0.46, ease }}
                  />
                  <motion.path
                    d="M18 75 C34 66 55 61 77 63"
                    stroke="url(#samvaadMarkGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 4.46, duration: 0.34, ease }}
                  />
                  <defs>
                    <linearGradient id="samvaadMarkGradient" x1="8" x2="80" y1="8" y2="80">
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
                className="mt-4 text-sm font-extrabold tracking-[.16em] text-slate-700 md:text-base md:tracking-[.2em]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.72, duration: 0.34, ease }}
              >
                From First Call to Full Recovery
              </motion.p>
            </motion.div>
          </div>

          <button
            type="button"
            className="absolute bottom-6 right-6 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-slate-700 shadow-[0_14px_40px_rgba(7,29,56,.12)] backdrop-blur-xl transition hover:bg-white"
            onClick={finish}
          >
            Skip intro
          </button>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
