import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Layers, Activity, Globe, Shield, Server, Compass } from "lucide-react";
import Intro from "./components/Intro";

const products = [
  {
    name: "MakrOS",
    url: "https://makros.netlify.app",
    description: "A creator operating system designed to help digital creators think, execute, and monetize with clarity.",
    icon: Layers,
  },
  {
    name: "Ellite Workout",
    url: "https://elliteworkout.netlify.app",
    description: "A focused fitness platform built around structure, discipline, and sustainable performance.",
    icon: Activity,
  },
  {
    name: "AD SAICO",
    url: "https://adsaico.netlify.app",
    description: "A digital solutions and advertising platform supporting modern brands and creators.",
    icon: Globe,
  },
];

const features = [
  {
    title: "Structure",
    description: "Independent operation with unified standards.",
    icon: Shield,
  },
  {
    title: "Infrastructure",
    description: "Robust foundations for scalable software.",
    icon: Server,
  },
  {
    title: "Direction",
    description: "Long-term vision over short-term trends.",
    icon: Compass,
  },
];

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <Intro onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {introComplete && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="min-h-screen bg-[#0a0a0a] text-[#E5E5E5] selection:bg-[#C5A059]/30 selection:text-white font-sans overflow-x-hidden"
        >
          {/* Ambient Gold Glow */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Navigation */}
          <nav className="w-full px-6 py-8 md:px-12 lg:px-24 flex justify-between items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xs tracking-[0.2em] font-medium uppercase text-white/50"
            >
              Aurexis
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-xs font-mono text-white/30 uppercase tracking-widest"
            >
              Index 01
            </motion.div>
          </nav>

          <main className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mb-12 relative"
              >
                {/* Logo Placeholder - User should replace src with actual uploaded logo path */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#C5A059]/10 blur-3xl rounded-full" />
                  <img 
                    src="/logo.png" 
                    alt="AUREXIS Logo" 
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                    onError={(e) => {
                      // Fallback if logo.png is not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('fallback-logo');
                    }}
                  />
                  {/* Fallback visual if image fails to load */}
                  <div className="hidden fallback-logo w-32 h-32 rounded-full border border-[#C5A059]/30 flex items-center justify-center relative z-10">
                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8A6D23] shadow-[0_0_30px_rgba(197,160,89,0.4)]" />
                     <div className="absolute inset-[-20%] border border-[#C5A059]/20 rounded-[40%] animate-[spin_10s_linear_infinite]" />
                     <div className="absolute inset-[-40%] border border-[#C5A059]/10 rounded-[35%] animate-[spin_15s_linear_infinite_reverse]" />
                  </div>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-sm md:text-base font-mono text-[#C5A059] tracking-[0.3em] uppercase mb-6"
              >
                Aurexis
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-xl md:text-3xl font-light leading-relaxed tracking-wide text-white/80 max-w-2xl"
              >
                A systems company building focused digital products.
              </motion.p>
            </section>

            {/* Products Section */}
            <section className="py-32">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 flex items-center gap-6"
              >
                <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em]">
                  Operating Products
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/20 to-transparent" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <motion.a
                      key={product.name}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="group relative block p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/0 to-[#C5A059]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#C5A059]/50 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all duration-500">
                          <Icon className="w-5 h-5 text-white/70 group-hover:text-[#C5A059] transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-medium text-white tracking-wide">
                            {product.name}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#C5A059] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" strokeWidth={1.5} />
                        </div>
                        
                        <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                          {product.description}
                        </p>

                        {/* Animated Underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </section>

            {/* Brand Relationship Section */}
            <section className="py-32">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 flex items-center gap-6"
              >
                <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em]">
                  Structure & Intent
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/20 to-transparent" />
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-6">
                    Independent products.<br />
                    <span className="text-white/40">Unified foundation.</span>
                  </h3>
                  <p className="text-base text-white/60 font-light leading-relaxed">
                    AUREXIS operates as the silent infrastructure behind its products. The parent brand remains intentionally low-profile, allowing each software system to serve its respective audience without distraction.
                  </p>
                </motion.div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="flex flex-col"
                      >
                        <Icon className="w-6 h-6 text-[#C5A059] mb-6 opacity-80" strokeWidth={1.5} />
                        <h4 className="text-sm font-medium text-white tracking-wide mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-white/40 font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="w-full px-6 py-12 md:px-12 lg:px-24 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C5A059] opacity-50" />
              <div className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">
                AUREXIS © {new Date().getFullYear()}
              </div>
            </div>
            <div className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">
              Systems Company
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}
