import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Activity, Globe } from 'lucide-react';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timings = [
      { step: 1, time: 2000 }, { step: 2, time: 4000 }, { step: 3, time: 6000 },
      { step: 4, time: 8000 }, { step: 5, time: 9500 }, { step: 6, time: 11000 }
    ];
    const timeouts = timings.map(t => setTimeout(() => t.step === 6 ? onComplete() : setStep(t.step), t.time));
    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  const Logo = ({ className = "" }) => (
    <>
      <img src="/logo.png" alt="AUREXIS" className={`w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] ${className}`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('fallback-logo-active'); }} />
      <div className="hidden fallback-logo-active w-full h-full rounded-full border border-[#C5A059]/30 flex items-center justify-center relative z-10">
         <div className="w-1/3 h-1/3 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8A6D23] shadow-[0_0_30px_rgba(197,160,89,0.4)]" />
      </div>
    </>
  );

  return (
    <motion.div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center overflow-hidden" exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut" }}>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="s0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1 }} className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 [&.fallback-logo-active>div.hidden]:flex"><div className="absolute inset-0 bg-[#C5A059]/10 blur-3xl rounded-full" /><Logo /></div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-2xl md:text-3xl font-mono text-[#C5A059] tracking-[0.3em] uppercase mb-4">Aurexis</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="text-xs md:text-sm text-white/50 tracking-[0.2em] uppercase font-light text-center px-4">Powering Intelligent Software Systems</motion.p>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div initial={{ y: 0, scale: 1 }} animate={{ y: -100, scale: 0.6 }} transition={{ duration: 1.5 }} className="relative w-40 h-40 md:w-56 md:h-56 [&.fallback-logo-active>div.hidden]:flex"><Logo /></motion.div>
            <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent absolute top-1/2 -translate-y-1/2" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-lg md:text-2xl font-light text-white tracking-widest absolute top-1/2 mt-12 text-center px-4">Built for Structure. Built for Scale.</motion.h2>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <Layers className="w-10 h-10 md:w-12 md:h-12 text-[#C5A059] mb-8 opacity-80" strokeWidth={1} />
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-wide mb-4">MakrOS</h2>
            <p className="text-sm md:text-base text-white/60 font-light tracking-wide text-center max-w-md leading-relaxed">A creator operating system for direction, execution, and monetization.</p>
            <motion.div initial={{ width: 0 }} animate={{ width: "40px" }} transition={{ delay: 0.4, duration: 0.8 }} className="h-[1px] bg-[#C5A059]/50 mt-8" />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <Activity className="w-10 h-10 md:w-12 md:h-12 text-[#C5A059] mb-8 opacity-80" strokeWidth={1} />
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-wide mb-4">Ellite Workout</h2>
            <p className="text-sm md:text-base text-white/60 font-light tracking-wide text-center max-w-md leading-relaxed">A structured fitness platform focused on discipline and performance.</p>
            <motion.div initial={{ width: 0 }} animate={{ width: "40px" }} transition={{ delay: 0.4, duration: 0.8 }} className="h-[1px] bg-[#C5A059]/50 mt-8" />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div key="s4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <Globe className="w-10 h-10 md:w-12 md:h-12 text-[#C5A059] mb-8 opacity-80" strokeWidth={1} />
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-wide mb-4">AD SAICO</h2>
            <p className="text-sm md:text-base text-white/60 font-light tracking-wide text-center max-w-md leading-relaxed">A digital solutions and advertising platform for modern brands.</p>
            <motion.div initial={{ width: 0 }} animate={{ width: "40px" }} transition={{ delay: 0.4, duration: 0.8 }} className="h-[1px] bg-[#C5A059]/50 mt-8" />
          </motion.div>
        )}
        {step === 5 && (
          <motion.div key="s5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1 }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 [&.fallback-logo-active>div.hidden]:flex"><div className="absolute inset-0 bg-[#C5A059]/10 blur-2xl rounded-full" /><Logo /></div>
            <h2 className="text-sm md:text-base font-light text-white/80 tracking-[0.2em] uppercase text-center leading-loose">Systems. Software.<br/><span className="text-[#C5A059]">Long-term vision.</span></h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
